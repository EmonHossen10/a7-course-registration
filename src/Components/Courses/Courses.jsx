import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = () => {
    const [courses,setCourses]=useState([])
    useEffect(()=>{
        fetch("course.json")
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <div className="w-2/3">
            <h1>This is course</h1>

            {
                courses.map((course,i)=> <Course 
                key={i}
                course={course}
                ></Course>)
            }
        </div>
    );
};

export default Courses;