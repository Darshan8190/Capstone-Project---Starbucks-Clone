import React, { Component } from 'react';
import classes from './Menu.module.css';
import ElaboratedMenu from './ElaboratedMenu/ElaboratedMenu'
import MenuNavigation from '../Menu/MenuNavigation/MenuNavigation'
import SignInJoinNowFooter from '../SignInJoinNowFooter/SignInJoinNowFooter'
import { Route } from 'react-router-dom'

class Menu extends Component {
    render() {
        return (
            <div className={classes.Container}>
                <div className={classes.Wrapper}>
                    <MenuNavigation menu={this.props.menu["sectionNames"]} />

                    <Route path="/menu" exact render={(props) => <ElaboratedMenu {...props} menu={this.props.menu["sectionNames"]} />} />

                    <Route path="/menu/drinks/hot-coffees" exact render={(props) => <ElaboratedMenu {...props} menu={this.props.menu["Hot Coffees"]} />} />
                    <Route path="/menu/drinks/hot-teas" exact render={(props) => <ElaboratedMenu {...props} menu={this.props.menu["Hot Teas"]} />} />
                    <Route path="/menu/drinks/hot-drinks" exact render={(props) => <ElaboratedMenu {...props} menu={this.props.menu["Hot Drinks"]} />} />
                    <Route path="/menu/drinks/frappuccino-blended-beverages" exact render={(props) => <ElaboratedMenu {...props} menu={this.props.menu["Frappuccino Blended Beverages"]} />} />
                    <Route path="/menu/drinks/cold-coffees" exact render={(props) => <ElaboratedMenu {...props} menu={this.props.menu["Cold Coffees"]} />} />
                    <Route path="/menu/drinks/iced-teas" exact render={(props) => <ElaboratedMenu {...props} menu={this.props.menu["Iced Teas"]} />} />
                    <Route path="/menu/drinks/cold-drinks" exact render={(props) => <ElaboratedMenu {...props} menu={this.props.menu["Cold Drinks"]} />} />

                    <Route path="/menu/food/hot-breakfast" exact render={(props) => <ElaboratedMenu {...props} menu={this.props.menu["Hot Breakfast"]} />} />
                    <Route path="/menu/food/bakery" exact render={(props) => <ElaboratedMenu {...props} menu={this.props.menu["Bakery"]} />} />
                    <Route path="/menu/food/lunch" exact render={(props) => <ElaboratedMenu {...props} menu={this.props.menu["Lunch"]} />} />
                    <Route path="/menu/food/snacks-&-sweets" exact render={(props) => <ElaboratedMenu {...props} menu={this.props.menu["Snacks & Sweets"]} />} />

                    <Route path="/menu/at-home-coffee/whole-bean" exact render={(props) => <ElaboratedMenu {...props} menu={this.props.menu["Whole Bean"]} />} />
                    <Route path="/menu/at-home-coffee/verismo-pods" exact render={(props) => <ElaboratedMenu {...props} menu={this.props.menu["Verismo Pods"]} />} />
                    <Route path="/menu/at-home-coffee/via-instant" exact render={(props) => <ElaboratedMenu {...props} menu={this.props.menu["VIA Instant"]} />} />
                    <Route path="/menu/at-home-coffee/k-cup-pods" exact render={(props) => <ElaboratedMenu {...props} menu={this.props.menu["K-Cup Pods"]} />} />

                </div>
                <div className={classes.Footer}>
                    <SignInJoinNowFooter />
                </div>
            </div>
        )
    }
}
export default Menu;