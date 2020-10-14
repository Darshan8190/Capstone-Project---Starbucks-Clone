import React, { Component } from "react";
import { Link, Route } from 'react-router-dom'

import classes from "./Navigation.module.css";
import Logo from '../Logo/Logo'
import NavigationItems from './NavigationItems/NavigationItems'
import ViewOrders from '../ViewOrders/ViewOrders'
import StoreMarker from '../../icons/findAStore.png'
import StoreLocator from '../StoreLocator/StoreLocator'
import SignIn from '../../Containers/SignIn/SignIn'
import JoinNow from '../../Containers/JoinNow/JoinNow'
import Logout from '../Logout/Logout'


class Navigation extends Component {
  render() {

    let isAuthenticated = null
    if (!this.props.isAuth) {
      isAuthenticated = (
        <span>
          <Link to="/account/signin" className={classes.signInLink}>Sign in</Link>
          <Link to="/account/create" className={classes.joinNowLink}>Join now</Link>
        </span>
      )
    }
    else {
      isAuthenticated = <Link to="/logout" className={classes.joinNowLink}>Logout</Link>

    }
    return (
      <div>
        <header>
          <nav className={classes.Navigation}>
            <div className={classes.handle}>
              <Logo />
              <NavigationItems />
              <div className={classes.signInSignUpPageWrapper}>
                <div className={classes.signInSignUpPage}>
                  <Link to="/store-locator" className={classes.findAStoreLink}>
                    <img src={StoreMarker} alt="Store Marker" className={classes.locationMarker} />
                  Find a store</Link>
                  {isAuthenticated}
                </div>
              </div>
            </div>
          </nav>
        </header>

        <Route path="/view-orders" exact component={ViewOrders} />
        <Route path="/store-locator" exaxt component={StoreLocator} />
        <Route path="/account/signin" exact component={SignIn} />
        <Route path="/account/create" exact component={JoinNow} />
        <Route path="/logout" exact component={Logout} />
      </div>
    )
  }
}

export default Navigation;
