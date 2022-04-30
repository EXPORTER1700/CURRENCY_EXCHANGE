import React from 'react';
import Header from "../components/Header/Header";
import {Outlet} from "react-router";

const Layout = () => {
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <footer>2022</footer>
        </>
    );
};

export default Layout;