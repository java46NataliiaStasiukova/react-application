import { useDispatch, useSelector } from "react-redux";
import { ImitatorAction, imitatorActions } from "../config/imitatir-config";
import { addCourse, removeCourse, updateCourse } from "../redux/actions";
import { getRandomCourse } from "./ramdomCourse";
import courseData from "../config/courseData.json"
import { getRandomNumber } from "./random";
import { Course } from "../models/Course";
import { useEffect } from "react";
import { StateType } from "../redux/store";

export function useImitator() {
    const dispatch = useDispatch();
    const courses: Course[] = useSelector<StateType, Course[]>(state => state.courses);
    useEffect(() => {
        const intervalId = setInterval(action, 2000);
        return () => clearInterval(intervalId)
    }, [])
    function action() {
        const number = getRandomNumber(1,100);
        console.log(number)
        const imitatorAction: ImitatorAction = getAction(number);
        switch(imitatorAction.action) {
            case 'add': dispatchAdd(); break;
            case 'remove': dispatchRemove(courses); break;
            case 'update': dispatchUpdate(courses); break;
            default: break;
        }
    }
    function dispatchAdd() {
        dispatch(addCourse(getRandomCourse(courseData)));
    }
    function dispatchRemove(courses: Course[]) {
        if(courses.length > 0){
        const randomIndex: number = getRandomNumber(0, courses.length);
        const courseId = courses[randomIndex].id;
        dispatch(removeCourse(courseId));
        }
    }
    function dispatchUpdate(courses: Course[]) {
        if(courses.length > 0){
        const randomIndex: number = getRandomNumber(0, courses.length);
        const course = getRandomCourse(courseData);
        course.id = courses[randomIndex].id;
        dispatch(updateCourse(course));
        }
    }
}
function getAction(num: number): ImitatorAction {
    return imitatorActions.find(ia => num <= ia.prob) ?? imitatorActions[imitatorActions.length - 1]
 }
