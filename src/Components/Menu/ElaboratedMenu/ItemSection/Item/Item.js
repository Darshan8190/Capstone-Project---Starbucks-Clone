import React from 'react';
import classes from './Item.module.css'
import { withRouter,Link } from 'react-router-dom'

const item = (props) => (
    <div className={classes.itemBox}>
        <div className={classes.itemFlexContainer}>
            <div className={classes.imageBox}></div>
            <h3 className={classes.itemHeading}>{props.itemName}</h3>
            <Link to={{
                pathname :props.match.url + `/${props.sectionName.toLowerCase().replace(/\s+/g, '-')}/${props.itemName.toLowerCase().replace(/\s+/g, '-')}`
            }} className={classes.itemLinkOverlay}></Link>
        </div>
    </div>
)

export default withRouter(item);