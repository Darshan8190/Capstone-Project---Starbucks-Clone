import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'

import classes from './FetchOrders.module.css'
import Spinner from '../UI/Spinner/Spinner'
import * as actions from '../../store/actions/index'

class ViewOrders extends Component {

    state = {
        counter: 1
    }

    componentDidMount() {
        this.props.fetchOrders(this.props.token)
    }

    render() {
        let ordersArray = []
        for (let key in this.props.orders) {
            ordersArray.push({
                ...this.props.orders[key],
                id: key,
                counter: this.state.counter++
            },
            )
        }
        let orders = null

        if (this.props.showSpinner) {
            orders = <Spinner />
        }
        else {
            orders = !this.props.token ? <p>Please login to see orders !</p> : (
                ordersArray.length === 0 ? <p>No orders !!</p> : (
                    ordersArray.map(order => {
                        return (
                            <div className={classes.div} key={order.id}>
                                <p className={classes.itemCounter}>{order.counter} &#41;</p>
                                <div>
                                    <p>Item Name : <span className={classes.textBold}>{order.itemName}</span></p>
                                    <p>Id : <span className={classes.textBold}>{order.id}</span></p>
                                </div>
                            </div>
                        )
                    })
                )
            )


        }
        return (
            <div className={classes.boxWrapper}>
                {orders}
            </div>
        )
    }
}

const mapStateTopProps = state => {
    return {
        token: state.signin.token,
        orders: state.fetchorders.orders,
        showSpinner: state.fetchorders.spinner
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchOrders: (token) => dispatch(actions.initOrders(token))
    }
}

export default connect(mapStateTopProps, mapDispatchToProps)(ViewOrders)