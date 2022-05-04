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
    <div className="row">
    <label style={{display: 'flex', justifyContent: 'center'}}>Maximal Hours {statistic.max}</label>
    <label style={{display: 'flex', justifyContent: 'center'}}>Minimal Hours {statistic.min}</label>
    <label style={{display: 'flex', justifyContent: 'center'}}>Average Hours {statistic.average}</label>
    </div></label>
    </>
}
export default StatisticHours;