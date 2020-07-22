import React, { Component } from "react";
import Aux from "../../Auxiliary/Auxiliary";
import Navigation from "../../Components/Navigation/Navigation";
import Menu from "../../Components/Menu/Menu";
import axios from "axios";

class Layout extends Component {

  state = {
    menu: null,
  };

  componentDidMount() {
    axios
      .get("https://starbucks-clone-capstone.firebaseio.com/menu.json")
      .then((response) => {
        this.setState({ menu: response.data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    let menu = null;
    if (this.state.menu) {
      menu = <Menu menu={this.state.menu} />;
    } else {
      menu = "Loading";
    }
    return (
      <Aux>
        <Navigation />
        {menu}
      </Aux>
    );
  }
}

export default Layout;
