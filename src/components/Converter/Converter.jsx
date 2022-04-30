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
    const toggleFromCurrency = (name) => {
        setFromCurrency(prevState => ({...prevState, name}))
        setToCurrency(prevState => ({
            name: prevState.name,
            count: converter(name, toCurrency.name, fromCurrency.count)
        }))
    }
    const toggleToCurrency = (name) => {
        setToCurrency({name, count: converter(fromCurrency.name, name, fromCurrency.count)})
    }
    const revers = () => {
        setFromCurrency({...toCurrency})
        setToCurrency({...fromCurrency})
    }
    return (
        <div className={classes.container}>
            <div className={classes.group}>
                <p className={classes.description}>Отдаете</p>
                <CurrenciesSelect toggle={toggleFromCurrency} currencies={currencies} defaultValue={fromCurrency.name}/>
                <input
                    className={classes.input}
                    type={'text'}
                    value={fromCurrency.count}
                    onChange={event => {
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
                    }/>
            </div>
            <button className={classes.button} onClick={revers}>
                <img src={arrows} width={'100%'} height={'100%'} alt=""/>
            </button>
            <div className={classes.group}>
                <p className={classes.description}>Получаете</p>
                <CurrenciesSelect toggle={toggleToCurrency} currencies={currencies} defaultValue={toCurrency.name}/>
                <input
                    type={'text'}
                    className={classes.input}
                    value={toCurrency.count}
                    onChange={event => {
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
                    }/>
            </div>
        </div>
    );
};

export default Converter;