import React, { Component } from 'react';
import classes from './ListItems.module.css'

class ListItem extends Component {
    render() {
        let items = null;

        items = this.props.items.map(item => {
            return (
                <li><a href={`/menu/${this.props.sectionName.toLowerCase().replace(/\s+/g, '-')}/${item.toLowerCase().replace(/\s+/g, '-')}`}>{item}</a></li>
            )
        })

        return (
            <ul className={classes.sideNavUL}>
                {items}
            </ul>
        )
    }
}

export default ListItem;