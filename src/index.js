import React from 'react';
import ReactDOM from 'react-dom';
import ComplexComponent from './components/complex-component.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <Switch>
            <Route path='/([0-9]{14})/(.+)' render={({match}) =>
                <ComplexComponent url={match.params[1]} timestamp={match.params[0]} />
            } />
        </Switch>
    </Router>, document.getElementById('root'));
