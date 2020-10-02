import React, { Component } from "react";
import Aux from "../../Auxiliary/Auxiliary";
import Navigation from "../../Components/Navigation/Navigation";
import Menu from "../../Components/Menu/Menu";
import Spinner from '../../Components/UI/Spinner/Spinner'
import { connect } from 'react-redux';
import * as fetchingMenuActions from '../../store/actions/fetchingMenu'

class Layout extends Component {

  componentDidMount() {
    this.props.onInitMenu()
  }

  render() {

    let menu = this.props.error ? <p>Can't fetch menu because of network error!</p> : <Spinner />
    if (this.props.menu) {
      menu = <Menu menu={this.props.menu} />
    }

    return (
      <Aux>
        <Navigation />
        {menu}
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    menu: state.menu,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInitMenu: () => dispatch(fetchingMenuActions.initMenu())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
