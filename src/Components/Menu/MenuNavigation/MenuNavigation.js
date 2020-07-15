import React, { Component } from 'react';
import classes from './ManuNavigation.module.css';

import ListItems from './ListItems/ListItems'

class MenuNavigation extends Component {

    state = {
        sectionName: null,
        sectionItems: []
    }

    render() {
        let navigationSections = null;

        navigationSections = this.props.menu.map(sectionName => {

            this.state.sectionName = Object.keys(sectionName)[0];
            this.state.sectionItems = Object.values(sectionName)[0];

            return (
                <section key={this.state.sectionName}>
                    <h4 className={classes.sectionHeading}>{this.state.sectionName}</h4>
                    <ListItems items={this.state.sectionItems} sectionName={this.state.sectionName} />
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