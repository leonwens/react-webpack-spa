import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Entry from '../../components/life/Entry';
class EntryContainer extends Component {    
    render(){        
        return (
            <section>
                <Entry />
            </section>
        )
    }
}

EntryContainer.propTypes = {

}



export default connect(state=>({}), {
})(EntryContainer)
