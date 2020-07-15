import React, { Component } from 'react';
import classes from './Menu.module.css';
import ElaboratedMenu from './ElaboratedMenu/ElaboratedMenu'

class Menu extends Component {
    render() {
        return (
            <div className={classes.Container}>
                <ElaboratedMenu menu={this.props.menu} />
            </div>
        )
    }
}
export default Menu;