# 🎓 RAG AI Teaching Assistant

An AI-powered learning platform that allows students to **study large YouTube courses efficiently** by asking questions directly to an AI chatbot trained on the course content.

This project solves a common problem with long educational playlists (for example **Love Babbar’s 149-lecture DSA series**) where finding specific topics inside hours of video content is extremely difficult.

The platform allows users to:

- Watch course lectures
- Ask questions about the course
- Get **context-aware answers**
- Be guided to the **exact lecture and timestamp** where the topic is explained

---

# 🚀 Project Overview

Traditional YouTube learning has a major limitation:

> Searching inside long playlists is extremely difficult.

Example:

- 150 lectures
- each 1–2 hours long
- thousands of minutes of content

Finding something like:

```
Binary Search explanation
```

might require watching **many lectures manually**.

This project solves that using **Retrieval Augmented Generation (RAG)**.

The chatbot is trained on the **transcripts of course lectures**, allowing it to answer questions and guide students to the exact lecture section.

---

# 🧠 How It Works (RAG Pipeline)

The system works in the following pipeline:

```
Videos
   ↓
Audio Extraction
   ↓
Speech to Text
   ↓
Chunking + Embeddings
   ↓
Vector Search
   ↓
LLM Response
```

When a user asks a question:

1. The query is converted into an **embedding**
2. The system finds **similar lecture chunks**
3. Those chunks are added to a **prompt**
4. The LLM generates a **context-aware answer**

---

# 🏗 Project Architecture

```
React Frontend
      │
      │ HTTP Request
      ▼
Flask Backend (RAG Engine)
      │
      │ Embedding Search
      ▼
Vector Database (Joblib)
      │
      │ Context Retrieval
      ▼
LLM (Ollama - Llama3.2)
```

---

# 🖥 Tech Stack

## Frontend

- React
- TailwindCSS
- React Router

## Backend

- Python
- Flask
- Flask CORS

## AI / RAG

- Ollama
- Llama3.2
- BGE-M3 Embeddings
- Scikit-learn (Cosine Similarity)

## Data Processing

- Pandas
- NumPy
- Joblib

---

# ✨ Features

### 📚 Course Learning Interface

- Watch lectures inside the platform
- Structured lecture playlist
- Lecture highlighting

### 🤖 AI Teaching Assistant

- Ask questions related to the course
- Context aware responses
- Short and focused answers

### ⚡ Streaming AI Responses

The chatbot streams responses token-by-token similar to ChatGPT.

### 🎥 Lecture Guidance

The chatbot tells users:

```
which lecture
which timestamp
```

where the concept is explained.

---

# 📂 Project Structure

```
RAG-Assist
│
├── frontend
│   ├── React UI
│   ├── Course Player
│   ├── AI Chat Interface
│
├── backend
│   ├── Flask Server
│   ├── RAG Pipeline
│   └── Streaming API
│
├── data-processing
│   ├── video_to_mp3.py
│   ├── mp3_to_json.py
│   └── preprocess_json.py
│
├── videos
├── embeddings.joblib
```

---

# ⚙️ How To Train On Your Own Course

## Step 1 — Collect Videos

Place all course videos inside:

```
videos/
```

---

## Step 2 — Convert Videos to Audio

Run:

```bash
python video_to_mp3.py
```

This extracts audio from all videos.

---

## Step 3 — Convert Audio to Text

Run:

```bash
python mp3_to_json.py
```

This generates transcript JSON files.

Each transcript contains:

```
lecture number
timestamps
text chunks
```

---

## Step 4 — Generate Embeddings

Run:

```bash
python preprocess_json.py
```

This will:

- chunk the transcripts
- generate embeddings
- store them in:

```
embeddings.joblib
```

---

## Step 5 — Start the Backend

Run:

```bash
python backend.py
```

Flask server starts at:

```
http://localhost:5000
```

---

## Step 6 — Start the Frontend

Navigate to frontend folder:

```bash
npm install
npm run dev
```

---

# 📸 Platform Interface

The platform includes:

- Course video player
- Lecture playlist
- AI assistant chat interface

Students can watch lectures and ask questions **in the same interface**.

---

# 🎯 Example Query

User asks:

```
Explain cloud computing deployment models
```

AI Response:

```
This concept is explained in Lecture 4 at around 06:32.
The instructor discusses Public, Private and Hybrid cloud models.
```

---

# 🔮 Future Improvements

- Timestamp clickable navigation
- Multiple course support
- Vector database (FAISS / Chroma)
- Cloud deployment
- Conversation memory

---

# 👨‍💻 Author

Built as an experiment to explore:

- Retrieval Augmented Generation
- AI powered education tools
- semantic search for video learning
