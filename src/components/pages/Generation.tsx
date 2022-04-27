import React from "react";
import { coursesService } from "../../config/service-config";
import courseData from "../../config/courseData.json"
import { getRandomCourse } from "../../util/ramdomCourse";
const Generation: React.FC = () =>
{
    //TODO
    //input element for inputing number of the courses
    //using method add of CoursesService (import variable coursesService)
    //this component adds inputed number of the random courses
    function onClickButton(){
        const courses = document.querySelector('input')?.value
            if(courses !== undefined){
                const inputNum = +courses
               for(let i = 0; i < inputNum; i++){
                coursesService.add(getRandomCourse(courseData))
                }
            }  
}
    return <><label style={{fontSize: 40}}>
        Generation page is working
        
    </label>
    <input type="number" id="number"  ></input>
    <button onClick={onClickButton}>submit</button></>
}
export default Generation;