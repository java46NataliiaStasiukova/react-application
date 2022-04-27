import React from "react";
import { coursesService } from "../../config/service-config";
const Courses: React.FC = () =>
{
    //TODO
    //using method get of CoursesServise (imported variable coursesService)
    //<ul> {courses as <li> elements} each list item presents JSON of one course
    const courses = React.useRef(coursesService.get());
    return <label style={{fontSize: 15}}>
        Courses page is working
        <ul>
        {courses.current.map((c: any) => <li> {JSON.stringify(c)}</li>)}
        </ul>
    </label>
}
export default Courses;
