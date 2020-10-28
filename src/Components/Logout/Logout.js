import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import * as actions from '../../store/actions/index'

class Logout extends Component {
    componentDidMount() {
        this.props.onLogoutSignIn()
        this.props.onLogoutSignUp()
    }

    render() {
        return <Redirect to="/menu" />
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogoutSignIn: () => dispatch(actions.logoutFromSignIn()),
        onLogoutSignUp: () => dispatch(actions.logoutFromSignUp())
    }
}

export default connect(null, mapDispatchToProps)(Logout);