import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { COURSES_PATH, LOGIN_PATH, LOGOUT_PATH, ROUTES } from './config/routes-config';
import Navigator from './components/navigators/Navigator';
//import { useImitator } from './util/useImitator';
import { useDispatch, useSelector } from 'react-redux';
import { ClientData, emptyClientData } from './models/ClientData';
import { StateType } from './redux/store';
import { RouteType } from './models/RouteType';
import { coursesService } from './config/service-config';
import { authAction, setCourses, setOperationCode } from './redux/actions';
import { OperationCode } from './models/OperationCode';
import ErrorAlert from './components/dialogs/ErrorAlert';
import { Course } from './models/Course';


const App: React.FC = () => {
  const dispatch = useDispatch();
  const clientData: ClientData = useSelector<StateType, ClientData>(state=>state.clientData);
  const operationCode: OperationCode = useSelector<StateType, OperationCode> (state => state.operationCode);
  //useImitator();
  useEffect(() => {
    coursesService.get().then(courses => {
      dispatch(setCourses(courses));
      dispatch(setOperationCode(OperationCode.OK))
    }).catch(err => dispatch(setOperationCode(err)))
  }, [])
  const [flNavigate, setFlNavigate] = React.useState<boolean>(true);
  const [isAlert, setAlert] = React.useState(false) 
  const relevantItems: RouteType[] = React.useMemo<RouteType[]>(() => getRelevantItems(clientData), [clientData]);
  React.useEffect(() => setFlNavigate(false), [])

const alertMessage = useRef('');
const flUnknown = React.useRef(false);
useEffect(() => {
  getData(dispatch);
}, [operationCode, clientData])

  function operationCodeHandler(){
    if(operationCode === OperationCode.AUTH_ERROR){
      dispatch(authAction(emptyClientData));
    }
    else if(operationCode === OperationCode.SERVER_UNAVAILABLE){
      setAlert(true);
      flUnknown.current = false
      alertMessage.current = ("SERVER_UNAVAILABLE")
    }
    else if(operationCode === OperationCode.UNKNOWN){
      setAlert(true)
      flUnknown.current = true;
      alertMessage.current = ("UNKNOWN ERROR")
    } else setAlert(false)
  }
 
  const operationCodeCallback = React.useCallback(operationCodeHandler, [operationCode]); 
  React.useEffect(() => {   
  operationCodeCallback();
}, [operationCodeCallback])

return <BrowserRouter>

<ErrorAlert open={isAlert} content={alertMessage.current}/>

<Navigator items={relevantItems}/>
{flNavigate && (clientData.email ? <Navigate to={COURSES_PATH}></Navigate> : 
  <Navigate to={LOGIN_PATH}></Navigate> )}
<Routes>
{getRoutes(relevantItems, clientData)}
</Routes>
</BrowserRouter>
}
export default App;
function getData(dispatch: any){
  coursesService.getObservalData().subscribe({
    next: courses_err => {
      if(Array.isArray(courses_err)){
        dispatch(setCourses(courses_err as Course[]));
        dispatch(setOperationCode(OperationCode.OK));
      } else {
        dispatch(setOperationCode(courses_err as OperationCode))
      }
    }
  })
}
function getRoutes(relevantItems: RouteType[], clientData: ClientData): React.ReactNode {
  const logoutRoute = relevantItems.find(ri => ri.path === LOGOUT_PATH);
  if (logoutRoute) {
    logoutRoute.label = clientData.displayName;
  }
  return relevantItems.map(r => <Route key={r.path} path={r.path} element={r.element}/>)
}
function getRelevantItems(clientData: ClientData): RouteType[] {
  return ROUTES.filter(r => (!!clientData.email && clientData.isAdmin && r.authenticated) || 
  (!!clientData.email && !clientData.isAdmin && r.userAccess) || (!clientData.email && !r.authenticated))
}


//json-server-auth -p3500 data.json --routes routes.json
