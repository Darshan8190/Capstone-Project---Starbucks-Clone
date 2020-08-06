import React from 'react';
import Logo from '../../icons/logo.png'
import classes from './Logo.module.css'
import { Link, Redirect } from 'react-router-dom'

const logo = (props) => (
    <div className={classes.logoWrapper}>
        <Link to="/">
            <img src={Logo} alt="Coffee Culture Company" className={classes.Logo} />
        </Link>
    </div>
);

export default logo;