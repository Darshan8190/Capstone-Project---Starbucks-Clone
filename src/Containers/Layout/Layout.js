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
      { "Drinks": ["Hot Coffees", "Hot Teas", "Hot Drinks", "Frappuccino Blended Beverages", "Cold Coffees", "Iced Teas", "Cold Drinks"] },
      { Food: ["Hot Breakfast", "Bakery", "Lunch", "Snacks & Sweets"] },
      { "At Home Coffee": ["Whole Bean", "Verismo Pods", "VIA Instant", "K-Cup Pods"] }
    ],
    "Hot Coffees": [
      { "Brewed Coffees": ["Caffe Misto", "Starbucks True North Blend", "Decaf Pike Place Roast", "Pike Place Roast", "Featured Dark Roast"] },
      { "Americanos": ["Caffe Americano", "Starbucks Blonde Caffe Americano", "Starbucks Blonde Americano Misto", "Caffe Americano Misto"] },
      { "Cappuccinos": ["Cappuccino", "Starbucks Blonde Cappuccino"] },
      { "Espresso Shots": ["Espresso", "Espresso Con Panna"] },
      { "Flat Whites": ["Almond Honey Flat White", "Flat White", "Almond Honey Flat White with Starbucks Blonde Espresso", "Starbucks Blonde Fat White"] },
      { "Latte": ["Coconut Cascara Latte", "Coconut Cascara Latte with Starbucks Blonde Espresso", "Starbucks Blonde Caffe Latte", "Starbucks Blonde Hazelnut Latte", "Starbucks Blonde Vanilla Latte", "Caffe Latte", "Cinnamon Dolce Latte", "Starbucks Reserve Hazelnut Bianco Latte", "Starbucks Reserve Latte"] },
      { "Macchiatos": ["Caramel Macchiato", "Starbucks Blonde Caramel Macchiato", "Espresso Macchiato"] },
      { "Mochas": ["Caffe Mocha", "White Chocolate Mocha", "Starbucks Reserve Dark Chocolate Mocha"] }
    ],
    "Hot Teas": [
      { "Chai Teas": ["Chai Latte", "Chai Tea"] },
      { "Black Teas": ["London Fog Tea Latte", "Earl Grey Tea", "Rooibos Tea Latte", "Blossoming Rode Tea Latte", "Black Tea Latte", "Rev Up Brewed Wellness Tea", "Royal English Breakfast Tea", "Royal English Breakfast Tea Latte"] },
      { "Green Teas": ["Emperor’s Clouds & Mist®", "Honey Citrus Mint Tea", "Jade Citrus Mint® Brewed Tea", "Matcha Green Tea Latte"] },
      { "Herbal Teas": ["Mint Majesty", "Comfort Brewed Wellness Tea", "Peach Tranquility"] }
    ],
    "Hot Drinks": [
      { "Hot Chocolates": ["Hot Chocolate", "White Hot Chocolate"] },
      { "Steamed Juice": ["Steamed Apple Jiuce", "Caramel Apple Spice"] },
      { "Steamers": ["Steamed Milk", "Vanilla Steamer"] }
    ],
    "Frappuccino Blended Beverages": [
      { "Coffee Frappuccino": ["S'mores Frappuccino Blended Beverage", "Mocha Cookie Crumble Frappuccino Blended Beverage", "Caramel Ribbon Crunch Frappuccino Blended Beverage", "Caramel Frappuccino Blended Beverage", "Espresso Frappuccino Blended Beverage", "Coffee Frappuccino Blended Beverage", "Java Chip Frappuccino Blended Beverage", "Mocha Frappuccino Blended Beverage", "Caffe Vanilla Frappuccino Blended Beverage"] },
      { "Creme Frappuccino": ["S'mores Creme Frappuccino Blended Beverage", "Chocolate Cookie Crumble Creme Frappuccino", "Strawberry Frappuccino Blended Beverage", "Vanilla Bean Creme Frappuccino Blended Beverage", "Motcha Green Tea Creme Frappuccino Blended Beverage", "Chai Creme Frappuccino Blended Beverage", "Double Chocolaty Chip Creme Frappuccino Blended Beverage"] }
    ],
    "Cold Coffees" : [
      {"Cold Brews" : ["Cold Brew with Cinnamon Almond Foam", "Starbucks Reserve Cold Brew", "Salted Caramel Creme Cold Brew", "Vanilla Sweet Creme Cold Brew","Starbucks Cold Brew Coffee"]},
      {"Iced Americano" : ["Iced Caffe Americano", "Iced Starbucks Blonde Caffe Americano"]},
      {"Nitro Cold Brews" : ["Nitro Cold Brew with Cinnamon Almond Foam", ""]}
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
            <Route path="/menu/drinks/hot-coffees" exact render={(props) => <Menu {...props} menu={this.state["Hot Coffees"]} />} />
            <Route path="/menu/drinks/hot-teas" exact render={(props) => <Menu {...props} menu={this.state["Hot Teas"]} />} />
            <Route path="/menu/drinks/hot-drinks" exact render={(props) => <Menu {...props} menu={this.state["Hot Drinks"]} />} />
            <Route path="/menu/drinks/frappuccino-blended-beverages" exact render={(props) => <Menu {...props} menu={this.state["Frappuccino Blended Beverages"]} />} />
          </div>
        </div>

      </Aux>
    )
  }
}

export default Layout;
