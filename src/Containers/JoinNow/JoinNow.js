import React, { Component } from "react";
import classes from "./JoinNow.module.css";
import SignInJoinNowFooter from "../../Components/SignInJoinNowFooter/SignInJoinNowFooter";
import axios from "axios";
import Input from '../../Components/UI/Input/Input'

class JoinNow extends Component {
  state = {
    personalInfo: {
      firstname: {
        elementType: 'input',
        elementConfig: {
          type: 'text'
        },
        value: '',
        placeholder: 'First name',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      lastname: {
        elementType: 'input',
        elementConfig: {
          type: 'text'
        },
        value: '',
        placeholder: 'Last name',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
    },
    accountSecurity: {
      emailAddress: {
        elementType: 'input',
        elementConfig: {
          type: 'email'
        },
        value: '',
        placeholder: 'Email address (Your username)',
        validation: {
          required: true
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
          required: true
        },
        valid: false,
        touched: false
      },
    },
    promotionsCheckbox: {
      promotions: {
        elementType: 'input',
        elementConfig: {
          type: 'checkbox',
          id: 'promotions'
        },
        value: false,
        placeholder: "Yes, I'd like to receive news, promotions, information and offers from Starbucks.",
        validation: {
          required : false
        },
        valid: true,
        touched: false
      }
    },
    termsofuseCheckboxes: {
      rewardTerms: {
        elementType: 'input',
        elementConfig: {
          type: 'checkbox',
          id: 'rewardTerms'
        },
        value: false,
        placeholder: 'I agree to the Starbucks Rewards Terms and the Starbucks Card Terms.',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      consentPersonalInfo: {
        elementType: 'input',
        elementConfig: {
          type: 'checkbox',
          id: 'termsofuse'
        },
        value: false,
        placeholder: 'By creating an account, I consent that my personal information will be stored and processed in the Canada for the purposes of providing card services.',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
    },
    loginFormIsValid: false
  };


  loginFormHandler = (event) => {
    event.preventDefault();

    const userRegistrationInfo = []

    for (let formElement in this.state.personalInfo) {
      userRegistrationInfo.push({
        id: formElement,
        value: this.state.personalInfo[formElement].value,
        isValid: this.state.personalInfo[formElement].valid
      })
      // userRegistrationInfo[formElement] = this.state.personalInfo[formElement].value
    }

    for (let formElement in this.state.accountSecurity) {
      userRegistrationInfo.push({
        id: formElement,
        value: this.state.accountSecurity[formElement].value,
        isValid: this.state.accountSecurity[formElement].valid
      })
      // userRegistrationInfo[formElement] = this.state.accountSecurity[formElement].value
    }

    for (let formElement in this.state.promotionsCheckbox) {
      userRegistrationInfo.push({
        id: formElement,
        value: this.state.promotionsCheckbox[formElement].value,
        isValid: this.state.promotionsCheckbox[formElement].valid
      })
      // userRegistrationInfo[formElement] = this.state.promotionsCheckbox[formElement].value
    }

    for (let formElement in this.state.termsofuseCheckboxes) {
      userRegistrationInfo.push({
        id: formElement,
        value: this.state.termsofuseCheckboxes[formElement].value,
        isValid: this.state.termsofuseCheckboxes[formElement].valid
      })
      // userRegistrationInfo[formElement] = this.state.termsofuseCheckboxes[formElement].value
    }

    let loginFormIsValid = true;
    userRegistrationInfo.map(validator => {
      loginFormIsValid = validator.isValid && loginFormIsValid
    })

    if (loginFormIsValid) {
      axios.post("https://starbucks-clone-capstone.firebaseio.com/User_Registration_Info.json",
        userRegistrationInfo)
        .then(response => this.props.history.push('/menu'))
        .catch(error => console.log(error));
    }
    else {
      alert("form is invalid")
    }
  }

  checkValiity(elementType, value, rules) {
    let isValid = true;

    if (rules.required) {
      if (elementType === 'checkbox') {
        isValid = value && isValid
      }
      else {
        isValid = value.trim() !== '' && isValid
      }
    }
    return isValid;
  }

  inputChangedhandler = (event, inputIdentifier) => {
    let updatedLoginForm = ''
    switch (inputIdentifier) {
      case ('firstname'):
      case ('lastname'):
        updatedLoginForm = { ...this.state.personalInfo }
        break;

      case ('emailAddress'):
      case ('password'):
        updatedLoginForm = { ...this.state.accountSecurity }
        break;

      case ('promotions'):
        updatedLoginForm = { ...this.state.promotionsCheckbox }
        break;

      case ('rewardTerms'):
      case ('consentPersonalInfo'):
        updatedLoginForm = { ...this.state.termsofuseCheckboxes }
        break;

      default:
        updatedLoginForm = ''
        break;
    }
    const updatedFormElement = { ...updatedLoginForm[inputIdentifier] }

    updatedFormElement.value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    updatedFormElement.valid = this.checkValiity(updatedFormElement.elementConfig.type, updatedFormElement.value, updatedFormElement.validation)
    updatedFormElement.touched = true
    updatedLoginForm[inputIdentifier] = updatedFormElement;

    // let loginFormIsValid = true;
    // for (let inputIdentifier in updatedLoginForm) {
    //     loginFormIsValid = updatedLoginForm[inputIdentifier].valid && loginFormIsValid
    // }

    // let loginFormIsValid = true;
    // loginFormIsValid = updatedFormElement.valid ? true : false

    switch (inputIdentifier) {
      case ('firstname'):
      case ('lastname'):
        this.setState({
          personalInfo: updatedLoginForm,
          // loginFormIsValid: loginFormIsValid
        })
        break;
      case ('emailAddress'):
      case ('password'):
        this.setState({
          accountSecurity: updatedLoginForm,
          // loginFormIsValid: loginFormIsValid
        })
        break;
      case ('promotions'):
        this.setState({
          promotionsCheckbox: updatedLoginForm,
          // loginFormIsValid: loginFormIsValid
        })
        break;
      case ('rewardTerms'):
      case ('consentPersonalInfo'):
        this.setState({
          termsofuseCheckboxes: updatedLoginForm,
          // loginFormIsValid: loginFormIsValid
        })
        break;
      default:
        return true;
    }
  }

  render() {
    // personal info section
    let personalInforFormArray = [];
    for (let key in this.state.personalInfo) {
      personalInforFormArray.push({
        id: key,
        config: this.state.personalInfo[key]
      })
    }

    let personalInfoFieldset = (
      <fieldset>
        <h2 className={classes.personalInfoSpan}>Personal Information</h2>
        {personalInforFormArray.map(formElement => (
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
        ))}
      </fieldset>
    )

    // account security section
    let accountSecurityFormarray = [];
    for (let key in this.state.accountSecurity) {
      accountSecurityFormarray.push({
        id: key,
        config: this.state.accountSecurity[key]
      })
    }

    let accountSummaryFieldset = (
      <fieldset>
        <h2 className={classes.accountSecuritySpan}>Account Security</h2>
        {accountSecurityFormarray.map(formElement => (
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
        ))}
      </fieldset>
    )

    // promotions checkbox section
    let promotionsCheckboxArray = [];
    for (let key in this.state.promotionsCheckbox) {
      promotionsCheckboxArray.push({
        id: key,
        config: this.state.promotionsCheckbox[key]
      })
    }
    let promotionsSection = (
      <div className={classes.rewards_and_terms_WrapperDiv}>
        <span className={classes.rewardAndStarTitle}>
          COLLECT MORE STARS & EARN REWARDS
      </span>
        <p className={classes.subscriptionLabel}>
          Email is a great way to know about offers and what's new from
          Coffee-Culture.
      </p>
        {promotionsCheckboxArray.map(formElement => (
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
        ))}

        <p className={classes.unsubscribeLabel}>
          You can unsubscribe at any time. Please read out Privacy
          Statement or Contact Us.
      </p>
      </div>
    )

    // terms of use checkboxes
    let termsOfUseArray = [];
    for (let key in this.state.termsofuseCheckboxes) {
      termsOfUseArray.push({
        id: key,
        config: this.state.termsofuseCheckboxes[key]
      })
    }
    let termsofuseSection = (
      <div className={classes.rewards_and_terms_WrapperDiv}>
        <p className={classes.termsOfUseTitle}>TERMS OF USE</p>
        {termsOfUseArray.map(formElement => (
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
        ))}
      </div>

    )
    return (
      <main className={classes.wrapper}>
        <div className={classes.createUserWrapper}>
          <section className={classes.labelwrapper}>
            <div className={classes.headingWrapper}>
              <p className={classes.createAnAccountLabel}>Create an account</p>
            </div>
          </section>

          <section className={classes.joinNowForm}>
            <form onSubmit={this.loginFormHandler}>
              {personalInfoFieldset}
              {accountSummaryFieldset}
              {promotionsSection}
              {termsofuseSection}
              <div className={classes.submitButtonWrapper}>
                <button type="submit" className={classes.submitButton}>Create account</button>
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
