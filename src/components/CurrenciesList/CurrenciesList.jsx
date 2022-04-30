import React from 'react';
import {useSelector} from "react-redux";
import CurrenciesItem from "../CurrenciesItem/CurrenciesItem";
import classes from './CurrenciesList.module.css'

const CurrenciesList = () => {
    const currencies = useSelector(state => state.currencies.currencies)
    return (
        <ul className={classes.ul}>
            {currencies.map(currency => <CurrenciesItem key={currency.r030} currency={currency}/>)}
        </ul>
    );
};

export default CurrenciesList;