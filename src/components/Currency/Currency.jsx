import React from 'react';
import classes from './Currency.module.css'

const Currency = ({currency}) => {
    return (
            <p className={classes.p}>{currency.cc} : {currency.rate.toFixed(2)}</p>
    );
};

export default Currency;