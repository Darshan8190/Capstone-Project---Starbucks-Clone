import React from 'react';
import classes from './NavigationItems.module.css'
import { NavLink } from 'react-router-dom'

const navigationItems = (props) => (
    <div>
        <ul className={classes.list}>
            <li className={classes.listItem}>
                <NavLink to="/menu"  activeClassName={classes.active}>MENU</NavLink>
            </li>
            <li className={classes.listItem}>
                <NavLink to="/rewards" activeClassName={classes.active}>REWARDS</NavLink>
            </li>
            <li className={classes.listItem}>
                <NavLink to="/gift-cards" activeClassName={classes.active}>GIFT CARDS</NavLink>
            </li>
        </ul>
    </div>
)

export default navigationItems;