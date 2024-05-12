import React from 'react'
import CourseList from './CourseList'
import { Link } from 'react-router-dom'

const Courses = () => {
  return (
    <div>
      <div className='flex justify-between items-center pt-3'>
        <h1 className='font-bold text-3xl pl-6 '>Courses</h1>
        <Link to={"/course/add"}><button className='px-5 bg-green-500 mx-5 py-3 rounded-full hover:text-white'>Add New Course</button></Link>
        </div>
        <CourseList />
    </div>
  )
}

export default Courses