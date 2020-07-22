import React, { Component } from 'react';
import classes from './ElaboratedMenu.module.css'

import ItemSection from './ItemSection/ItemSection'

class ElaboratedMenu extends Component {

    state = {
        sectionName: null,
        sectionItems: []
        // inventories: []
    }

    // console.log(this.props.menu);
    // console.log(this.props.menu["sectionNames"]);
    // this.props.menu["sectionNames"].map(item => {
    //   console.log(item);
    //   console.log(Object.keys(item));
    //   console.log(Object.values(item));
    //   Object.values(item).map(i => {
    //     console.log(i[0]);
    //   })
    // });


    render() {
        let sectionsInventory = null;
        sectionsInventory = this.props.menu.map(section => {
            return <ItemSection key={Object.keys(section)[0]} sectionName={Object.keys(section)[0]} inventories={Object.values(section)[0]} />
        })
        console.log(this.props.menu);
        return (
            <div className={classes.elaboratedMenuWrapper}>
                <h1 className={classes.menuHeading}>Menu</h1>
                {sectionsInventory}
            </div>
        )
    }
}

export default ElaboratedMenu;