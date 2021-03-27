import { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import { routes } from '../assets/routes';
import { platforms } from '../assets/platforms';
import PlatformsMenu from './NavBar/PlatformsMenu';
import MainStyle from './Main.module.css';


const Main = () => {
  const [minimizeSideBar, setMinimizeSideBar] = useState(true);
  const [mainWidthClass, setMainWidthClass] = useState('main-max');

  const [platform, setPlatform] = useState(platforms[0]);

  const toggleMainWidth = () => {
    setMinimizeSideBar(!minimizeSideBar);
    setMainWidthClass(minimizeSideBar ? MainStyle.mainMin : MainStyle.mainMax);
  };

  const switchPlatform = (platformID: string) => {
    const newPlatform = platforms.find((p) => p.id === platformID);
    newPlatform && setPlatform(newPlatform);
  };

  return (
    <Router>
      <PlatformsMenu switchPlatform={switchPlatform} />
      <NavBar
        toggleMainWidth={toggleMainWidth}
        mini={minimizeSideBar}
        platform={platform}
      />
      <div className={`${MainStyle.content} ${mainWidthClass}`}>
        <Switch>
          <Route exact path="/" component={Home} />
          {routes.map((route) => (
            <Route
              key={route.path?.toString()}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </div>
    </Router>
  );
};

export default Main;
