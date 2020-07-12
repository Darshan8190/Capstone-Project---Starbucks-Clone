import React from 'react';
import classes from './Item.module.css'

const item = (props) => (


    <div className={classes.itemBox}>
        <div className={classes.itemFlexContainer}>
            <div className={classes.imageBox}></div>
            <h3 className={classes.itemHeading}>{props.itemName}</h3>
            <a href="/menu/drinks/hot-coffees" className={classes.itemLinkOverlay}></a>
        </div>
    </div>

)

export default item;