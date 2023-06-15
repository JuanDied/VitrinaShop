import React,{ useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import arrow_icon from '@icons/flechita.svg';

import styles from '@styles/MyOrder.module.scss';


const MyOrder = () => {
	const {state} = useContext(AppContext);
	
	const sumTotal = () =>{
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	};

	return (
		<aside className={styles.MyOrder}>
			<div className={styles['title-container']}>
				<Image src={arrow_icon} alt="arrow" />
				<p className={styles.title}>My order</p>
			</div>
			<div className={styles['my-order-content']}>
				{state.cart.map((product, index) => (
					<OrderItem product={product} key={index} indexValue={index}/>
				))}
				
				<div className={styles.order}>
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<Link className={styles['primary-button']}
					href="/checkout"
				>
					Checkout
				</Link>
			</div>
		</aside>
	);
};

export default MyOrder;