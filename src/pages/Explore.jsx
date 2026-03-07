import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import CourseCard from '../components/CourseCard'
import courses from '../data/courses'

const Explore = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <div className='rounded-md container mx-auto my-10 p-4 bg-[#e5e7eb]' >
        <p className='text-2xl mb-5' >Popular YouTube Courses</p>
        <div className='flex gap-6 overflow-x-auto' >
          {courses.map((course, index) => (
            <CourseCard 
              key={index}
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
          ))}
        </div>
      </div>
    </>
  )
}

export default Explore
