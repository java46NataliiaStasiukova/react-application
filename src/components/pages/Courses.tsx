import React from "react";
import { coursesService } from "../../config/service-config";
const Courses: React.FC = () =>
{
    const courses = coursesService.get();
    return <label style = {{marginTop: '5vh', display: 'flex', justifyContent: 'center'}}>
        <ul style={{fontSize: 15}}>
        {courses.map((c: any) => <li> {JSON.stringify(c)}</li>)}
        </ul>
    </label>
}
export default Courses;
