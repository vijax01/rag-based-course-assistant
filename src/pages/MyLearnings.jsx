import React from 'react'
import Navbar from '../components/Navbar'
import courses from '../data/courses.js'
import CourseCard from '../components/CourseCard'

const MyLearnings = () => {
  const course = courses[0];
  return (
        <>
          <Navbar />
          <div className='text-3xl w-full bg-black py-10 px-30 text-white' >
            My Learnings
          </div>
          <div className="container h-20 w-full mx-auto mt-5">
          <CourseCard 
              id={course.id}
              title={course.title}
              author={course.author}
              lectures={course.lectures}
              rating={course.rating}
              reviews={course.reviews}
              badge={course.badge}
              image={course.image}
              enrolled={course.enrolled}
            />
          </div>
        </>
  )
}

export default MyLearnings
