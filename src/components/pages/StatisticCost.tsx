import { textAlign } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { Course } from "../../models/Course";
import { StateType } from "../../redux/store";
import { getStatistic } from "../../util/functions";
const StatisticCost: React.FC = () =>
{
    let courses: Course[] = useSelector<StateType, Course[]>(state => state.courses);  
    const statistic = getStatistic(courses, 'cost');
    
    return <><label style = {{marginTop: '13vh', display: 'flex', justifyContent: 'center'}}>
    <div className="row" style={{display: 'flex', justifyContent: 'center', marginLeft: '30vw'}}>
    <label>Maximal Cost {statistic.max}</label>
    <label>Minimal Cost {statistic.min}</label>
    <label>Average Cost {statistic.average}</label>
    </div></label>
    </>
}
export default StatisticCost;


