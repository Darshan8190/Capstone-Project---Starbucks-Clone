import React, { Component } from 'react';
import classes from './ManuNavigation.module.css';

import ListItems from './ListItems/ListItems'

class MenuNavigation extends Component {

    state = {
        navSecstionItems: []
    }

    render() {
        let navigationSections = null;

        navigationSections = this.props.menu.sectionNames.map(sectionName => {

            if (sectionName.toLowerCase() === "drinks") {
                this.state.navSecstionItems = this.props.menu.Drinks
            }
            else if (sectionName.toLowerCase() === "food") {
                this.state.navSecstionItems = this.props.menu.Food
            }
            else if (sectionName.toLowerCase() === "at home coffee") {
                this.state.navSecstionItems = this.props.menu["At Home Coffee"]
            }
            else {
                this.state.navSecstionItems = []
            }

            return (
                <section>
                    <h4 className={classes.sectionHeading}>{sectionName}</h4>
                    <ListItems items={this.state.navSecstionItems} sectionName={sectionName} />
                </section>
            )
        })

        return (
            <nav className={classes.sideNavWrapper}>
                {navigationSections}
            </nav>
        )
    }
}

export default MenuNavigation;