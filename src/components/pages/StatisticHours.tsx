import React from "react";
import { useSelector } from "react-redux";
import { Course } from "../../models/Course";
import { StateType } from "../../redux/store";
import { getStatistic } from "../../util/functions";
const StatisticHours: React.FC = () =>
{
    let courses: Course[] = useSelector<StateType, Course[]>(state => state.courses);  
    const statistic = getStatistic(courses, 'hours');
    return <><label style = {{marginTop: '13vh', display: 'flex', justifyContent: 'center'}}>
    <div className="row" style={{display: 'flex', justifyContent: 'center', marginLeft: '30vw'}}>
    <label >Maximal Hours: {statistic.max}</label>
    <label >Minimal Hours: {statistic.min}</label>
    <label >Average Hours: {statistic.average}</label>
    </div></label>
    </>
}
export default StatisticHours;