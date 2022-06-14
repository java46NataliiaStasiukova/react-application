import CoursesRest from "../service/CoursesRest";
import AuthServiceJwt from "../service/AuthServiceJwt";
import CoursesServiceFirebase from "../service/CoursesServiceFirebase";
import courseData from '../config/courseData.json'

export const coursesService = new CoursesServiceFirebase(courseData.minId, courseData.maxId);
export const authService = new AuthServiceJwt('http://localhost:3500/login');