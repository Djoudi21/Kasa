import React from 'react';
import Header from "./header/Header";
import Footer from "./footer/Footer";
import styles from '../css/_Layout.module.css';

export default function Layout ({children}) {
    return(
        <div className={styles.layout}>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}
