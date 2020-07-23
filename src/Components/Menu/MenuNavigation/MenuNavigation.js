import React, { Component } from 'react';
import classes from './ManuNavigation.module.css';

import ListItems from './ListItems/ListItems'

class MenuNavigation extends Component {

    render() {
        let navigationSections = null;
        navigationSections = this.props.menu.map(sectionName => {
            return (
                <section key={Object.keys(sectionName)[0]}>
                    <h4 className={classes.sectionHeading}>{Object.keys(sectionName)[0]}</h4>
                    <ListItems items={Object.values(sectionName)[0]} sectionName={Object.keys(sectionName)[0]} />
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