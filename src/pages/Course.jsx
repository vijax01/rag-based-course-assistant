import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import courses from '../data/courses'
import { useParams } from 'react-router-dom'

const Course = () => {

  const { id } = useParams();
  const course = courses[id - 1]; // temporary logic to access the current course
  const [currentVideo, setCurrentVideo] = useState(course["course-details"][0]["video-path"]);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");





  function appendMessage(text, sender) {

    const message = {
      text: text,
      sender: sender
    };

    setMessages(prev => [...prev, message]);

  }






  async function sendMessage() {

    const userText = inputValue.trim();
    if (!userText) return;

    appendMessage(userText, "user");
    setInputValue("");

    // show thinking message
    let botIndex;

    setMessages(prev => {
      botIndex = prev.length;
      return [...prev, { text: "Thinking...", sender: "bot" }];
    });

    const response = await fetch("http://127.0.0.1:5000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userText })
    });

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    let botText = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value);
      botText += chunk;

      setMessages(prev => {
        const updated = [...prev];
        updated[botIndex].text = botText;
        return updated;
      });
    }
  }





  function handleKeyDown(e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  }





  return (
    <>
      {/*Navbar*/}
      <div className='h-14 w-full bg-[#16161D] p-4 flex items-center gap-4 fixed top-0 z-10' >
        <Link to="/" >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-arrow-left-icon lucide-circle-arrow-left"><circle cx="12" cy="12" r="10" /><path d="m12 8-4 4 4 4" /><path d="M16 12H8" /></svg>
        </Link>
        <p className='text-white text-1xl' >
          {course.title}
        </p>
      </div>
      <div className="line w-full h-0.5 bg-[#595c73] fixed top-14 z-10"></div>

      <div className="flex mt-14">

        {/* Left Container */}
        <div className='h-screen w-[70%]' >
          <div className="wrapper bg-[#16161D] w-full h-160">
            <video key={currentVideo} controls className="m-auto h-160" poster="/thumbnails/lec01.avif">
              <source src={currentVideo} type="video/mp4" />
            </video>
          </div>

          {/* Course Content Navbar */}
          <div className='flex items-center gap-4 pt-2 px-10 border-b-2 border-[#d1d2e0]' >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
            <p className='text-lg p-2 cursor-pointer border-b-2 box-border border-[#16161D]' >Course Content</p>
            <p className='text-lg p-2 cursor-pointer hover:border-b-2 hover:border-[#16161D]' >Overview</p>
            <p className='text-lg p-2 cursor-pointer hover:border-b-2 hover:border-[#16161D]' >Notes</p>
            <p className='text-lg p-2 cursor-pointer hover:border-b-2 hover:border-[#16161D]' >Reviews</p>
            <p className='text-lg p-2 cursor-pointer hover:border-b-2 hover:border-[#16161D]' >Learing Tools</p>
          </div>

          {/* Course Content List */}
          <div className="w-[97%] mx-auto pb-1 my-5 h-auto">

            {/* This is the repeatable element */}
            {course['course-details'].map((video, index) => (

              <div className={`cursor-pointer flex gap-2 w-full h-20 my-3 border-[#d1d2e0] border-2 p-1 hover:bg-[#e0e1e4] ${currentVideo === video['video-path'] ? "bg-[#e0e1e4]" : "bg-[#F6F7F9]"}`}
                key={index}
                onClick={() => setCurrentVideo(video["video-path"])}
              >
                <img src={video['thumbnail-path']} alt="lecture thumbnail" className='h-17' />
                <div className='flex flex-col gap-2' >
                  <p className='text-lg' >{video['video-title']}</p>
                  <p className='text-[#595c73]' >{video['duration']}</p>
                </div>
              </div>

            ))}

          </div>

        </div>

        {/* Right Container */}
        <div className="h-screen w-[30%] box-border border-l-2 border-[#d1d2e0] fixed right-0 top-14">

          {/* Course Assitant Right Navbar */}
          <div className='flex items-center gap-4 pt-2 px-10 border-b-2 border-[#d1d2e0]' >
            <div className='flex items-center p-2 cursor-pointer border-b-2 border-[#16161D] gap-1' >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="indigo" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles-icon lucide-sparkles"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" /><path d="M20 2v4" /><path d="M22 4h-4" /><circle cx="4" cy="20" r="2" /></svg>
              <p className='text-lg p' >AI Assistant</p>
            </div>
            <p className='text-lg p-2 cursor-pointer hover:border-b-2 hover:border-[#16161D]' >Q&A</p>
          </div>

          <div className='chat-box flex-1 p-2.5 overflow-y-auto flex flex-col bg-[#F6F7F9] h-186 w-[calc(30%-.100rem)] fixed right-0 top-28' id='chatBox'>

            {messages.map((msg, index) => (

              <div
                key={index}
                className={`flex w-full my-2 ${msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
              >

                <div
                  className={`px-3 py-2 rounded-lg max-w-[75%] ${msg.sender === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-black"
                    }`}
                >

                  {msg.text}

                </div>

              </div>

            ))}

          </div>


          {/* Chatbot input container */}
          <div className='h-14 w-[30%] fixed bottom-0 right-0 flex gap-2 items-center px-4 border-t-2 border-[#d1d2e0]' >
            <div className="upload-button flex items-center justify-center h-8 w-8 border rounded-full border-[#6366F1] cursor-pointer ">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366F1" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-paperclip-icon lucide-paperclip"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551" /></svg>
            </div>
            <input
              type="text"
              placeholder='Search for anything'
              className='h-8 focus:outline-none focus:border-indigo-500 w-full p-4 rounded-[5px] border border-[#d1d2e0]'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button onClick={sendMessage} className='flex justify-center items-center bg-[#6366F1] h-8 w-12 rounded cursor-pointer' ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#6366F1" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send-icon lucide-send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" /><path d="m21.854 2.147-10.94 10.939" /></svg></button>
          </div>


        </div>
      </div>
    </>

  )
}

export default Course


