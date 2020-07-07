import React from 'react';
import classes from './NavigationItems.module.css'

const navigationItems = (props) => (
    <div>
        <ul className={classes.list}>
            <li className={classes.listItem}>
                <a href="/" className={classes.listItemLink}>MENU</a>
            </li>
            <li className={classes.listItem}>
                <a href="/" className={classes.listItemLink}>REWARDS</a>
            </li>
            <li className={classes.listItem}>
                <a href="/" className={classes.listItemLink}>GIFT CARDS</a>
            </li>
        </ul>
    </div>
)

export default navigationItems;