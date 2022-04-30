import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {Routes, Route} from "react-router";
import {fetchinCurrencies} from "./asyncActions/fetchingCurrencies";
import Layout from "./pages/Layout";
import Converter from "./components/Converter/Converter";
import CurrenciesList from "./components/CurrenciesList/CurrenciesList";


const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchinCurrencies())
    }, [])
    return (
        <>
            <Routes>
                <Route path = '/' element={<Layout/>}>
                    <Route index element={<Converter/>}/>
                    <Route path = 'list' element={<CurrenciesList/>}/>
                </Route>
            </Routes>
        </>
    )
};

export default App;