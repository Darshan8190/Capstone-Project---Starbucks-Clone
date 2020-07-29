import React, { Component } from "react";
import classes from "./JoinNow.module.css";
import SignInJoinNowFooter from "../SignInJoinNowFooter/SignInJoinNowFooter";
import axios from "axios";

class JoinNow extends Component {
  state = {
    firstname: "",
    lastname: "",
    emailid: "",
    password: "",
    hasConfirmedtoPromotion: false,
    hasAgreedtoTermsOfUse: false,
    focus: false,
  };

  handleChange = (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;


          this.setState({
            ...this.state,
            [event.target.name]: value,
          });
       

  };

  handleSubmit(event) {
    const userRegistrationInfo = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      emailid: this.state.emailid,
      password: this.state.password,
      hasConfirmedtoPromotion: this.state.hasConfirmedtoPromotion,
      hasAgreedtoTermsOfUse: this.state.hasAgreedtoTermsOfUse,
    };

    axios
      .post(
        "https://starbucks-clone-capstone.firebaseio.com/User_Registration_Info.json",
        userRegistrationInfo
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    event.preventDefault();
  }

  handleInputFocusIn = () => {
    this.setState({
      focus: true,
    });
  };

  handleInputFocusOut = () => {
    this.setState({
      focus: false,
    });
  };

  render() {
    // let display = null;
    // if (this.state.focus) {
    //   display = (
    //     <div className={classes.expander}>
    //       <div>
    //         <span className={classes.validationHint}>
    //           <div className={classes.validationMessageWrapper}>
    //             <span>x</span>
    //             <span className={classes.validationMessage}>
    //               Please enter your email address.
    //             </span>
    //           </div>
    //           <p className={classes.yourUsernameMessage}>
    //             This will be your username
    //           </p>
    //         </span>
    //       </div>
    //     </div>
    //   );
    // }
  
    return (
      <main className={classes.wrapper}>
        <div className={classes.createUserWrapper}>
          <section className={classes.labelwrapper}>
            <p className={classes.createAnAccountLabel}>Create an account</p>
          </section>

          <section className={classes.joinNowForm}>
            <form method="post" onSubmit={(event) => this.handleSubmit(event)}>
              <fieldset>
                <h2 className={classes.personalInfoSpan}>
                  Personal Information
                </h2>
                <div className={classes.boxName}>
                  <input
                    type="text"
                    name="firstname"
                    required
                    autoComplete="off"
                    value={this.state.firstname}
                    onChange={(event) => this.handleChange(event)}
                  />
                  <label htmlFor="name" className={classes.labelName}>
                    <span className={classes.contentName}>First name</span>
                  </label>
                </div>

                <div className={classes.boxName}>
                  <input
                    type="text"
                    name="lastname"
                    required
                    autoComplete="off"
                    value={this.state.lastname}
                    onChange={(event) => this.handleChange(event)}
                  />
                  <label htmlFor="name" className={classes.labelName}>
                    <span className={classes.contentName}>Last name</span>
                  </label>
                </div>
              </fieldset>

              <fieldset>
                <h2 className={classes.accountSecuritySpan}>
                  Account Security
                </h2>
                
                <div className={classes.boxEmail}>
                  <input
                    type="text"
                    name="emailid"
                    required
                    autoComplete="off"
                    value={this.state.emailid}
                    onChange={(event) => this.handleChange(event)}
                    onFocus={this.handleInputFocusIn}
                    // onBlur={this.handleInputFocusOut}
                  />
                  <label htmlFor="email" className={classes.labelEmail}>
                    <span className={classes.contentEmail}>Email address</span>
                  </label>
                </div>
                {this.state.focus ? (
                  <p className={classes.Show}>This will be your username</p>
                ) : null}
       
                {/* {display} */}

                <div className={classes.boxEmail}>
                  <input
                    type="password"
                    name="password"
                    required
                    autoComplete="off"
                    value={this.state.password}
                    onChange={(event) => this.handleChange(event)}
                  />
                  <label htmlFor="email" className={classes.labelEmail}>
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
                  <input
                    type="checkbox"
                    id="test1"
                    required
                    name="hasConfirmedtoPromotion"
                    checked={this.state.hasConfirmedtoPromotion}
                    onChange={(event) => this.handleChange(event)}
                  />

                  <label htmlFor="test1"></label>
                  <p className={classes.checkboxLabel}>
                    {/* {" "} */}
                    Yes, I'd like to receive news, promotions, information and
                    offers from Coffee-Culture.
                  </p>
                  {/* <label for="test1">   Know about product offers, announcements and initiatives</label> */}
                </div>

                <p className={classes.unsubscribeLabel}>
                  You can unsubscribe at any time. Please read out Privacy
                  Statement or Contact Us.
                </p>
              </div>

              <div className={classes.rewards_and_terms_WrapperDiv}>
                <p className={classes.termsOfUseTitle}>TERMS OF USE</p>
                <div className={classes.rewardsCheckbox}>
                  <input
                    type="checkbox"
                    id="test2"
                    name="hasAgreedtoTermsOfUse"
                    checked={this.state.hasAgreedtoTermsOfUse}
                    onChange={(event) => this.handleChange(event)}
                  />
                  <label htmlFor="test2"> </label>
                  <p className={classes.checkboxLabel}>
                    By creating an account, I consent that my personal
                    information will be stored and processed in the Canada for
                    the purposes of providing card services.
                  </p>
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
  }
}

export default JoinNow;
