import React from 'react';
import classes from './Input.module.css'
import { Link } from 'react-router-dom'

const input = (props) => {
    let inputElement = null;

    let lebelAnimation = []
    let placeholderAnimation = [classes.inputElementPlaceholder];

    if (props.value) {
        lebelAnimation.pop()
        lebelAnimation.push(classes.elementLabelAnimation)

        placeholderAnimation.push(classes.placeHolderAnimation)
    }

    if (props.invalid && props.shouldValidate && props.touched) {
        lebelAnimation.pop()
        lebelAnimation.push(classes.DANGERelementLabelAnimation)
    }

    switch (props.elementType) {
        case ('text'):
        case ('password'):
        case ('email'):
            inputElement = (
                <div className={classes.inputElementWrapper}>
                    <input className={classes.inputElement} {...props.elementConfig} value={props.value} onChange={props.changed} />
                    <label htmlFor="username" className={[classes.inputElementLabel, lebelAnimation.flat()].join(' ')}>
                        <span className={placeholderAnimation.join(' ')}>{props.placeholder}</span>
                    </label>
                </div>
            )
            break;
            
        case ('checkbox'):
            inputElement = (
                <div className={classes.handleCheckbox}>
                    <input {...props.elementConfig} id={props.elementConfig.id} name={props.elementConfig.id} defaultChecked={''} onChange={props.changed} />
                    <label htmlFor={props.elementConfig.id}></label>
                    <span className={classes.checkboxSubscribeLabel}>{props.placeholder}</span>
                    {/* <Link to="/" className={classes.checkboxDetailsLink}>Details</Link> */}
                </div>
            )
            break;
        default:
            inputElement = <input className={classes.inputElement} {...props.elementConfig} onChange={props.changed} />;
            break;
    }

    return (
        <div>
            {inputElement}
        </div>
    )
}

export default input;