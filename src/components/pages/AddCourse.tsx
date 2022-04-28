import React from "react";
import { coursesService } from "../../config/service-config";
import { getRandomCourse } from "../../util/ramdomCourse";
import courseData from "../../config/courseData.json"
const AddCourse: React.FC = () =>
{
    //TODO
    //simple button "Add Course" triggering adding random course by using
    //method add of CoursesService (variable courseService)
    function onClickButton() {
        return coursesService.add(getRandomCourse(courseData))
    }
    return <><label style = {{marginTop: '5vh', display: 'flex', justifyContent: 'center'}}>
    <button type="button" className="btn btn-primary" onClick={onClickButton}>Add Course</button></label></>
}
export default AddCourse;
