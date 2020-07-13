import React, { Component } from 'react';
import classes from './ItemSection.module.css'

import Item from './Item/Item'

class ItemSection extends Component {
    render() {

        let items = null;
        items = this.props.inventories.map(item => {
            return <Item key={item} itemName={item} sectionName={this.props.sectionName} />
        })

        return (
            <section className={classes.sectionWrapper}>
                <h2 className={classes.heading}>{this.props.sectionName}</h2>
                <hr className={classes.hrLine}></hr>
                <div className={classes.inventoryWrapper}>
                    {items}
                </div>
            </section>
        )
    }
}


export default ItemSection;