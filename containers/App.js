import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class App extends Component {
    render() {
        const { children } = this.props;
        console.log(this.props)
        return (
            <div id="main-container" style={{fontSize: 'initial'}}>
                {children}
            </div>
        )
    }
}

App.propTypes = {
    children: PropTypes.node
}

export default connect(state=>({}), {
})(App)
