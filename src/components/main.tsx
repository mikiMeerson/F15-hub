import { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import { routes } from '../assets/routes';

const Main = () => {
  const [minimizeSideBar, setMinimizeSideBar] = useState(true);
  const [mainWidthClass, setMainWidthClass] = useState('main-max');

  const toggleMainWidth = () => {
    setMinimizeSideBar(!minimizeSideBar);
    setMainWidthClass(minimizeSideBar ? 'main-min' : 'main-max');
  };

  return (
    <Router>
      <NavBar toggleMainWidth={toggleMainWidth} mini={minimizeSideBar} />
      <div className={ ["content",mainWidthClass].join(' ') } >
        <Switch>
          {routes.map((route) => (
            <Route key={route.link}
                   exact path={route.link} 
                   component={route.comp} />
          ))}
        </Switch>
      </div>
    </Router>
  );
};

export default Main;
