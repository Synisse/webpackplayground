import React from 'react';
import { Router, Redirect} from 'react-router';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/navbar/Navbar.jsx';
import Main from './components/main/Main.jsx';
import ProjectsContainer from './components/projectscontainer/Projects.jsx';
import Footer from './components/footer/Footer.jsx';
import Imprint from './components/imprint/Imprint.jsx';

import createBrowserHistory from 'history/createBrowserHistory';
const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <div>
            <NavBar history={browserHistory}/>
            <Switch>
                <Route exact path="/aboutme" component={Main}/>
            </Switch>
            <Switch>
                <Route exact path="/projects/:id" component={ProjectsContainer}/>
            </Switch>
            <Switch>
                <Route exact path="/imprint" component={Imprint}/>
            </Switch>
            <Switch>
                <Redirect exact from="/*" to="/aboutme" />
            </Switch>
            <Footer history={browserHistory}/>
        </div>
    </Router>
);
