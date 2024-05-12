import React, { useEffect, useState } from 'react'
import CardComponent from './CardComponent'
import { useDispatch, useSelector } from 'react-redux'
import { setStoreInstructor } from '../utils/instructorsSlice'
import { Link } from 'react-router-dom'

// const InstructorData = [
//     {
//         name: "Rithik",
//         username: "jainrithik",
//         image: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"
//     },
//     {
//         name: "Dipesh",
//         username: "dipesh123",
//         image: "https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg"
//     },
//     {
//         name: "Rithik",
//         username: "jainrithik",
//         image: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"
//     },
//     {
//         name: "Dipesh",
//         username: "dipesh123",
//         image: "https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg"
//     },
//     {
//         name: "Rithik",
//         username: "jainrithik",
//         image: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"
//     },
//     {
//         name: "Dipesh",
//         username: "dipesh123",
//         image: "https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg"
//     },
//     {
//         name: "Rithik",
//         username: "jainrithik",
//         image: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"
//     },
//     {
//         name: "Dipesh",
//         username: "dipesh123",
//         image: "https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg"
//     },
// ]

const InstructorList = () => {
    const dispatch = useDispatch();
    const [courseList, setCourseList] = useState([]);

    const instructors = useSelector(store => store.instructorSlice);

    useEffect(() => {
        console.log("add course called");
        fetch(`${process.env.REACT_APP_BACKENDURL}/api/users`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })
          .then((res) => res.json())
          .then((json) => {
            console.log(json);
            // setInstructors(json?.success);
            dispatch(setStoreInstructor(json?.success));
          })
          .catch((err) => {
            console.log(err);
          });
      }, [courseList]);

  return (
    <div className='flex gap-5 p-3 m-3 flex-wrap'>
        {instructors?.map((instructor, index) => (
            <Link to={"/instructor/" + instructor?._id}>
            <CardComponent key={index} name={instructor.name} image={instructor.image}/>
            </Link>
        ))}
        
    </div>
  )
}

export default InstructorList