import React, { useContext } from 'react';

import AppContext from '@context/AppContext';
import close_icon from '@icons/icon_close.png';
import Image from 'next/image';

import styles from '@styles/OrderItem.module.scss';

const OrderItem = (props) => {
	const { product, indexValue } = props;
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = (index) => {
		removeFromCart(index);
	};
//loader={() => product?.images[0]}
	return (
		<div className={styles.OrderItem}>
			<figure>
				<Image 
					src={product.images[0]} alt={product.title} 
					width={100}
					height={100}
				/>
			</figure>
			<p>{product?.title}</p>
			<p>${product?.price}</p>
			<Image src={close_icon} alt="close" onClick={() => handleRemove(indexValue)}
				
			/>
		</div>
	);
};

export default OrderItem;