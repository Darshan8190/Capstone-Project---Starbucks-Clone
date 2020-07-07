import React from "react";
import classes from "./Navigation.module.css";
import { Route } from 'react-router-dom'

import Logo from '../Logo/Logo'
import NavigationItems from './NavigationItems/NavigationItems'
import StoreMarker from '../../icons/findAStore.png'
import JoinNow from '../JoinNow/JoinNow'
import SignIn from '../SignIn/SignIn'


const navigation = (props) => (
  <div>
    <header>
      <nav className={classes.Navigation}>
        <div className={classes.handle}>
          <Logo />
          <NavigationItems />
          <div className={classes.signInSignUpPageWrapper}>
            <div className={classes.signInSignUpPage}>
              <a href="/" className={classes.findAStoreLink}>
                <img src={StoreMarker} alt="Store Marker" className={classes.locationMarker} />
                  Find a store</a>
              <a href="/account/signin" className={classes.signInLink}>Sign in</a>
              <a href="/account/create" className={classes.joinNowLink}>Join now</a>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <Route path="/account/create" exact component={JoinNow} />
    <Route path="/account/signin" exact component={SignIn} />
  </div>

);

export default navigation;
