import React from "react";
import { getRandomCourse } from "../../util/ramdomCourse";
import courseData from "../../config/courseData.json"
import { useDispatch } from "react-redux";
import { addCourse } from "../../redux/actions";
const AddCourse: React.FC = () =>
{
    const dispatch = useDispatch();
    function onClickButton() {
        return dispatch(addCourse(getRandomCourse(courseData)))
    }
    return <><label style = {{marginTop: '13vh', display: 'flex', justifyContent: 'center'}}>
    <button type="button" className="btn btn-primary" onClick={onClickButton}>Add Course</button></label></>
}
export default AddCourse;
