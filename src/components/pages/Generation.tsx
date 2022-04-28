import React from "react";
import { coursesService } from "../../config/service-config";
import courseData from "../../config/courseData.json"
import { getRandomCourse } from "../../util/ramdomCourse";
const Generation: React.FC = () =>
{
    function onClickButton(){
        const courses = document.querySelector('input')?.value
            if(courses !== undefined){
                const inputNum = +courses
               for(let i = 0; i < inputNum; i++){
                coursesService.add(getRandomCourse(courseData))
                }
            }  
}
    return <><label style = {{marginTop: '5vh', display: 'flex', justifyContent: 'center'}}>
    <div className="row">
    <div className="col"><input type="number" id="number" className="form-control" min={1} max={10}></input></div>
    <div className="col"><button type="button" className="btn btn-primary" onClick={onClickButton}>submit</button></div></div></label></>
}
export default Generation;