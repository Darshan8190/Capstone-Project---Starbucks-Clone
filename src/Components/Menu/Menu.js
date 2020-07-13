import React, { Component } from 'react';
import classes from './Menu.module.css';
import MenuNavigation from './MenuNavigation/MenuNavigation'
import ElaboratedMenu from './ElaboratedMenu/ElaboratedMenu'

class Menu extends Component {

    state = {
        sectionNames: ["Drinks", "Food", "At Home Coffee"],
        Drinks: ["Hot Coffee", "Hot Teas", "Hot Drinks", "Frappuccino Blended Beverages", "Cold Coffees", "Iced Teas", "Cold Drinks"],
        Food: ["Hot Breakfast", "Bakery", "Lunch", "Snacks & Sweets"],
        "At Home Coffee": ["Whole Bean", "Verismo Pods", "VIA Instant", "K-Cup Pods"],
        inventories: []
    }

    render() {
        return (
            <div className={classes.Container}>
                <div className={classes.Wrapper}>
                    <MenuNavigation menu={this.state}/>
                    <ElaboratedMenu menu={this.state} />
                </div>
            </div>
        )
    }

}
export default Menu;