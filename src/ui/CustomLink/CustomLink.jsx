import React from 'react';
import {Link, useMatch} from "react-router-dom";
import styles from './customLink.module.css'

const CustomLink = ({children,to, src,...props}) => {
    const match = useMatch({
        path: to,
        end: to.length === 1
    })
    const classes = [styles.link]
    if(match) classes.push(styles.active)
    return (
            <Link to={to} {...props} className={classes.join(' ')}>
                {children}
            </Link>

    );
};

export default CustomLink;