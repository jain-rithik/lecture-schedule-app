import React from 'react'
import { useSelector } from 'react-redux';
import { useParams, useNavigate, Link  } from 'react-router-dom';

const CoursePage = () => {
    const { courseId } = useParams();
    const navigate = useNavigate();
    
    const courses = useSelector(state => state.courseSlice); 

    const course = courses?.find(course => course._id === courseId);

    if (!course) {
        // Handle the case where the course is not found
        return <div>Course not found</div>;
    }

    const handleDelete = (id) => {
        console.log("add course called");
        fetch(`${process.env.REACT_APP_BACKENDURL}/api/course/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })
          .then((res) => res.json())
          .then((json) => {
            console.log(json);
            navigate("/course");
          })
          .catch((err) => {
            console.log(err);
          });
      };

  return (
    <div className='flex items-center justify-center pt-10'>
        <div className='p-10 border-2 w-3/4 '>
            <img className='w-96 rounded-lg' src={course.image} alt="Course" />
            <h1 className='pl-2 text-2xl font-bold'>Course Name: {course.name}</h1>
            <p className='pl-2 text-2xl font-semibold'>Level: {course.level}</p>
            <p className='pl-2 text-xl'>Description: {course.description}</p>
            <div className='flex items-center justify-around pt-5'>
                <Link to={"/course/"+ courseId +"/edit"}><button className='px-5 bg-green-500 py-2 text-xl rounded-full hover:text-white'>Edit</button></Link>
                <button onClick={() => handleDelete(courseId)} className='px-5 bg-red-500 py-2 text-xl rounded-full hover:text-white'>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default CoursePage