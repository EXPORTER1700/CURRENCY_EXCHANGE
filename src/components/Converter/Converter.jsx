import React, {useState} from 'react';
import {useSelector} from "react-redux";
import CurrenciesSelect from "../CurrenciesSelect/CurrenciesSelect";
import arrows from '../images/arrow.png'
import classes from './Converter.module.css'

const Converter = () => {
    const currencies = useSelector(state => state.currencies.currencies)
    const [fromCurrency, setFromCurrency] = useState({
        name: 'USD',
        count: 0
    })
    const [toCurrency, setToCurrency] = useState({
        name: 'EUR',
        count: 0
    })
    const converter = (from, to, count) => {
        const [fromCurrency] = currencies.filter(currency => currency.cc === from)
        const [toCurrency] = currencies.filter(currency => currency.cc === to)
        return +((fromCurrency.rate * count) / toCurrency.rate).toFixed(2)
    }
    const onChangeFromSelect = (name) => {
        setFromCurrency(prevState => ({...prevState, name}))
        setToCurrency(prevState => ({
            name: prevState.name,
            count: converter(name, toCurrency.name, fromCurrency.count)
        }))
    }
    const onChangeToSelect = (name) => {
        setToCurrency({name, count: converter(fromCurrency.name, name, fromCurrency.count)})
    }
    const onChangeFromInput = (event) => {
        if (event.target.value == Number(event.target.value)) {
            setFromCurrency(prevState => ({
                ...prevState, count: Number(event.target.value)
            }))
            setToCurrency(prevState => ({
                name: prevState.name,
                count: converter(fromCurrency.name, toCurrency.name, event.target.value)
            }))
        }
    }
    const onChangeToInput = (event) => {
        if (event.target.value == Number(event.target.value)) {
            setToCurrency(prevState => ({
                ...prevState, count: Number(event.target.value)
            }))
            setFromCurrency(prevState => ({
                name: prevState.name,
                count: converter(toCurrency.name, fromCurrency.name, event.target.value)
            }))
        }
    }
    const revers = () => {
        setFromCurrency({...toCurrency})
        setToCurrency({...fromCurrency})
    }
    return (
        <div className={classes.container}>
            <div className={classes.group}>
                <p className={classes.description}>Отдаете</p>
                <CurrenciesSelect toggle={onChangeFromSelect()} currencies={currencies}
                                  defaultValue={fromCurrency.name}/>
                <input
                    className={classes.input}
                    type={'text'}
                    value={fromCurrency.count}
                    onChange={onChangeFromInput}/>
            </div>
            <button className={classes.button} onClick={revers}>
                <img src={arrows} width={'100%'} height={'100%'} alt=""/>
            </button>
            <div className={classes.group}>
                <p className={classes.description}>Получаете</p>
                <CurrenciesSelect toggle={onChangeToSelect()} currencies={currencies} defaultValue={toCurrency.name}/>
                <input
                    type={'text'}
                    className={classes.input}
                    value={toCurrency.count}
                    onChange={onChangeToInput}/>
            </div>
        </div>
    );
};

export default Converter;