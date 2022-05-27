import CoursesRest from "../service/CoursesRest";
import AuthServiceJwt from "../service/AuthServiceJwt";

export const coursesService = new CoursesRest('http://localhost:3500/courses');
export const authService = new AuthServiceJwt('http://localhost:3500/login');