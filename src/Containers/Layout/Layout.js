import React, { Component } from "react";
import classes from './Layout.module.css'
import Aux from "../../Auxiliary/Auxiliary";
import Navigation from "../../Components/Navigation/Navigation";
import { Route } from 'react-router-dom'
import Menu from '../../Components/Menu/Menu'
import MenuNavigation from '../../Components/Menu/MenuNavigation/MenuNavigation'

class Layout extends Component {

  state = {
    sectionNames: [
      { "Drinks": ["Hot Coffee", "Hot Teas", "Hot Drinks", "Frappuccino Blended Beverages", "Cold Coffees", "Iced Teas", "Cold Drinks"] },
      { Food: ["Hot Breakfast", "Bakery", "Lunch", "Snacks & Sweets"] },
      { "At Home Coffee": ["Whole Bean", "Verismo Pods", "VIA Instant", "K-Cup Pods"] }
    ],
    "Hot Teas": [
      { "Chai Teas": ["Chai Latte", "Chai Tea"] },
      { "Black Teas": ["London Fog Tea Latte", "Earl Grey Tea", "Rooibos Tea Latte", "Blossoming Rode Tea Latte", "Black Tea Latte", "Rev Up Brewed Wellness Tea", "Royal English Breakfast Tea", "Royal English Breakfast Tea Latte"] },
      { "Green Teas": ["Emperor’s Clouds & Mist®", "Honey Citrus Mint Tea", "Jade Citrus Mint® Brewed Tea", "Matcha Green Tea Latte"] },
      { "Herbal Teas": ["Mint Majesty", "Comfort Brewed Wellness Tea", "Peach Tranquility"] }
    ]
  }

  render() {
    return (
      <Aux>
        <Navigation />
        <div className={classes.Container}>
          <div className={classes.Wrapper}>
            <MenuNavigation menu={this.state.sectionNames} />
            <Route path="/menu" exact render={(props) => <Menu {...props} menu={this.state.sectionNames} />} />
            <Route path="/menu/drinks/hot-teas" exact render={(props) => <Menu {...props} menu={this.state["Hot Teas"]} />} />
          </div>
        </div>

      </Aux>
    )
  }
}

export default Layout;
