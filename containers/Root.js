import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import rootRoute from '../routes/index';

export default class Root extends Component {
    render() {
        const { store } = this.props;
        return (
            <Provider store={store}>
                <Router history={browserHistory} routes={rootRoute} />
            </Provider>
        );
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired
}
