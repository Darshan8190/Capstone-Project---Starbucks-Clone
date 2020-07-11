import React, { Component } from 'react';
import classes from './ElaboratedMenu.module.css'

class ElaboratedMenu extends Component {

    state = {
        sectionHeadings : ["Drinks", "Food", "At Home Coffee"]
    }

    render() {
        
        let sectionHeading = ""
        sectionHeading = this.state.sectionHeadings.map( sectionHeading => {
            
        })
        return (
            <div className={classes.elaboratedMenuWrapper}>
                <h1 className={classes.menuHeading}>Menu</h1>
                <section className={classes.sectionDrinks}>
                    <h2 className={classes.heading}>Drinks</h2>
                    <hr className={classes.hrLine}></hr>
                    <div className={classes.inventoryWrapper}>

                        <div className={classes.itemBox}>
                            <div className={classes.itemFlexContainer}>
                                <div className={classes.imageBox}></div>
                                <h3 className={classes.itemHeading}>Hot Coffees</h3>
                                <a href="/menu/drinks/hot-coffees" className={classes.itemLinkOverlay}></a>
                            </div>
                        </div>

                        <div className={classes.itemBox}>
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
                        </div>

                    </div>

                </section>
            </div>
        )
    }
}

export default ElaboratedMenu;