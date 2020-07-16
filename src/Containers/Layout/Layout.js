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
    "Cold Coffees": [
      { "Cold Brews": ["Cold Brew with Cinnamon Almond Foam", "Starbucks Reserve Cold Brew", "Salted Caramel Creme Cold Brew", "Vanilla Sweet Creme Cold Brew", "Starbucks Cold Brew Coffee"] },
      { "Iced Americano": ["Iced Caffe Americano", "Iced Starbucks Blonde Caffe Americano"] },
      { "Nitro Cold Brews": ["Nitro Cold Brew with Cinnamon Almond Foam", "Nitro Cold Brew with Salted Honey Cold Foam", "Salted Caramel Creme Nitro Cold Brew", "Starbucks Reserve Nitro", "Nitro Cold Brew", "Nitro Cold Brew with Sweet Creme"] },
      { "Iced Coffees": ["Iced Coffee", "Iced Coffee with Milk"] },
      { "Iced Espresso Shots": ["Iced Espresso", "Starbucks Doubleshot on Ice", "Starbucks Blonde Doubleshot On Ice"] },
      { "Iced Flat Whites": ["Iced Almond Honey Flat White", "Iced Almond Honet Flat White with Starbucks Blonde Espresso", "Iced Flat White", "Iced Starbucks Blonde Flat White"] },
      { "Iced Lattes": ["Iced Coconut Cascara Latte", "Iced Coconut Cascara Latte with Starbucks Blonde Espresso", "Iced Caffe Latte", "Iced Starbucks Blonde Caffe Latte", "Iced Starbucks Blonde Vanilla Latte", "Starbucks Reserve Iced Hazelnut Bianco Latte", "Starbucks Reserve Iced Latte", "Iced Starbucks Blonde Hazelnut Latte"] },
      { "Iced Macchiatos": ["Iced Caramel Macchiato", "Iced Starbucks Blonder Caramel Macchiato"] },
      { "Iced Mochas": ["Iced Caffe Mocha", "Iced White Chocolate Mocha", "Starbucks Resereve Iced Dark Chocolate Mocha"] }
    ],
    "Iced Teas" : [
      {"Iced Chai Teas" : ["Iced Chai Latte"]},
      {"Iced Black Teas" : ["Iced Guava Black Tea", "Iced Guava Black Tea Lemonade", "Iced Black Tea","Iced Black Tea Latte","Iced Black Tea Lemonade","Iced London Fog Tea Latte","Iced Rooibos Tea Latte","Iced Blossoming Rose Tea Latte","Iced Royal English Breakfast Tea Latte"]},
      {"Iced Green Teas" : ["Iced Peach Green Tea", "Iced Peach Green Tea Lemonade","Iced Green Tea Lemonade","Iced Green Tea","Iced Matcha Green Tea Latte","Matcha Tea Lemonade"]},
      {"Iced Herbal Teas" : ["Iced Rooibos Tea Latte", "Iced Blossoming Rose Tea Latte","Iced Passion Tango Tea","Iced Passion Tango Tea Lamonade"]}
    ],
    "Cold Drinks" : [
      {"Starbucks Refreshers" : ["Kiwi Starfruit Starbucks Refreshers Beverage","Kiwi Starfruit Lemonade Starbucks Refreshers Beverage","Star Drink","Dragon Drink","Mango Dragonfruit Starbucks Refreshers Beverage","Mango Dragonfruit Lemonade Starbucks Refreshers Beverage","Strawberry Coconut Drink","Very Berry Hibiscus Lemonade Starbucks Refreshers Beverage","Strawberry Acai Lemonade Starbucks Refreshers Beverage","Very Berry Hibiscus Starbucks Refreshers Beverage","Strawberry Acai Starbucks Refreshers Beverage","Violet Drink"]},
      {"Iced Coconut Drinks" : ["Iced Guava Passionfruit Drink", "Iced Golden Ginger Drink","Iced Pineapple Matcha Drink"]},
      {"Milk" : ["Cold Milk","Milk2Go 1% Chocolate Milk"]},
      {"Sparkling Water" : ["Galvanina Sparkling Water","Galvanina Sparkling Water - Lemon"]},
      {"Water" : ["Ethos Bottled Water", "O.N.E. Coconut Water"]},
      {"Juice" : ["SunRype Apple Juice", "San Pellegrino Blood Orange Sparkling Fruit Beverage","San Pellegrino Limonata Beverage","Lemonade","Blended Strawberry Lemonade"]}
    ],
    "Hot Breakfast" : [
      {"Breakfast Sandwiches & Wraps" : ["Beyond Meat, Cheddar & Egg Sandwich","Everything Croissant & Roasted Ham Sandwich","Bacon, Gouda & Egg Sandwich","Reduced-Fat Trukey Bacon & Cage-Free Ege White Sandwich","Roasted Ham, Swiss & Egg Sandwich","Double-Smoked Bacon, Cheddar & Egg Sandwich","Sausage, Cheddar & Egg Sandwich","Spinach, Feta & Cage-Free Egg White Wrap"]},
      {"Egg Bites" : ["Ham, Cheddar & Peppers Sous Vide Egg Bites","Bacon & Gruyere Sous Vide Egg Bites","Egg White & Roasted Red Pepper Sous Vide Egg Bites"]},
      {"Oatmeal" : ["Classic Oatmeal"]}
    ],
    "Bakery" : [
      {"Bagels" : ["Everything Bagel", "ACE Baguette Bagel", "Sprouted Grain Vegan Bagel"]},
      {"Cakes & Pies" : ["Double Chocolate Loaf Cake","Classic Coffee Cake", "Banana Bread","Chocolate Cake Pop","Birthday Cake Pop","Lemon Loaf"]},
      {"Cookies & Brownies" : ["Confetti Sugar Cookie", "Double Chocolate Chunk Brownie", "Chocolate Chunk Cookie","Oatmeal Cookie", "Ginger Molasses Cookie"]},
      {"Croissants" : ["Butter Croissant", "Chocolate Croissant", "Cheese Danish", "Almond Croissant"]},
      {"Dessert Bars" : ["Gluten-Free Marshmallow Dream Bar", "Oat Bar", "Oat Fudge Bar"]},
      {"Muffins & Breads" : ["Carrot Muffin", "Blueberry Muffin with Yogurt & Honey", "Chocolate Chunk Muffin"]},
      {"Scones" : ["Petite Vanilla Bean Scone", "Blueberry Scone"]}
    ],
    "Lunch" : [
      {"Sandwiches and Wraps" : ["Southwest Black Bean Wrap with Monterey Jack", "Chimichurri Chicken Sandwich", "Caprese Sandwich", "Cubano Sandwich", "Sourdough Grilled Cheese", "Chicken Caprese", "Chicken & Double-Smoked Bacon Panini", "Roasted Tomato & Mozzarella Panini", "Turkey & Basil Pesto Panini"]},
      {"Protein Boxes" : ["Eggs & Cheese Protein Box", "Cheese & Fruit Protein Box"]},
      {"Spreads" : ["Avacado Spread", "Sabra Snackers Classic Hummus with Pretzels"]}
    ],
    "Snacks & Sweets" : [
      {"Biscotti & Cookies" : ["Dipped Madeleines", "Madeleines", "Shortbread Cookies", "Dark Chocolate Grahams"]},
      {"Chocolates & Candy" : ["Starbucks Chocolate Caramel Pretzel", "Chocolate Covered Espresso Beans", "Salted Almond Chocolate Bites", "Justin's Dark Chocolate Peanut Butter Cups"]},
      {"Gum & Mints" : ["Peppermint Gums"]},
      {"Popcorn & Chips" : ["Butter Gourmet Popcorn", "Crispy Apple Chips", "Perfectly Salted Kettle Potato Chips", "Starbucks Smoky Sweet BBQ Kettle Potato Chips", "Salt & Vinegar Kettle Chips", "Sweet Potato Kettle Chips"]},
      {"Snack Bars" : ["KIND Raspberry Chia Bar", "KIND Peanut Butter Dark Chocolate", "Squirrel - Classic Almonds"]}
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
            <Route path="/menu/drinks/cold-coffees" exact render={(props) => <Menu {...props} menu={this.state["Cold Coffees"]} />} />
            <Route path="/menu/drinks/iced-teas" exact render={(props) => <Menu {...props} menu={this.state["Iced Teas"]} />} />
            <Route path="/menu/drinks/cold-drinks" exact render={(props) => <Menu {...props} menu={this.state["Cold Drinks"]} />} />

            <Route path="/menu/food/hot-breakfast" exact render={(props) => <Menu {...props} menu={this.state["Hot Breakfast"]} />} />
            <Route path="/menu/food/bakery" exact render={(props) => <Menu {...props} menu={this.state["Bakery"]} />} />
            <Route path="/menu/food/lunch" exact render={(props) => <Menu {...props} menu={this.state["Lunch"]} />} />
            <Route path="/menu/food/snacks-&-sweets" exact render={(props) => <Menu {...props} menu={this.state["Snacks & Sweets"]} />} />
          </div>
        </div>

      </Aux>
    )
  }
}

export default Layout;
