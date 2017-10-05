import React from 'react';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import FilterableTable from './containers/FilterableTable';
import About from './components/About';
import NavBar from './components/navbar/Navbar.jsx';
import Main from './components/main/Main.jsx';

import createBrowserHistory from 'history/createBrowserHistory';
const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <div>
            <NavBar history={browserHistory}/>
            <Switch>
                <Route exact path="/" component={FilterableTable} />
                <Route exact path="/aboutme" component={Main}/>
                <Route path="/about" component={About} />
            </Switch>
        </div>
    </Router>
);
