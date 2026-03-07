import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Course from "./pages/Course.jsx"
import Explore from './pages/Explore.jsx'
import MyLearnings from './pages/MyLearnings.jsx'


const App = () => {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Explore />} />
        <Route path="/my-learnings" element={<MyLearnings />} />
        <Route path="/course/:id" element={<Course />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
