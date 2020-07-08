import React from "react";
import Aux from "../../Auxiliary/Auxiliary";
import Navigation from "../../Components/Navigation/Navigation";
import { Route } from 'react-router-dom'
import Menu from '../../Components/Menu/Menu'

const layout = (props) => (
  <Aux>
    <Navigation />
    
    <Route path="/menu" exact component={Menu} />

  </Aux>
);

export default layout;
