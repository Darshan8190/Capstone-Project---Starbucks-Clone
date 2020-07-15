import React from 'react';
import classes from './Item.module.css'

const item = (props) => (
    <div className={classes.itemBox}>
        <div className={classes.itemFlexContainer}>
            <div className={classes.imageBox}></div>
            <h3 className={classes.itemHeading}>{props.itemName}</h3>
            <a href={`/menu/${props.sectionName[0].toLowerCase().replace(/\s+/g, '-')}/${props.itemName.toLowerCase().replace(/\s+/g, '-')}`} className={classes.itemLinkOverlay}></a>
        </div>
    </div>
)

export default item;