import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import Header from "./components/Header/Header";
import {fetchinCurrencies} from "./asyncActions/fetchingCurrencies";
import Converter from "./components/Converter/Converter";

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchinCurrencies())
    }, [])
    return (
        <>
            <Header/>
            <main>
                <Converter/>
            </main>
            <footer>2022</footer>
        </>
    )
};

export default App;