import React from 'react';
import Logo from '../../icons/logo.png'
import classes from './Logo.module.css'

const logo = (props) => (
    <div className={classes.logoWrapper}>
        <a href="/">
            <img src={Logo} alt="Coffee Culture Company" className={classes.Logo} />
        </a>
    </div>
);

export default logo;