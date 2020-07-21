import React, { Component } from 'react';
import classes from './Menu.module.css';
import ElaboratedMenu from './ElaboratedMenu/ElaboratedMenu'
import MenuNavigation from '../Menu/MenuNavigation/MenuNavigation'
import SignInJoinNowFooter from '../SignInJoinNowFooter/SignInJoinNowFooter'

class Menu extends Component {

    state = {
        sectionNames: [
            { "Drinks": ["Hot Coffees", "Hot Teas", "Hot Drinks", "Frappuccino Blended Beverages", "Cold Coffees", "Iced Teas", "Cold Drinks"] },
            { Food: ["Hot Breakfast", "Bakery", "Lunch", "Snacks & Sweets"] },
            { "At Home Coffee": ["Whole Bean", "Verismo Pods", "VIA Instant", "K-Cup Pods"] }
        ]
    }
    render() {

        return (
            <div className={classes.Container}>
                <div className={classes.Wrapper}>
                    {/* <div className={classes.Container}> */}
                    <MenuNavigation menu={this.state.sectionNames} />
                    <ElaboratedMenu menu={this.props.menu} />
                    {/* </div> */}
                </div>
                <div className={classes.Footer}>
                    <SignInJoinNowFooter />
                </div>
            </div>
        )
    }
}
export default Menu;