import React, { useEffect, useMemo } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { COURSES_PATH, LOGIN_PATH, ROUTES } from './config/routes-config';
import Navigator from './components/navigators/Navigator';
//import { useImitator } from './util/useImitator';
import { useDispatch, useSelector } from 'react-redux';
import { ClientData } from './models/ClientData';
import { StateType } from './redux/store';
import { RouteType } from './models/RouteType';
import { coursesService } from './config/service-config';
import { setCourses } from './redux/actions';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const clientData: ClientData = useSelector<StateType, ClientData>(state=>state.clientData);
  //useImitator();
  useEffect(() => {
    coursesService.get().then(courses => dispatch(setCourses(courses)))
  })
  const [flNavigate, setFlNavigate] = React.useState<boolean>(true);
  const relevantItems: RouteType[] = React.useMemo<RouteType[]>(() => getRelevantItems(clientData), [clientData]);
  React.useEffect(() => setFlNavigate(false), [])
return <BrowserRouter>
<Navigator items={relevantItems}/>
{flNavigate && (clientData.email ? <Navigate to={COURSES_PATH}></Navigate> : 
  <Navigate to={LOGIN_PATH}></Navigate> )}
<Routes>
{getRoutes(relevantItems)}
</Routes>
</BrowserRouter>
}
export default App;
function getRoutes(relevantItems: RouteType[]): React.ReactNode {
  return relevantItems.map(r => <Route key={r.path} path={r.path} element={r.element}/>)
}

function getRelevantItems(clientData: ClientData): RouteType[] {
  return ROUTES.filter(r => (!!clientData.email && clientData.isAdmin && r.authenticated) || 
  (!!clientData.email && !clientData.isAdmin && r.userAccess) || (!clientData.email && !r.authenticated))
}

