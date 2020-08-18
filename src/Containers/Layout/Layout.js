import React, { Component} from "react";
import Aux from "../../Auxiliary/Auxiliary";
import Navigation from "../../Components/Navigation/Navigation";
import Menu from "../../Components/Menu/Menu";
import axios from "axios";
import Spinner from '../../Components/UI/Spinner/Spinner'

class Layout extends Component {

  state = {
    menu: null
  };



  componentDidMount() {
    axios
      .get("https://starbucks-clone-capstone.firebaseio.com/menu.json")
      .then((response) => {
        this.setState({
          menu: response.data,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {

    let menu = null;

    
    if (this.state.menu) {
      menu = <Menu menu={this.state.menu} showMenuNavigation={this.state.showMenuNavigation} />
    } else {
      menu = <Spinner />
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
