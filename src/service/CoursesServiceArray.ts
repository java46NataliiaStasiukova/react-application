import { courses } from "../config/service-config";
import { Course } from "../models/Course";
import { getRandomCourse } from "../util/ramdomCourse";
import { getRandomNumber } from "../util/random";
import CoursesService from "./CoursesService";
import courseData from "../config/courseData.json"

export default class CoursesServiceArray implements CoursesService {
    constructor(private _courses: any){
    }
    add(course: Course): void {
        const id = getRandomNumber(100000, 999999);
        course.id = id;
        this._courses.push(course);
    }
    remove(id: number): void {
        //TODO
    }
    update(id: number, course: Course): void {
        //TODO
    }
    get(): Course[] {
        return this._courses;
    }
    
}