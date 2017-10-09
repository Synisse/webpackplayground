import React from 'react';
import { Router, Redirect} from 'react-router';
import { Route, Switch } from 'react-router-dom';
import FilterableTable from './containers/FilterableTable';
import About from './components/About';
import NavBar from './components/navbar/Navbar.jsx';
import Main from './components/main/Main.jsx';
import ProjectsContainer from './components/projectscontainer/Projects.jsx';

import createBrowserHistory from 'history/createBrowserHistory';
const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <div>
            <NavBar history={browserHistory}/>
            <Switch>
                <Route exact path="/" component={FilterableTable} />
            </Switch>
            <Switch>
                <Route exact path="/aboutme" component={Main}/>
            </Switch>
            <Switch>
                <Route exact path="/projects/:id" component={ProjectsContainer}/>
            </Switch>
            <Switch>
                <Route path="/about" component={About} />
            </Switch>
            <Switch>
                <Redirect exact from="/*" to="/aboutme" />
            </Switch>
        </div>
    </Router>
);
