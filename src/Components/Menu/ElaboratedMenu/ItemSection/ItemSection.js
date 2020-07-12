import React, { Component } from 'react';
import classes from './ItemSection.module.css'

import Item from './Item/Item'

class ItemSection extends Component {
    render(){

        let items = null;
        items = this.props.drinkItems.map(item => {
            return <Item key={item} itemName={item}/>
        })
        return (
            <section className={classes.sectionDrinks}>
            <h2 className={classes.heading}>{this.props.sectionItemHeading}</h2>
            <hr className={classes.hrLine}></hr>
            <div className={classes.inventoryWrapper}>
                {/* <Item drinkItems={this.props.drinkItems}/> */}
                {items}
                {/* <div className={classes.itemBox}>
                    <div className={classes.itemFlexContainer}>
                        <div className={classes.imageBox}></div>
                        <h3 className={classes.itemHeading}>Hot Teas</h3>
                        <a href="/menu/drinks/hot-teas" className={classes.itemLinkOverlay}></a>
                    </div>
                </div>
    
                <div className={classes.itemBox}>
                    <div className={classes.itemFlexContainer}>
                        <div className={classes.imageBox}></div>
                        <h3 className={classes.itemHeading}>Hot Drinks</h3>
                        <a href="/menu/drinks/hot-drinks" className={classes.itemLinkOverlay}></a>
                    </div>
                </div> */}
    
            </div>
    
        </section>
        )
    }
} 


export default ItemSection;