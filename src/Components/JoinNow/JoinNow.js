import React from "react";
import classes from "./JoinNow.module.css";

import SignInJoinNowFooter from '../SignInJoinNowFooter/SignInJoinNowFooter'

const joinNow = (props) => (

  <main className={classes.wrapper}>
    <div className={classes.createUserWrapper}>

      <section className={classes.labelwrapper}>
        <p className={classes.createAnAccountLabel}>Create an account</p>
      </section>

      <section className={classes.joinNowForm}>
        <form>
          <fieldset>
            <span className={classes.personalInfoSpan}>Personal Information</span>
            <div className={classes.boxName}>
              <input type="text" name="name" required autocomplete="off" />
              <label for="name" className={classes.labelName}>
                <span className={classes.contentName}>First name</span>
              </label>
            </div>

            <div className={classes.boxName}>
              <input type="text" name="name" required autocomplete="off" />
              <label for="name" className={classes.labelName}>
                <span className={classes.contentName}>Last name</span>
              </label>
            </div>
          </fieldset>

          <fieldset>
            <span className={classes.accountSecuritySpan}>Account Security</span>
            <div className={classes.boxEmail}>
              <input type="text" name="email" required autocomplete="off" />
              <label for="email" className={classes.labelEmail}>
                <span className={classes.contentEmail}>Email address</span>
              </label>
            </div>

            <div className={classes.boxEmail}>
              <input type="password" name="email" required autocomplete="off" />
              <label for="email" className={classes.labelEmail}>
                <span className={classes.contentEmail}>Password</span>
              </label>
            </div>
          </fieldset>

          <div className={classes.rewards_and_terms_WrapperDiv}>
            <span className={classes.rewardAndStarTitle}>
              COLLECT MORE STARS & EARN REWARDS
          </span>
            <p className={classes.subscriptionLabel}>
              Email is a great way to know about offers and what's new from
              Coffee-Culture.
          </p>

            <div className={classes.handleCheckbox}>
              <input type="checkbox" id="test1" />
              <label for="test1"></label>
              <p className={classes.checkboxLabel}> Yes, I'd like to receive news, promotions, information and offers
            from Coffee-Culture.</p>
              {/* <label for="test1">   Know about product offers, announcements and initiatives</label> */}
            </div>

            <p className={classes.unsubscribeLabel}>
              You can unsubscribe at any time. Please read out Privacy Statement or
              Contact Us.
          </p>
          </div>

          <div className={classes.rewards_and_terms_WrapperDiv}>
            <p className={classes.termsOfUseTitle}>TERMS OF USE</p>
            <div className={classes.rewardsCheckbox}>
              <input type="checkbox" id="test2" />
              <label for="test2"> </label>
              <p className={classes.checkboxLabel}>By creating an account, I consent that my personal information will be
              stored and processed in the Canada for the purposes of providing card
          services.</p>
            </div>
          </div>
          <div className={classes.submitButtonWrapper}>
            <input
              type="submit"
              value="Create account"
              className={classes.submitButton}
            />
          </div>
        </form>
        <SignInJoinNowFooter />
      </section>
    </div>
  </main>
);

export default joinNow;
