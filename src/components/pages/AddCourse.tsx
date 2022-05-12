import React from "react";
import { useDispatch } from "react-redux";
import { addCourse } from "../../redux/actions";
import CourseForm from "../forms/CourseForm";
import { Course } from "../../models/Course";
const AddCourse: React.FC = () =>
{
    const dispatch = useDispatch();
    return <><label style = {{marginTop: '13vh', display: 'flex', justifyContent: 'center'}}>
    <CourseForm submitFn={(course: Course) => dispatch(addCourse(course))}></CourseForm></label></>
}
export default AddCourse;
