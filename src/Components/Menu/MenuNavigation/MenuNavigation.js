import React from 'react';
import classes from './ManuNavigation.module.css';

const menuNavigation = (props) => (
    <nav className={classes.sideNavWrapper}>
        <section>
            <h4 className={classes.sectionHeading}>Drinks</h4>
            <ul className={classes.sideNavUL}>
                <li><a href="/">Hot Coffees</a></li>
                <li><a href="/">Hot Teas</a></li>
                <li><a href="/">Hot Drinks</a></li>
                <li><a href="/">Frappuccino&reg; Blended Beverages</a></li>
                <li><a href="/">Cold Coffees</a></li>
                <li><a href="/">Iced Teas</a></li>
                <li><a href="/">Cold Drinks</a></li>
            </ul>
        </section>
        <section>
            <h4 className={classes.sectionHeading}>Food</h4>
            <ul className={classes.sideNavUL}>
                <li><a href="/">Hot Breakfast</a></li>
                <li><a href="/">Bakery</a></li>
                <li><a href="/">Lunch</a></li>
                <li><a href="/">Snacks &amp; Sweets</a></li>
            </ul>
        </section>
        <section>
            <h4 className={classes.sectionHeading}>At Home Coffee</h4>
            <ul className={classes.sideNavUL}>
                <li><a href="/">Whole Bean</a></li>
                <li><a href="/">Verismo&reg; Pods</a></li>
                <li><a href="/">VIA&reg; Instant</a></li>
                <li><a href="/">K-Cup&reg; Pods</a></li>
            </ul>
        </section>
    </nav>
);

export default menuNavigation;