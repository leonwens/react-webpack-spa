import React, { Component, PropTypes } from 'react';
import '../../static/css/life/entry.less'

export default class Entry extends Component {
	constructor(props){
		super(props)
	}
    render() {
        return (
            <div className="entry_wrap">
            	<h1>缴费账户</h1>
            </div>
        )
    }
}

Entry.propTypes = {
    
}
