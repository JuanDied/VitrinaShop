import React, { useState, useLayoutEffect, useContext} from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Menu from '@components/Menu';
import AppContext from '@context/AppContext';
import MyOrder from '@containers/MyOrder';
import menu_icon from '@icons/icon_menu.svg'; 
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';

import styles from '@styles/Header.module.scss';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const { state:{cart} } = useContext(AppContext);

    const handleToggle = () => {
        setToggle(!toggle);
    };
    useLayoutEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth <= 730) {
                setToggle(false);
            }
        });
    });


    return (
        <>
        <nav className={styles.Nav}>
            <Image src={menu_icon} alt="menu" className={styles['menu-icon']}/>

            <div className={styles['navbar-left']}>
                <ul>
                <Link href="/" passHref>
                    <Image src={logo} alt="logo" className={styles['nav-logo']}/>
                </Link>
                </ul>              
                <ul>
                    <li>
                        <Link href="/">All</Link>
                    </li>
                    <li>
                        <Link href="/">Electronics</Link>
                    </li>
                    <li>
                        <Link href="/">Fornitures</Link>
                    </li>
                    <li>
                        <Link href="/">Clothes</Link>
                    </li>
                    <li>
                        <Link href="/">Others</Link>
                    </li>
                </ul>

            </div>
            <div className={styles['navbar-right']}>
                <ul>
                    <li className={styles['navbar-email']}
                        onClick={handleToggle}
                        
                        role="presentation"
                    >
                        juan@example.com
                    </li>
                    <li 
                        className={styles['navbar-shopping-cart']}
                        onClick={()=>setToggleOrders(!toggleOrders)}
                        
                        role="presentation"
                    >
                        <Image src={shoppingCart} alt="shopping cart"/>
                        {cart.length > 0 ? <div>{cart.length} </div>: null }
                    </li>
                </ul>
            </div>
            {toggle &&  <Menu/>} 
            {toggleOrders && <MyOrder/>}
            
    </nav>
    </>
    );
};

export default Header;