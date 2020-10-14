import React, { Component } from 'react';
import axios from 'axios'

import classes from './ViewOrders.module.css'
import Spinner from '../UI/Spinner/Spinner'

class ViewOrders extends Component {

    state = {
        orderFetched: false,
        orders: [],
        counter: 1
    }


    componentDidMount() {

        // fetching orders from firebase
        axios.get("https://starbucks-clone-capstone.firebaseio.com/orders.json")
            .then(res => {
                for (let key in res.data) {
                    this.state.orders.push({
                        id: key,
                        ...res.data[key],
                        counter: this.state.counter++
                    },
                    )
                }
                this.setState({ orderFetched: !this.state.orderFetched })
                console.log(this.state.orders);
            })
            .catch(err => console.log(err))
    }


    render() {
        let orders = null
        if (this.state.orderFetched) {
            orders = (this.state.orders === undefined || this.state.orders.length == 0) ? <p>No orders</p> : (
                this.state.orders.map(order => {
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

        }
        else {
            orders = <Spinner />
        }
        return (
            <div className={classes.boxWrapper}>
                {orders}
            </div>
        )
    }
}

export default ViewOrders