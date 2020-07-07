import React, { Component } from 'react';
import classes from './SignInJoinNowFooter.module.css'

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
                            <a href="/account/create" className={[classes.commonButtonLinkProps, classes.findAStoreLink].join(' ')}>Find a store</a>
                        </div>
                        <div className={[classes.divWrapper, classes.languageDiv].join(' ')}>
                            <span className={[classes.commonTextPropsFooter, classes.languageEnglish].join(' ')}>English</span>
                            <a href="/account/create" className={[classes.commonTextPropsFooter, classes.link].join(' ')}>Francais</a>
                        </div>
                        <div className={[classes.divWrapper, classes.policyDiv].join(' ')}>
                            <a href="/account/create" className={[classes.commonTextPropsFooter, classes.link].join(' ')}>Responsibility</a>
                            <a href="/account/create" className={[classes.commonTextPropsFooter, classes.link].join(' ')}>Web Accessibility</a>
                            <a href="/account/create" className={[classes.commonTextPropsFooter, classes.link].join(' ')}>Privacy Policy</a>
                            <a href="/account/create" className={[classes.commonTextPropsFooter, classes.link].join(' ')}>Terms of Use</a>
                        </div>
                    </div>
                    <div className={[classes.commonTextPropsFooter, classes.copyrightDiv].join(' ')}>&copy;&nbsp;{this.getCurrentYear()}&nbsp;Starbucks</div>
                </div>
            </footer>
        )
    }
}


export default SignInJoinNowFooter;