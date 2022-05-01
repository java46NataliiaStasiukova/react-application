import React from "react";
import { useSelector } from "react-redux";
import { Course } from "../../models/Course";
import { StateType } from "../../redux/store";
const StatisticCost: React.FC = () =>
{
    let courses: Course[] = useSelector<StateType, Course[]>(state => state.courses)
    const coursesCost = courses.map(c => c.cost)
    const max: number = Math.max(...coursesCost);
    const min: number = Math.min(...coursesCost);
    const average: number = (max + min) / 2
    //const average: number = Math.round((courses.reduce((res, cur) => res += cur.cost, 0))/courses.length)
    return <><label style = {{marginTop: '5vh', display: 'flex', justifyContent: 'center'}}>
    <div className="row">
    <label>Maximal Cost {max}</label>
    <label>Minimal Cost {min}</label>
    <label>Average Cost {average}</label>
    </div></label>
    </>
}
export default StatisticCost;
