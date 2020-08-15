import React, { Component} from "react";
import Aux from "../../Auxiliary/Auxiliary";
import Navigation from "../../Components/Navigation/Navigation";
import Menu from "../../Components/Menu/Menu";
import axios from "axios";
import Spinner from '../../Components/UI/Spinner/Spinner'
import ProgressBar from '../../Components/UI/ProgressBar/ProgressBar'

class Layout extends Component {

  state = {
    menu: null,
    bgcolor: "#6a1b9a",
    completed : 60,
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
        <ProgressBar bgcolor={this.state.bgcolor} completed={this.state.completed}/>
        {menu}
      </Aux>
    );
  }
}

export default Layout;
