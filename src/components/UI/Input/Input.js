import React from 'react';
import classes from './Input.css';

const input = ( props ) => {
    let inputElement = null;

    let InputClass = classes.Input;
    let inputClasses = [classes.InputElement];
    let labelClass = classes.Label;

    if( props.class ){
        InputClass = classes.ClearFlex;
        inputClasses = [classes.ClearWidth];
        labelClass = classes.ClearMargrin;
    }

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                checked={props.check}
                onChange={props.changed} />;
            break;
        case ( 'textarea' ):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'select' ):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    let elementOutput = 
            <div className={InputClass}>
                {inputElement}
                <label className={labelClass}>{props.label}</label>
            </div>

    if(props.elementConfig.type === 'range'){
        elementOutput =
            <div className={InputClass}>
                <label className={labelClass}>{props.label}</label>
                {inputElement}
            </div>
    }

    return ( elementOutput );

};

export default input;