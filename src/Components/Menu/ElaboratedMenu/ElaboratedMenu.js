import React, { Component } from 'react';
import classes from './ElaboratedMenu.module.css'

import ItemSection from './ItemSection/ItemSection'

class ElaboratedMenu extends Component {

    render() {
        let sectionsInventory = null;
        sectionsInventory = this.props.menu.map(section => {
            return <ItemSection key={Object.keys(section)[0]} sectionName={Object.keys(section)[0]} inventories={Object.values(section)[0]} />
        })
     
        let sectionLink = '';
        let sectionHeading = "Menu";
        if (this.props.type) {
            sectionHeading = this.props.type;
            sectionLink = `Menu / `
        }
        return (
            <div className={classes.elaboratedMenuWrapper}>
                <a href="/menu" className={classes.menuLink}>{sectionLink}</a><span className={classes.menuLink}b>{sectionHeading}</span>
                {/* <h1 className={classes.menuHeading}>Menu</h1> */}
                <h1 className={classes.menuHeading}>{sectionHeading}</h1>
                {sectionsInventory}
            </div>
        )
    }
}

export default ElaboratedMenu;