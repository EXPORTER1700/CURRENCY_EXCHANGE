import React from 'react';
import classes from './CurrenciesItem.module.css'

const CurrenciesItem = ({currency}) => {
    return (
        <li className={classes.container}>
            <p className={classes.txt}>{currency.txt}</p>
            <p className={classes.cc}>{currency.cc}</p>
            <p className={classes.rate}>{currency.rate}</p>
        </li>
    );
};

export default CurrenciesItem;