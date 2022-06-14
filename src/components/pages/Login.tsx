
import { Alert } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { COURSES_PATH } from "../../config/routes-config";
import { authService } from "../../config/service-config";
import { ClientData } from "../../models/ClientData";
import LoginData from "../../models/LoginData";
import { OperationCode } from "../../models/OperationCode";
import { authAction, setOperationCode } from "../../redux/actions";
import LoginForm from "../forms/LoginForm";


 const Login: React.FC = () =>
{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return <LoginForm submitFn={async function(loginData: LoginData): Promise<boolean>{
        const clientData = await authService.login(loginData);
        //clientData true/false
        if(!!clientData){
            dispatch(authAction(clientData as ClientData))
            dispatch(setOperationCode(OperationCode.OK))
            navigate(COURSES_PATH);
            return true;
        }
        return false;
    }} />
    
}
export default Login;