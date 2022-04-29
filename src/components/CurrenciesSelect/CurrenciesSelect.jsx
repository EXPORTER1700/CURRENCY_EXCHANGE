import React from 'react';
import classes from './CurrenciesSelect.module.css'

const CurrenciesSelect = ({currencies, defaultValue, toggle}) => {
    return (
        <select className={classes.select} onChange={event => toggle(event.target.value)}>
            {currencies.sort((a,b) => a.cc.localeCompare(b.cc)).map(currency => <option key={currency.r030} value={currency.cc}
                                                selected={currency.cc === defaultValue}>{currency.cc}</option>)}
        </select>
    );
};

export default CurrenciesSelect;