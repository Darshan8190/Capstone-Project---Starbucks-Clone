import React, { Component } from 'react';
import classes from './Item.module.css'
import { withRouter, Link, Route, Switch, Router } from 'react-router-dom'
import ItemDescription from './ItemDescription/ItemDescription'


class Item extends Component {
    state = {
        pathname: null
    }

    componentDidMount() {
        this.setState({
            pathname: this.props.match.url + `/${this.props.sectionName.toLowerCase().replace(/\s+/g, '-')}/${this.props.itemName.toLowerCase().replace(/\s+/g, '-')}`
        })
    }


    render() {
        return (
            <div>

                <div className={classes.itemBox}>
                    <div className={classes.itemFlexContainer}>
                        <div className={classes.imageBox}></div>
                        <h3 className={classes.itemHeading}>{this.props.itemName}</h3>
                        <Link to={{
                            pathname: this.state.pathname
                        }} className={classes.itemLinkOverlay}>
                        </Link>
                    </div>
                </div>




            </div>
        )
    }
}
export default withRouter(Item);