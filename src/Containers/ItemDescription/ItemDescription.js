import React, { Component } from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import classes from './ItemDescription.module.css'
import StoreMarker from '../../icons/findAStore.png';
import axios from 'axios'
import ProgressBar from '../../Components/UI/ProgressBar/ProgressBar'

class ItemDescription extends Component {
    state = {
        itemName: '',
        parentLinkPath: '',
        sectionType: '',
        showProgressbar: false,
        bgcolor: "#6a1b9a",
        completed: 60,
        submitted: false,
        orders: []
    };
    componentDidMount() {
        this.setState({
            itemName: this.props.location.state.itemName,
            parentLinkPath: this.props.location.state.parentLinkPath,
            sectionType: this.props.location.state.sectionType
        })


    }

    orderConfirm = (event) => {
        event.preventDefault();

        if (!this.state.showProgressbar) {
            this.setState({
                showProgressbar: true,
                submitted: true
            })
        }

        if (this.props.isAuthenticated) {

            const orderDetails = {
                itemName: this.state.itemName
            }

            axios.post("https://starbucks-clone-capstone.firebaseio.com/orders.json", orderDetails)
                .then(response => {
                    this.props.history.push('/menu')
                })
                .catch(error => console.log(error))

                alert("Order placed successfully!")
        }
        else {
            alert("Please Signin or Signup to place an order !")
            this.props.history.push('/account/signin')
        }

        // using php myadmin for storing a order

        // let formData = new FormData();
        // formData.append('item', this.state.itemName);

        // const url = "http://localhost:80/reactbackend/index.php";
        // axios.post(url, formData, {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // })
        //     .then(res => console.log(res.data))
        //     .catch(error => console.log(error));

    }
    render() {

        let progressbar = null;
        if (this.state.showProgressbar) {
            progressbar = <ProgressBar bgcolor={this.state.bgcolor} completed={this.state.completed} />
        }

        return (
            <main className={classes.main}>
                <div className={classes.pb}>
                    {/* {progressbar} */}
                </div>

                <div className={classes.productNameDivWRapper}>
                    <div className={classes.divContainer}>
                        <div className={classes.innerDivPositioning}>

                            <div className={classes.linkWrapper}>
                                <Link to="/menu" className={classes.linkFormattor}>Menu</Link>
                                <span className={classes.slashColor}>&nbsp;/&nbsp;</span>
                                <Link to={this.state.parentLinkPath} className={classes.linkFormattor}>{this.state.sectionType}</Link>
                                <span className={classes.slashColor}>&nbsp;/&nbsp;</span>
                                <span className={classes.textSemiBold}>{this.state.itemName}</span>
                            </div>
                            <h1 className={classes.itemName}>{this.state.itemName}</h1>
                            <div className={classes.itemDescription}>
                                <div className={classes.itemDesLineBrake}>
                                    A one-to-one combination of fresh-brewed coffee and steamed milk add up to one distinctly delicious coffee drink remarkably mixed.
                            </div>
                                <div className={classes.storeSelectionText}>
                                    <div className={classes.storeWrapper}>
                                        <img src={StoreMarker} alt="Store Marker" className={classes.locationMarker} />
                                        <span className={classes.storeText}>
                                            Select a store to view availability
                                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.productDescriptionDivWRapper}>
                    <div className={classes.productDescriptionDivContainer}>
                        <div className={classes.buttonWrapper}>
                            <div className={classes.buttonContainer}>
                                <span className={classes.buttonSpan}>
                                    <div className={classes.buttonVisible}>
                                        <button type="submit" className={classes.mainButton} onClick={(event) => this.orderConfirm(event)}>Add to Order</button>
                                    </div>
                                </span>
                            </div>
                        </div>
                        <div className={classes.contentWrapper}>
                            <div className={classes.image}>
                                <div className={[classes.block, classes.relative, classes.imageBlock, classes.mt1, classes.ml1].join(" ")}>
                                    <div className={[classes.block, classes.fullWidth].join(" ")}></div>
                                    <div className={classes.absoluteSpread}>
                                        <div className={[classes.relative, classes.fullHeight].join(" ")}>
                                            <div className={classes.imageBox}></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className={classes.content}>
                                <div>
                                    <div className={classes.py3}>
                                        <h2 className={[classes.heading, classes.headingMedium, classes.mb3].join(" ")}>Nutrition Information</h2>
                                        <p className={[classes.colorTextBlackSoft, classes.mb3].join(" ")}>Nutrition information is calculated based on our standard recipes. Only changing drink size will update this information. Other customizations will not.</p>
                                        <div>
                                            <p className={[classes.recipeNote, classes.pb1].join(" ")}>Serving Size 354 mL</p>
                                            <div className={[classes.calories, classes.spaceBetween, classes.flexRow, classes.yPadding].join(" ")}>
                                                <span>
                                                    <span className={[classes.textBold, classes.pr1].join(" ")}>Calories</span>
                                                    <span> 80 Cals</span>
                                                </span>
                                            </div>
                                            <div className={[classes.dailyValueContainer, classes.flexRow, classes.hasBorder].join(" ")}>
                                                <span>% Daily Value</span>
                                            </div>
                                            <div>
                                                <div className={[classes.hasBorder, classes.spaceBetween, classes.flexRow, classes.yPadding].join(" ")}>
                                                    <span>
                                                        <span className={[classes.textBold, classes.pr1].join(" ")}>Fat</span>
                                                        <span> 3 g</span>
                                                    </span>
                                                    <span>4%</span>
                                                </div>
                                                <div>
                                                    <div className={[classes.subContainer, classes.flexRow, classes.spaceBetween, classes.hasBorder].join(" ")}>
                                                        <span>
                                                            <span className={classes.pr1}>Saturated</span>
                                                            <span> 1.5 g</span>
                                                        </span>
                                                        <span>7%</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className={[classes.subContainer, classes.flexRow, classes.spaceBetween, classes.hasBorder].join(" ")}>
                                                        <span>
                                                            <span className={classes.pr1}>+ Trans</span>
                                                            <span> 0.1 g</span>
                                                        </span>
                                                        <span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className={[classes.flexRow, classes.spaceBetween, classes.hasBorder, classes.yPadding].join(" ")}>
                                                    <span>
                                                        <span className={[classes.textBold, classes.pr1].join(" ")}>Cholesterol</span>
                                                        <span> 15 mg</span>
                                                    </span>
                                                    <span>5%</span>
                                                </div>
                                            </div>
                                            <div>
                                                <div className={[classes.flexRow, classes.spaceBetween, classes.hasBorder, classes.yPadding].join(" ")}>
                                                    <span>
                                                        <span className={[classes.textBold, classes.pr1].join(" ")}>Sodium</span>
                                                        <span> 80 mg</span>
                                                    </span>
                                                    <span>3%</span>
                                                </div>
                                            </div>
                                            <div>
                                                <div className={[classes.flexRow, classes.spaceBetween, classes.hasBorder, classes.yPadding].join(" ")}>
                                                    <span>
                                                        <span className={[classes.textBold, classes.pr1].join(" ")}>Carbohydrate</span>
                                                        <span> 8 g</span>
                                                    </span>
                                                    <span>3%</span>
                                                </div>
                                                <div>
                                                    <div className={[classes.subContainer, classes.hasBorder, classes.flexRow, classes.spaceBetween].join(" ")}>
                                                        <span>
                                                            <span className={classes.pr1}>Fibre</span>
                                                            <span> 0 g</span>
                                                        </span>
                                                        <span></span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className={[classes.subContainer, classes.hasBorder, classes.flexRow, classes.spaceBetween].join(" ")}>
                                                        <span>
                                                            <span className={classes.pr1}>Sugars</span>
                                                            <span> 8 g</span>
                                                        </span>
                                                        <span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className={[classes.flexRow, classes.spaceBetween, classes.hasBorder, classes.yPadding].join(" ")}>
                                                    <span>
                                                        <span className={[classes.textBold, classes.pr1].join(" ")}>Protein</span>
                                                        <span> 5 g</span>
                                                    </span>
                                                    <span>10%</span>
                                                </div>
                                            </div>
                                            <div>
                                                <div className={[classes.flexRow, classes.spaceBetween, classes.hasBorder, classes.yPadding].join(" ")}>
                                                    <span>
                                                        <span className={[classes.textBold, classes.pr1].join(" ")}>Caffeine</span>
                                                        <span> 115 mg</span>
                                                    </span>
                                                    <span></span>
                                                </div>
                                            </div>
                                            <p className={[classes.colorTextBlackSoft, classes.mt4].join(" ")}>
                                                Adults and youth (ages 13 and older) need an average of 2,000 calories a day, and children (ages 4 to 12) need an average of 1,500 calories a day. However, individual needs vary.
                                    </p>
                                        </div>
                                    </div>
                                    <div className={classes.py3}>
                                        <h2 className={[classes.heading, classes.headingMedium, classes.mb3].join(" ")}>Ingredients</h2>
                                        <p className={classes.my1}>Not available for this item</p>
                                    </div>
                                    <div className={classes.py3}>
                                        <h2 className={[classes.heading, classes.headingMedium, classes.mb3].join(" ")}>Allergens</h2>
                                        <p className={classes.my1}>Not available for this item</p>
                                        <div className={[classes.colorTextBlackSoft, classes.py3, classes.mt1].join(" ")}>
                                            We cannot guarantee that any unpackaged products served in our stores are allergen-free because we use shared equipment to store, prepare, and serve them. Customers with allergies can find ingredient information for products on the labels of our packaged products or by calling Starbucks Customer Contact Center at 800-STARBUC (800-782-7282).
                                </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.signin.token != null || state.signup.token != null
    }
}



export default connect(mapStateToProps)(withRouter(ItemDescription));

