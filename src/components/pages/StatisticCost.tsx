import React from "react";
import { coursesService } from "../../config/service-config";
const StatisticCost: React.FC = () =>
{
    //TODO
    //you may apply "lodash library"
    //using method get of CoursesService (import variable coursesService)
    //this component outputs three labels:
    //first label contains maximal cost from all courses
    //second label contains minimal cost from all courses
    //third label contains average cost from all courses
    let courses: any[] = coursesService.get();
    const coursesCost: any[] = courses.map(c => c.cost)
    const max: number = Math.max(...coursesCost);
    const min: number = Math.min(...coursesCost);
    const average: number = (max + min) / 2
    //const average: number = Math.round((courses.reduce((res, cur) => res += cur.cost, 0))/courses.length)
    return <><label style={{fontSize: 40}}>
        StatisticCost page is working
    </label>
    <div className="row">
    <label>Maximal Cost {max}</label>
    <label>Minimal Cost {min}</label>
    <label>Average Cost {average}</label>
    </div>
    </>
}
export default StatisticCost;
