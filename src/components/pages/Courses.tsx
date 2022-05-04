import React from "react";
import { useSelector } from "react-redux";
import { Course } from "../../models/Course";
import { StateType } from "../../redux/store";
const Courses: React.FC = () =>
{
    const courses: Course[] = useSelector<StateType, Course[]>(state => state.courses);

    return <label style = {{marginTop: '10vh', display: 'flex', justifyContent: 'center'}}>
        <ul style={{fontSize: 15}}>
        {courses.map((c: any) => <li> {JSON.stringify(c)}</li>)}
        </ul>
    </label>
}
export default Courses;
