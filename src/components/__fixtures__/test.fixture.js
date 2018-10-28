import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import ComplexComponent from '../ComplexComponent'

export default [
    {
        component: ComplexComponent,
        props: {
            url: 'thisisatest.domain',
            timestamp: '11111111111111'
        }
    },
    {
        component: ComplexComponent,
        props: {
            url: 'thisisatest.domain',
            timestamp: '22222222222222'
        }
    },
    {
        component: ComplexComponent,
        props: {
            url: 'thisisatest.domain',
            timestamp: '12345671234567'
        }
    },
    {
        component: props => (
            <Router>
                <Switch>
                    <ComplexComponent {...props}/>
                </Switch>
            </Router>
        ),
        props: {
            url: 'thisisatest.domain',
            timestamp: '11111111111111'
        }
    },
];

