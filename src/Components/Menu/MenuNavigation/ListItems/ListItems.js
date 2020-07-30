import React, { Component } from 'react';
import classes from './ListItems.module.css'
import { Link } from 'react-router-dom'

class ListItem extends Component {
    render() {
        let items = null;

        items = this.props.items.map(item => {
            return (
                // <li key={item}><a href={`/menu/${this.props.sectionName.toLowerCase().replace(/\s+/g, '-')}/${item.toLowerCase().replace(/\s+/g, '-')}`}>{item}</a></li>
                <li key={item}>
                    <Link to={{
                        pathname: `/menu/${this.props.sectionName.toLowerCase().replace(/\s+/g, '-')}/${item.toLowerCase().replace(/\s+/g, '-')}`
                    }}>{item}
                    </Link>
                </li>
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