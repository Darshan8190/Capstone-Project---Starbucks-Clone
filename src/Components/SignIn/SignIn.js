import React, { Component } from 'react';
import classes from './SignIn.module.css'

import SignInJoinNowFooter from '../SignInJoinNowFooter/SignInJoinNowFooter'

class SignIn extends Component {

    state = {
        username: '',
        password: '',
    }

    handleUsername(event) {
        const value = event.target.value;
        this.setState({
            username: value
        })
    }
    
    handlePassword(event) {
        const value = event.target.value;
        this.setState({
            password: value
        })
    }
    
    handleSubmit(event) {
        event.preventDefault();
    }
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
                                <input type="text" name="uaername" required autoComplete="off" value={this.state.userName} onChange={(event) => this.handleUsername(event)} />
                                <label htmlFor="username" className={classes.labelUserName}>
                                    <span className={classes.contentName}>Username or email address</span>
                                </label>
                            </div>
                            <div className={classes.boxPassword}>
                                <input type="password" name="password" required autoComplete="off" value={this.state.password} onChange={(event) => this.handlePassword(event)} />
                                <label htmlFor="password" className={classes.labelPassword}>
                                    <span className={classes.contentPassword}>Password</span>
                                </label>
                            </div>
                            <p className={classes.handleCheckbox}>
                                <input type="checkbox" id="test1" />
                                <label htmlFor="test1"></label>
                                <span className={classes.checkboxSubscribeLabel}>Keep me signed in.</span>
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
                                onClick={(event) => this.handleSubmit(event)}
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