import { ReactNode } from "react";
import AddCourse from "../components/pages/AddCourse";
import Courses from "../components/pages/Courses";
import Generation from "../components/pages/Generation";
import Login from "../components/pages/Login";
import Logout from "../components/pages/Logout";
import StatisticCost from "../components/pages/StatisticCost";
import StatisticHours from "../components/pages/StatisticHours";
import { RouteType } from "../models/RouteType";
//Icons:
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
//
export const COURSES_PATH = '/';
export const ADD_COURSE_PATH = '/course/add';
export const STATISTIC_HOURS_PATH = '/statistic/hours';
export const STATISTIC_COST_PATH = '/statistic/cost';
export const LOGIN_PATH = '/login';
export const LOGOUT_PATH = '/logout';
export const GENERATION_PATH = '/generation';
export const ROUTES:RouteType[] = [
    {path: COURSES_PATH, label: 'Courses', element: <Courses/>, icon: <PlaylistAddCheckIcon/>, authenticated: true, userAccess: true },
    {path: ADD_COURSE_PATH, label: 'New Course', element: <AddCourse/>, icon: <PlaylistAddIcon/>, authenticated: true },
    {path: STATISTIC_HOURS_PATH, label: 'Statistics Hours', element: <StatisticHours/>, icon: <QueryBuilderIcon/>, authenticated: true, userAccess: true },
    {path: STATISTIC_COST_PATH, label: 'Statistics Cost', element: <StatisticCost/>, icon: <AttachMoneyIcon/>, authenticated: true, userAccess: true },
    {path: LOGIN_PATH, label: 'Login', element: <Login/> ,icon: <LoginIcon/>},
    {path: LOGOUT_PATH, label: 'Logout', element: <Logout/>, icon: <LogoutIcon/>, authenticated: true, userAccess: true },
    {path: GENERATION_PATH, label: 'Generation', element: <Generation/>, icon: <PlaylistAddIcon/>, authenticated: true }
    
]