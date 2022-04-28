import React from "react";
import { coursesService } from "../../config/service-config";
const StatisticHours: React.FC = () =>
{
    let courses = coursesService.get();
    const coursesHours = courses.map(c => c.hours)
    const max: number = Math.max(...coursesHours);
    const min: number = Math.min(...coursesHours);
    const average: number = (max + min) / 2
    //const average: number = Math.round((courses.reduce((res, cur) => res += cur.hours, 0))/courses.length)
    return <><label style = {{marginTop: '5vh', display: 'flex', justifyContent: 'center'}}>
    <div className="row">
    <label>Maximal Hours {max}</label>
    <label>Minimal Hours {min}</label>
    <label>Average Hours {average}</label>
    </div></label>
    </>
}
export default StatisticHours;