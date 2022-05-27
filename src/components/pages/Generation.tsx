import React from "react";
import courseData from "../../config/courseData.json"
import { getRandomCourse } from "../../util/ramdomCourse";
import { useDispatch } from "react-redux";
import { addCourse } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import { COURSES_PATH } from "../../config/routes-config";
const Generation: React.FC = () =>
{
    const dispatch = useDispatch<any>();
    const navigate = useNavigate();
    function onClickButton(){
        const courses = document.querySelector('input')?.value
            if(courses !== undefined){
                const inputNum = +courses
               for(let i = 0; i < inputNum; i++){
                dispatch(addCourse(getRandomCourse(courseData)))
                navigate(COURSES_PATH);
                }
            }  
}
    return <><label style = {{marginTop: '13vh', display: 'flex', justifyContent: 'center'}}>
    <div className="row">
    <div className="col"><input type="number" id="number" className="form-control" min={1} max={10}></input></div>
    <div className="col"><button type="button" className="btn btn-primary" onClick={onClickButton}>submit</button></div></div></label></>
}
export default Generation;