import React, { Component } from 'react';
import classes from './ElaboratedMenu.module.css'

import ItemSection from './ItemSection/ItemSection'

class ElaboratedMenu extends Component {

    state = {
        sectionHeadings : ["Drinks", "Food", "At Home Coffee"],
        Drinks : ["Hot Coffee", "Hot Teas", "Hot Drinks", "Frappuccino Blended Beverages", "Cold Coffees", "Iced Teas", "Cold Drinks"],
        Food : ["Hot Breakfast", "Bakery", "Lunch", "Snacks & Sweets"],
        "At Home Coffee" : ["Whole Bean", "Verismo Pods", "VIA Instant", "K-Cup Pods"]
    }

    render() {
        let sectionHeading = null;
        sectionHeading = this.state.sectionHeadings.map( sectionHeading => {
           return <ItemSection key={sectionHeading} sectionItemHeading={sectionHeading} drinkItems={this.state.Drinks}/>
        })
        
        return (
            <div className={classes.elaboratedMenuWrapper}>
                <h1 className={classes.menuHeading}>Menu</h1>
                {sectionHeading}
                {/* <ItemSection sectionItemHeading="Drinks" drinkItems={this.state.Drinks}/>
                <br/>
                <ItemSection sectionItemHeading="Drinks" drinkItems={this.state.Drinks}/> */}
              
            </div>
        )
    }
}

export default ElaboratedMenu;