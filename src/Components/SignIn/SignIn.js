import React, { Component } from 'react';
import classes from './SignIn.module.css'
import SignInJoinNowFooter from '../SignInJoinNowFooter/SignInJoinNowFooter'
import axios from 'axios'
import { Link } from 'react-router-dom'

class SignIn extends Component {

    state = {
        username: '',
        password: '',
        keepLogin : false
    }

    handleChange = (event) => {
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value
        this.setState({
            ...this.state,
            [event.target.name]: value
        })
    }

    handleSubmit(event) {
        const userCredentials = {
            username : this.state.username,
            password : this.state.password,
            keepLogin : this.state.keepLogin
        }

        axios.post("https://starbucks-clone-capstone.firebaseio.com/User_Credentials.json",userCredentials)
            .then(response => console.log(response))
            .catch(error => console.log(error))
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
                        <form method="post" onSubmit={(event) => this.handleSubmit(event)}>
                            <div className={classes.boxUserName}>
                                <input type="text" name="username" required autoComplete="off" value={this.state.username} onChange={(event) => this.handleChange(event)} />
                                <label htmlFor="username" className={classes.labelUserName}>
                                    <span className={classes.contentName}>Username or email address</span>
                                </label>
                            </div>
                            <div className={classes.boxPassword}>
                                <input type="password" name="password" required autoComplete="off" value={this.state.password} onChange={(event) => this.handleChange(event)} />
                                <label htmlFor="password" className={classes.labelPassword}>
                                    <span className={classes.contentPassword}>Password</span>
                                </label>
                            </div>
                            <p className={classes.handleCheckbox}>
                                <input type="checkbox" id="test1" name="keepLogin" checked={this.state.keepLogin} onChange={(event) => this.handleChange(event)} />
                                <label htmlFor="test1"></label>
                                <span className={classes.checkboxSubscribeLabel}>Keep me signed in.</span>
                                <Link to="/" className={classes.checkboxDetailsLink}>Details</Link>
                            </p>
                            <div className={classes.userHelpingLinks}>
                                <Link to="/" className={classes.forgotUsernamePassword}>Forgot your username?</Link>
                                <Link to="/" className={classes.forgotUsernamePassword}>Forgot your password?</Link>
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
                                <Link to="/account/create" className={[classes.commonButtonLinkProps, classes.joinNowLink].join(' ')}>Join now</Link>
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