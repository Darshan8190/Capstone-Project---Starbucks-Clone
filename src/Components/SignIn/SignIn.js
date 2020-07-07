import React, { Component } from 'react';
import classes from './SignIn.module.css'

import SignInJoinNowFooter from '../SignInJoinNowFooter/SignInJoinNowFooter'

class SignIn extends Component {


    render() {
        return (
            <main>
                <div className={classes.signinUserWrapper}>

                    <section className={classes.labelwrapper}>
                        <h1 className={classes.createAnAccountLabel}>Sign in or create an account</h1>
                    </section>

                    <section className={classes.signInFormWrapper}>
                        <form>
                            <div className={classes.boxUserName}>
                                <input type="text" name="uaername" required autocomplete="off" />
                                <label for="username" className={classes.labelUserName}>
                                    <span className={classes.contentName}>Username or email address</span>
                                </label>
                            </div>
                            <div className={classes.boxPassword}>
                                <input type="password" name="password" required autocomplete="off" />
                                <label for="password" className={classes.labelPassword}>
                                    <span className={classes.contentPassword}>Password</span>
                                </label>
                            </div>
                            <p className={classes.handleCheckbox}>
                                <input type="checkbox" id="test1" />
                                <label for="test1"></label>
                                <p className={classes.checkboxSubscribeLabel}>Keep me signed in.</p>
                                <a href="/" className={classes.checkboxDetailsLink}>Details</a>
                            </p>
                            <div className={classes.userHelpingLinks}>
                                <a href="/" className={classes.forgotUsernamePassword}>Forgot your username?</a>
                                <a href="/" className={classes.forgotUsernamePassword}>Forgot your password?</a>
                            </div>
                            <input
                                type="submit"
                                value="Sign in"
                                className={classes.signinButton}
                            />
                        </form>

                        <h2 className={classes.joinRewardsLabel}>Join Starbucks Rewards</h2>

                        <section className={classes.joinNowSectionWrapper}>
                            <div className={classes.joinNowDiv}>
                                <a href="/account/create" className={[classes.commonButtonLinkProps, classes.joinNowLink].join(' ')}>Join now</a>
                                <h3 className={classes.joinNowh3Tag}>Create an account and bring on the Rewards!</h3>
                                <p className={classes.joinNowParagraph}>Join Starbucks Rewards to earn free food and drinks, get free refills, pay and order with your phone, and more.</p>
                            </div>
                        </section>


                        <SignInJoinNowFooter />
                    </section>
                </div>
            </main>
        );
    }



};

export default SignIn;