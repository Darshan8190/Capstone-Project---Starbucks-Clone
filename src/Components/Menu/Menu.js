import React from 'react';
import classes from './Menu.module.css';
import MenuNavigation from './MenuNavigation/MenuNavigation'
import ElaboratedMenu from './ElaboratedMenu/ElaboratedMenu'

const menu = (props) => (
    <div className={classes.Container}>
        <div className={classes.Wrapper}>
            <MenuNavigation />
            <ElaboratedMenu />
        </div>
    </div>
)

export default menu;