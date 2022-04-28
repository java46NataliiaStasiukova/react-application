import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { COURSES_PATH, ROUTES } from './config/routes-config';
import Navigator from './components/navigators/navigator';

const App: React.FC = () => {
  const [flNavigate, setFlNavigate] = React.useState<boolean>(true);
  React.useEffect(() => setFlNavigate(false), [])
return <BrowserRouter>
<Navigator items={ROUTES}/>
{flNavigate && <Navigate to={COURSES_PATH}></Navigate>}
<Routes>
{getRoutes()}
</Routes>
</BrowserRouter>
}

export default App;
function getRoutes(): React.ReactNode {
  return ROUTES.map(r => <Route key={r.path} path={r.path} element={r.element}/>)
}
////<div style = {{marginTop: '5vh', display: 'flex', justifyContent: 'center'}}></div>
