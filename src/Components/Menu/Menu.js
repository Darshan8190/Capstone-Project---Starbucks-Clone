import React, { Component } from 'react';
import classes from './Menu.module.css';
import ElaboratedMenu from './ElaboratedMenu/ElaboratedMenu'
import MenuNavigation from '../Menu/MenuNavigation/MenuNavigation'
import { Route, Switch, Redirect } from 'react-router-dom'
import ItemDescription from '../../Containers/ItemDescription/ItemDescription'

class Menu extends Component {
    render() {
        return (
            <div className={classes.Container}>
                <div className={classes.Wrapper}>
                    {/* <Redirect from="/" to="/menu" /> */}
                    <Switch>

                        <Route path="/menu/drinks/hot-coffees/:id" component={ItemDescription} />
                        <Route path="/menu/drinks/hot-teas/:id" component={ItemDescription} />
                        <Route path="/menu/drinks/hot-drinks/:id" component={ItemDescription} />
                        <Route path="/menu/drinks/frappuccino-blended-beverages/:id" component={ItemDescription} />
                        <Route path="/menu/drinks/cold-coffees/:id" component={ItemDescription} />
                        <Route path="/menu/drinks/iced-teas/:id" component={ItemDescription} />
                        <Route path="/menu/drinks/cold-drinks/:id" component={ItemDescription} />

                        <Route path="/menu/food/hot-breakfast/:id" component={ItemDescription} />
                        <Route path="/menu/food/bakery/:id" component={ItemDescription} />
                        <Route path="/menu/food/lunch/:id" component={ItemDescription} />
                        <Route path="/menu/food/snacks-&-sweets/:id" component={ItemDescription} />

                        <Route path="/menu/at-home-coffee/whole-bean/:id" component={ItemDescription} />
                        <Route path="/menu/at-home-coffee/verismo-pods/:id" component={ItemDescription} />
                        <Route path="/menu/at-home-coffee/via-instant/:id" component={ItemDescription} />
                        <Route path="/menu/at-home-coffee/k-cup-pods/:id" component={ItemDescription} />

                        <Route path="/menu" render={(props) => <MenuNavigation {...props} menu={this.props.menu["sectionNames"]} />} />
                    </Switch>

                    <Route path="/menu" exact render={(props) => <ElaboratedMenu {...props} menu={this.props.menu["sectionNames"]} />} />

                    <Route path="/menu/drinks/hot-coffees" exact render={(props) => <ElaboratedMenu {...props} menu={this.props.menu["Hot Coffees"]} type={"Hot Coffees"} />} />
                    <Route path="/menu/drinks/hot-teas" exact render={(props) => <ElaboratedMenu {...props} menu={this.props.menu["Hot Teas"]} type={"Hot Teas"} />} />
                    <Route path="/menu/drinks/hot-drinks" exact render={(props) => <ElaboratedMenu {...props} menu={this.props.menu["Hot Drinks"]} type={"Hot Drinks"} />} />
                    <Route path="/menu/drinks/frappuccino-blended-beverages" exact render={(props) => <ElaboratedMenu {...props} menu={this.props.menu["Frappuccino Blended Beverages"]} type={"Frappuccino Blended Beverages"} />} />
                    <Route path="/menu/drinks/cold-coffees" exact render={(props) => <ElaboratedMenu {...props} menu={this.props.menu["Cold Coffees"]} type={"Cold Coffees"} />} />
                    <Route path="/menu/drinks/iced-teas" exact render={(props) => <ElaboratedMenu {...props} menu={this.props.menu["Iced Teas"]} type={"Iced Teas"} />} />
                    <Route path="/menu/drinks/cold-drinks" exact render={(props) => <ElaboratedMenu {...props} menu={this.props.menu["Cold Drinks"]} type={"Cold Drinks"} />} />

                    <Route path="/menu/food/hot-breakfast" exact render={(props) => <ElaboratedMenu {...props} menu={this.props.menu["Hot Breakfast"]} type={"Hot Breakfast"} />} />
                    <Route path="/menu/food/bakery" exact render={(props) => <ElaboratedMenu {...props} menu={this.props.menu["Bakery"]} type={"Bakery"} />} />
                    <Route path="/menu/food/lunch" exact render={(props) => <ElaboratedMenu {...props} menu={this.props.menu["Lunch"]} type={"Lunch"} />} />
                    <Route path="/menu/food/snacks-&-sweets" exact render={(props) => <ElaboratedMenu {...props} menu={this.props.menu["Snacks & Sweets"]} type={"Snacks & Sweets"} />} />

                    <Route path="/menu/at-home-coffee/whole-bean" exact render={(props) => <ElaboratedMenu {...props} menu={this.props.menu["Whole Bean"]} type={"Whole Bean"} />} />
                    <Route path="/menu/at-home-coffee/verismo-pods" exact render={(props) => <ElaboratedMenu {...props} menu={this.props.menu["Verismo Pods"]} type={"Verismo Pods"} />} />
                    <Route path="/menu/at-home-coffee/via-instant" exact render={(props) => <ElaboratedMenu {...props} menu={this.props.menu["VIA Instant"]} type={"VIA Instant"} />} />
                    <Route path="/menu/at-home-coffee/k-cup-pods" exact render={(props) => <ElaboratedMenu {...props} menu={this.props.menu["K-Cup Pods"]} type={"K-Cup Pods"} />} />

                </div>
            </div>
        )
    }
}
export default Menu;