import React, { Component } from 'react';
import classes from './ElaboratedMenu.module.css'
import ItemSection from './ItemSection/ItemSection'
import { Link } from 'react-router-dom'

class ElaboratedMenu extends Component {

    state = {
        hasTypeValue: false
    }

    componentDidMount() {
        if (this.props.type) {
            this.setState({
                hasTypeValue: true
            })
        }
    }

    render() {
        let sectionLink = '';
        let slash = null;
        let sectionHeadingLink = '';
        let sectionHeading = 'Menu';

        if (this.state.hasTypeValue) {
            sectionLink = `Menu`;
            slash = <span>&nbsp;&#47;&nbsp;</span>;
            sectionHeadingLink = this.props.type;
            sectionHeading = this.props.type;
        }

        let sectionsInventory = null;
        sectionsInventory = this.props.menu.map(section => {
            return <ItemSection key={Object.keys(section)[0]} sectionName={Object.keys(section)[0]} inventories={Object.values(section)[0]} sectionType={this.props.type}/>
        })

        return (
            <div className={classes.elaboratedMenuWrapper}>
                <div>
                    <Link to="/menu" className={classes.menuLink}>{sectionLink}</Link>
                    <span className={[classes.menuLink, classes.spanLink].join(" ")}>{slash}{sectionHeadingLink}</span>
                </div>
                <h1 className={classes.menuHeading}>{sectionHeading}</h1>
                {sectionsInventory}
            </div>
        )
    }
}

export default ElaboratedMenu;