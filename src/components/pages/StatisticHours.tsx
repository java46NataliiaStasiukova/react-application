import React from "react";
import { coursesService } from "../../config/service-config";
const StatisticHours: React.FC = () =>
{
    //TODO
    //you may apply "lodash library"
    //using method get of CoursesService (import variable coursesService)
    //this component outputs three labels:
    //first label contains maximal hours from all courses
    //second label contains minimal hours from all courses
    //third label contains average hours from all courses
    let courses: any[] = coursesService.get();
    const coursesHours: any[] = courses.map(c => c.hours)
    const max: number = Math.max(...coursesHours);
    const min: number = Math.min(...coursesHours);
    const average: number = (max + min) / 2
    //const average: number = Math.round((courses.reduce((res, cur) => res += cur.hours, 0))/courses.length)
    return <><label style={{fontSize: 40}}>
        StatisticHours page is working
    </label>
    <div className="row">
    <label>Maximal Cost {max}</label>
    <label>Minimal Cost {min}</label>
    <label>Average Cost {average}</label>
    </div>
    </>
}
export default StatisticHours;