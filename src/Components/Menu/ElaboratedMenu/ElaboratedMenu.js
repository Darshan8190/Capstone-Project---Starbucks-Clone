import React, { Component } from 'react';
import classes from './ElaboratedMenu.module.css'

import ItemSection from './ItemSection/ItemSection'

class ElaboratedMenu extends Component {

    render() {
        let sectionsInventory = null;
        sectionsInventory = this.props.menu.map(section => {
            return <ItemSection key={Object.keys(section)[0]} sectionName={Object.keys(section)[0]} inventories={Object.values(section)[0]} />
        })
        let path = this.props.history.location.pathname.split('/').splice(1)[0].split('');
        let first = path.shift();
        // let path = this.props.history.location.pathname;
        console.log(path);
        console.log(first.toUpperCase());
        console.log(path.unshift(first.toUpperCase()));
        return (
            <div className={classes.elaboratedMenuWrapper}>
                <a href={this.props.history.location.pathname} className={classes.menuLink}>{path.join(' / ')}</a>
                {/* <h1 className={classes.menuHeading}>Menu</h1> */}
                <h1 className={classes.menuHeading}>{this.props.type}</h1>
                {/* <h1 className={classes.menuHeading}>{path[2].replace('-',' ').toUpperCase()}</h1> */}
                {sectionsInventory}
            </div>
        )
    }
}

export default ElaboratedMenu;