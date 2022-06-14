import { get } from "lodash";
import { useSelector } from "react-redux";
import { Observable, Subscriber } from "rxjs";
import { Course } from "../models/Course";
import { OperationCode } from "../models/OperationCode";
import { StateType } from "../redux/store";
import { AUTH_TOKEN_ITEM } from "./AuthServiceJwt";
import CoursesService from "./CoursesService";

function getHeaders(): any {
    return {Authorization: "Bearer " + localStorage.getItem(AUTH_TOKEN_ITEM),
"Content-Type": "application/json"}
}
const POLLING_INTERVAL = 20000;
let intervaId: any;
async function responseProcessing(response: Response): Promise<any>{
    if(response.status < 400){
        return await response.json();
    }
    if(response.status === 401 || response.status === 403){
        throw OperationCode.AUTH_ERROR
    }
    throw OperationCode.UNKNOWN
}
export default class CoursesServiceRest implements CoursesService {
    private observable: Observable<Course[] | OperationCode> | undefined;
    private observer: Subscriber<Course[] | OperationCode> | undefined;
    private coursesJson: string = '';
    constructor(private url: string){
    }
    private observing(){
        //then => when there are courses
        //catch => when exeption  
            this.get().then(courses => {
                if(this.coursesJson !== JSON.stringify(courses)){
                    console.log('publishing');
                    this.observer?.next(courses);
                    this.coursesJson = JSON.stringify(courses);
                }
        })//TOD0
        .catch(err => {
            if(err == OperationCode.UNKNOWN){
                this.observer?.next(OperationCode.UNKNOWN);
                this.observer?.complete();
            } else {
                this.coursesJson = '';
                this.observer?.next(err);
            }
        });
    }
    getObservalData(): Observable<Course[] | OperationCode> {   
        if(!this.observable){
            this.observable = new Observable(observer => {
                this.observer = observer;
                this.observing();
                if(intervaId){
                    clearInterval(intervaId);
                }
                intervaId = setInterval(this.observing.bind(this), POLLING_INTERVAL);
                return () => clearInterval(intervaId);
            })
        }
        return this.observable;
    }
    async add(course: Course): Promise<void> {
        (course as any).userId = 1;
        let response: Response;
        try {
            response = await fetch(this.url, {
                method: "POST",
                headers: getHeaders(),
                body: JSON.stringify(course)
            });
        } catch (err) {
            throw OperationCode.SERVER_UNAVAILABLE;
        }
        responseProcessing(response);
    }
    async remove(id: number): Promise<void> {
        let response: Response;
        try {
            response = await fetch(this.getUrlId(id), {
                method: "DELETE",
                headers: getHeaders()
            })
        } catch (err) {
            throw OperationCode.SERVER_UNAVAILABLE;
        }
        responseProcessing(response);
    }
    private getUrlId(id: number): RequestInfo {
        return `${this.url}/${id}`;
    }
    async update(id: number, course: Course): Promise<void> {
        let response: Response;
        try {
            response = await fetch(this.getUrlId(id), {
                method: "PUT",
                headers: getHeaders(),
                body: JSON.stringify(course)
            })
        } catch (err) {
            throw OperationCode.SERVER_UNAVAILABLE;
        }
        responseProcessing(response);
    }
    async get(): Promise<Course[]> {

        let response: Response;
        try {
            response =  await fetch(this.url, {
                headers: getHeaders()
            });
        } catch (err) {
            throw OperationCode.SERVER_UNAVAILABLE;
        }
        const courses: Course[] = await responseProcessing(response);
            return courses.map(c =>
                ({...c, openingDate: new Date(c.openingDate)}))
    }
}