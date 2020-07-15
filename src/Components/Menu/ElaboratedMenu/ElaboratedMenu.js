import React, { Component } from 'react';
import classes from './ElaboratedMenu.module.css'

import ItemSection from './ItemSection/ItemSection'

class ElaboratedMenu extends Component {

    state = {
        sectionName: null,
        sectionItems: []
        // inventories: []
    }

    render() {
        let sectionsInventory = null;
        // sectionsInventory = this.props.menu.sectionNames.map(sectionName => {

        //     if (sectionName.toLowerCase() === "drinks") {
        //         this.state.inventories = this.props.menu.Drinks;
        //     }
        //     else if (sectionName.toLowerCase() === "food") {
        //         this.state.inventories = this.props.menu.Food;
        //     }
        //     else if (sectionName.toLowerCase() === "at home coffee") {
        //         this.state.inventories = this.props.menu["At Home Coffee"];
        //     }
        //     else {
        //         this.state.inventories = []
        //     }
        //     return <ItemSection key={sectionName} sectionName={sectionName} inventories={this.state.inventories} />
        // })

        // temp code
        sectionsInventory = this.props.menu.map(sectionName => {

            this.state.sectionName = Object.keys(sectionName)[0];
            this.state.sectionItems = Object.values(sectionName)[0];
            return <ItemSection key={sectionName} sectionName={this.state.sectionName} inventories={this.state.sectionItems} />
        })

        return (
            <div className={classes.elaboratedMenuWrapper}>
                <h1 className={classes.menuHeading}>Menu</h1>
                {sectionsInventory}
            </div>
        )
    }
}

export default ElaboratedMenu;