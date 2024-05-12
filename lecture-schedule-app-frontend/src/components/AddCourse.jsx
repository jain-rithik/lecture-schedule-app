import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const navigate = useNavigate();

  const name = useRef();
  const level = useRef();
  const description = useRef();
  const image = useRef();

  // const handleAdd = () => {
  //     console.log(name?.current?.value);
  //     console.log(level?.current?.value);
  //     console.log(description?.current?.value);
  //     console.log(image?.current?.value);
  // }

  const handleAdd = () => {
    fetch(`${process.env.REACT_APP_BACKENDURL}/api/course`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name: name?.current.value,
        level: level?.current.value,
        description: description?.current.value,
        image: image?.current.value,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        
        navigate("/course");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form
        method="post"
        action=""
        className="flex flex-col gap-5 w-full items-center pt-10"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={name}
          className="p-3 border border-gray-500 rounded-md w-1/2"
          type="text"
          name="name"
          placeholder="Course Name"
        />
        <input
          ref={level}
          className="p-3 border border-gray-500 rounded-md w-1/2"
          type="number"
          name="level"
          placeholder="Level"
        />
        <input
          ref={description}
          className="p-3 border border-gray-500 rounded-md w-1/2"
          type="text"
          name="description"
          placeholder="Description"
        />
        <input
          ref={image}
          className="p-3 border border-gray-500 rounded-md w-1/2"
          type="text"
          name="image"
          placeholder="Image URL"
        />
        <button
          onClick={handleAdd}
          className="p-3 border border-gray-500 rounded-md w-1/2 bg-green-500"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
