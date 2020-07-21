import React, { Component } from "react";
// import classes from './Layout.module.css'
import Aux from "../../Auxiliary/Auxiliary";
import Navigation from "../../Components/Navigation/Navigation";
// import { Route } from 'react-router-dom'
import Menu from '../../Components/Menu/Menu'
// import MenuNavigation from '../../Components/Menu/MenuNavigation/MenuNavigation'
import axios from 'axios'


class Layout extends Component {

  state = {
    menu: null
  }

  componentDidMount() {
    axios.get("https://starbucks-clone-capstone.firebaseio.com/menu.json")
      .then(response => {
        this.setState({ menu: response.data });
       
      })
      .catch(error => console.log(error));
  }

  render() {

    return (
      <Aux>
        <Navigation />
        <Menu menu={this.state.menu}/>
      </Aux>
    )
  }
}

export default Layout;
