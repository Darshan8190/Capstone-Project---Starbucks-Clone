import React, { Component } from 'react';
import classes from './ElaboratedMenu.module.css'

import ItemSection from './ItemSection/ItemSection'

class ElaboratedMenu extends Component {

    render() {
        let sectionsInventory = null;
        sectionsInventory = this.props.menu.sectionNames.map(sectionName => {

            if (sectionName.toLowerCase() === "drinks") {
                this.props.menu.inventories = this.props.menu.Drinks;
            }
            else if (sectionName.toLowerCase() === "food") {
                this.props.menu.inventories = this.props.menu.Food;
            }
            else if (sectionName.toLowerCase() === "at home coffee") {
                this.props.menu.inventories = this.props.menu["At Home Coffee"];
            }
            else {
                this.props.menu.inventories = []
            }
            return <ItemSection key={sectionName} sectionName={sectionName} inventories={this.props.menu.inventories} />
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