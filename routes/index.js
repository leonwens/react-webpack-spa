import React from 'react';
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'

export default {
    component: 'div',
    childRoutes: [{
        path: '/',
        component: require('../containers/App'),
        childRoutes: [
            require('./life/index')
        ]
    }]
}



