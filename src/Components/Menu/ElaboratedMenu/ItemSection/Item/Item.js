import React, { Component } from 'react';
import classes from './Item.module.css'
import { withRouter, Link } from 'react-router-dom'


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
                            pathname: this.state.pathname,
                            state: {
                                itemName: this.props.itemName,
                                parentLinkPath: this.props.match.url,
                                sectionType: this.props.sectionType
                            },
                        }} className={classes.itemLinkOverlay}>
                        </Link>
                    </div>
                </div>




            </div>
        )
    }
}
export default withRouter(Item);