from flask import Flask, request, Response
from flask_cors import CORS
import pandas as pd
import numpy as np
import joblib
import requests
from sklearn.metrics.pairwise import cosine_similarity
import json

app = Flask(__name__)
CORS(app)

df = joblib.load('embeddings.joblib')

OLLAMA_URL = "http://localhost:11434"


def create_embedding(text_list):
    r = requests.post(f"{OLLAMA_URL}/api/embed", json={
        "model": "bge-m3",
        "input": text_list
    })
    return r.json()["embeddings"]


@app.route("/chat", methods=["POST"])
def chat():

    data = request.get_json()

    incoming_query = data.get("message", "").strip()

    if not incoming_query:
        return Response("Empty query", status=400)

    question_embedding = create_embedding([incoming_query])[0]

    similarities = cosine_similarity(
        np.vstack(df['embedding']),
        [question_embedding]
    ).flatten()

    top_results = 5
    max_indx = similarities.argsort()[::-1][0:top_results]
    new_df = df.loc[max_indx]

    prompt = f''' I am teaching Cloud Computing using NPTEL lectures. Here are video chunks containing video title, video number , start time in seconds, end time in seconds, the text at that :
{new_df[["title", "number", "start", "end", "text"]].to_json(orient="records")}
-----------------------------------------------
"{incoming_query}"
User asked this question related to the video chunks, you have to answer in a human way (don't mention the above format or about the chunks, its just for you) where and how much content is taught where (in which video and at what timestamp) and guide the user to go to that particular video. If user asks unrelated question, tell him that you can only answer questions related to the course . Keep your replies short, crisp and to the point.
'''

    def generate():
        with requests.post(
            f"{OLLAMA_URL}/api/generate",
            json={
                "model": "llama3.2",
                "prompt": prompt,
                "stream": True
            },
            stream=True
        ) as r:

            for line in r.iter_lines():
                if line:
                    chunk = json.loads(line.decode("utf-8"))

                    if "response" in chunk:
                        yield chunk["response"]

    return Response(
        generate(),
        content_type="text/plain",
        headers={"Cache-Control": "no-cache"}
    )


if __name__ == "__main__":
    app.run(debug=True)