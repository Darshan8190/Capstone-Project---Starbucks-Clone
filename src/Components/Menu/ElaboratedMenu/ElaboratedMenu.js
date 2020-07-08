import React from 'react';
import classes from './ElaboratedMenu.module.css'

const elaboratedMenu = (props) => (
    <div className={classes.elaboratedMenuWrapper}>
        <h1 className={classes.menuHeading}>Menu</h1>
        <section className={classes.sectionDrinks}>
            <h2 className={classes.heading}>Drinks</h2>
            <hr className={classes.hrLine}></hr>
            <div className={classes.inventoryWrapper}>
                <div className={classes.itemBox}>
                    <div className={classes.itemFlexContainer}>
                        <div className={classes.imageBox}></div>
                        <h3>Hot Coffees</h3>
                    </div>
                </div>

                <div className={classes.itemBox}>
                    <div className={classes.itemFlexContainer}>
                        <div className={classes.imageBox}></div>
                        <h3>Hot Teas</h3>
                    </div>
                </div>

                <div className={classes.itemBox}>
                    <div className={classes.itemFlexContainer}>
                        <div className={classes.imageBox}></div>
                        <h3>Hot Drinks</h3>
                    </div>
                </div>
              
            </div>
       
        </section>
    </div>
);

export default elaboratedMenu;