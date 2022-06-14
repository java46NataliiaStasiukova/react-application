import React from "react";
import { useSelector } from "react-redux";
import { Course } from "../../models/Course";
import { StateType } from "../../redux/store";
import Statistics from "../statistics/Statistics";
import courseData from "../../config/courseData.json"
//import { getStatistic } from "../../util/functions";
const StatisticHours: React.FC = () =>
{
    let courses: Course[] = useSelector<StateType, Course[]>(state => state.courses);  
    //const statistic = getStatistic(courses, 'hours');

    return <Statistics field={"hours"} title={"Courses Duration Statistics"} unit={"h"}
    intervals={(courseData as any).hourIntervals} objects={courses}></Statistics>
}

export default StatisticHours;
/**
 *     return <><label style = {{marginTop: '13vh', display: 'flex', justifyContent: 'center'}}>
    <div className="row" style={{display: 'flex', justifyContent: 'center', marginLeft: '30vw'}}>
    <label >Maximal Hours: {statistic.max}</label>
    <label >Minimal Hours: {statistic.min}</label>
    <label >Average Hours: {statistic.average}</label>
    </div></label>
    </>
}
 */