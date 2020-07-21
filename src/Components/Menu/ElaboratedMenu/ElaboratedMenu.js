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