import React, { Component } from 'react';
import classes from './SignInJoinNowFooter.module.css'
import { Link } from 'react-router-dom'

class SignInJoinNowFooter extends Component {

    // get current year for copyright
    getCurrentYear() {
        let d = new Date();
        return d.getFullYear();
    }

    render() {
        return (
            <footer className={classes.footerWrapper}>
                <hr className={classes.hr} />
                <div className={classes.footerConatiner}>
                    <div className={classes.footerLinks}>
                        <div className={[classes.divWrapper].join(' ')}>
                            <Link to="/account/create" className={[classes.commonButtonLinkProps, classes.findAStoreLink].join(' ')}>Find a store</Link>
                        </div>
                        <div className={[classes.divWrapper, classes.languageDiv].join(' ')}>
                            <span className={[classes.commonTextPropsFooter, classes.languageEnglish].join(' ')}>English</span>
                            <Link to="/account/create" className={[classes.commonTextPropsFooter, classes.link].join(' ')}>Francais</Link>
                        </div>
                        <div className={[classes.divWrapper, classes.policyDiv].join(' ')}>
                            <Link to="/account/create" className={[classes.commonTextPropsFooter, classes.link].join(' ')}>Responsibility</Link>
                            <Link to="/account/create" className={[classes.commonTextPropsFooter, classes.link].join(' ')}>Web Accessibility</Link>
                            <Link to="/account/create" className={[classes.commonTextPropsFooter, classes.link].join(' ')}>Privacy Policy</Link>
                            <Link to="/account/create" className={[classes.commonTextPropsFooter, classes.link].join(' ')}>Terms of Use</Link>
                        </div>
                    </div>
                    <div className={[classes.commonTextPropsFooter, classes.copyrightDiv].join(' ')}>&copy;&nbsp;{this.getCurrentYear()}&nbsp;Starbucks</div>
                </div>
            </footer>
        )
    }
}


export default SignInJoinNowFooter;