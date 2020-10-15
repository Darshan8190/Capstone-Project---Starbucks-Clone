import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'

import classes from './SignIn.module.css'
import SignInJoinNowFooter from '../../Components/SignInJoinNowFooter/SignInJoinNowFooter'
import Input from '../../Components/UI/Input/Input'
import * as actions from '../../store/actions/index'


class SignIn extends Component {

    state = {
        loginForm: {
            username: {
                elementType: 'input',
                elementConfig: {
                    type: 'email'
                },
                value: '',
                placeholder: 'Username or E-mail Address',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                },
                value: '',
                placeholder: 'Password',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
            keepLogedin: {
                elementType: 'input',
                elementConfig: {
                    type: 'checkbox',
                    id: 'keeplogin'
                },
                value: false,
                placeholder: 'Keep me signed in.',
                validation: {},
                valid: false,
                touched: false
            }
        },
        loginFormIsValid: false
    }

    loginFormHandler = (event) => {
        event.preventDefault();

        const loginInfo = {}
        for (let formElement in this.state.loginForm) {
            loginInfo[formElement] = this.state.loginForm[formElement].value
        }

        this.props.onLoginAuth(loginInfo.username, loginInfo.password, loginInfo.keepLogedin)
        // if (this.state.loginFormIsValid) {
        //     axios.post("https://starbucks-clone-capstone.firebaseio.com/Login-Info.json", loginInfo)
        //         .then(response => this.props.history.push('/menu'))
        //         .catch(error => console.log(error));
        // }
        // else {
        //     alert("form is invalid")
        // }
    }

    checkValiity(value, rules) {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        return isValid;
    }

    inputChangedhandler = (event, inputIdentifier) => {
        const updatedLoginForm = { ...this.state.loginForm }
        const updatedFormElement = { ...updatedLoginForm[inputIdentifier] }

        updatedFormElement.value = event.target.type === "checkbox" ? event.target.checked : event.target.value;

        updatedFormElement.valid = this.checkValiity(updatedFormElement.value, updatedFormElement.validation)
        updatedFormElement.touched = true
        updatedLoginForm[inputIdentifier] = updatedFormElement;

        let loginFormIsValid = true;
        for (let inputIdentifier in updatedLoginForm) {
            loginFormIsValid = updatedLoginForm[inputIdentifier].valid && loginFormIsValid
        }

        this.setState({
            loginForm: updatedLoginForm,
            loginFormIsValid: loginFormIsValid
        })
    }

    render() {
        let loginFormArray = [];
        for (let key in this.state.loginForm) {
            loginFormArray.push({
                id: key,
                config: this.state.loginForm[key]
            })
        }

        let form = (
            loginFormArray.map(formElement => (
                <Input
                    key={formElement.id}
                    elementType={formElement.config.elementConfig.type}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    placeholder={formElement.config.placeholder}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    changed={(event) => this.inputChangedhandler(event, formElement.id)}
                />
            ))
        )

        let signInPage = !this.props.hasToken ? (
            <main className={classes.signinUserWrapper}>
                <section className={classes.labelwrapper}>
                    <div className={classes.headingWrapper}>
                        <h1 className={classes.createAnAccountLabel}>Sign in or create an account</h1>
                    </div>
                </section>
                <section className={classes.signInFormWrapper}>
                    <form onSubmit={this.loginFormHandler}>
                        {form}
                        <div className={classes.userHelpingLinks}>
                            <Link to="/" className={classes.forgotUsernamePassword}>Forgot your username?</Link>
                            <Link to="/" className={classes.forgotUsernamePassword}>Forgot your password?</Link>
                        </div>
                        <button type="submit" className={classes.signinButton}>Sign In</button>
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
            </main>
        ) : <Redirect to="/menu" />

        return (
            signInPage
        );
    }
};

const mapStateToProps = state => {
    return {
        hasToken: state.signin.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoginAuth: (email, password, keepLogin) => dispatch(actions.loginAuth(email, password, keepLogin))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);