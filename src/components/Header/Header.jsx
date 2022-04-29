import React from 'react';
import {useSelector} from "react-redux";
import Currency from "../Currency/Currency";
import classes from './Header.module.css'

const Header = () => {
    const currencies = useSelector(state => state.currencies.currencies
        .filter(currency => currency.cc === 'USD' || currency.cc === 'EUR'))
    return (
        <header className={classes.container}>
            <p className={classes.p}>Money<span className={classes.span}>24</span></p>
            <div className={classes.div}>
                {currencies.map(currency => <Currency key={currency.r030} currency={currency}/>)}
            </div>
        </header>
    );
};

export default Header;