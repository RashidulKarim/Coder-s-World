import { useEffect, useState } from "react";

const UseCourse = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('/courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])
    return [courses]
};

export default UseCourse;