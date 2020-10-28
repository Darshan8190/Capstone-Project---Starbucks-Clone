import React, { Component } from "react";
import Aux from "../../Auxiliary/Auxiliary";
import Navigation from "../../Components/Navigation/Navigation";
import Menu from "../../Components/Menu/Menu";
import Spinner from '../../Components/UI/Spinner/Spinner'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index'

class Layout extends Component {

  componentDidMount() {
    this.props.onInitMenu()
    this.props.onAutoSignIn()
  }

  render() {

    let menu = this.props.error ? <p>Can't fetch menu because of network error!</p> : <Spinner />
    if (this.props.menu) {
      menu = <Menu menu={this.props.menu} />
    }

    return (
      <Aux>
        <Navigation isAuthSignIn={this.props.isAuthenticatedSignIn} isAuthSignUp={this.props.isAuthenticatedSignUp}/>
        {menu}
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    menu: state.layout.menu,
    error: state.layout.error,
    isAuthenticatedSignIn: state.signin.token != null,
    isAuthenticatedSignUp: state.signup.token != null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInitMenu: () => dispatch(actions.initMenu()),
    onAutoSignIn : () => dispatch(actions.authCheckStatus())
    
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Layout);
