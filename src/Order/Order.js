import React from 'react';
import './Order.css';

export default class Order extends React.PureComponent {
	getItems() {
		const {order: {items}} = this.props;

		if (!items || !items.length) {
			return null;
		}

		return items.map((item, index) => (
			<div
				key={index}
				className='Order-item'
			>
				{item}
			</div>
		))
	}

	render() {
		const {order: {shop, date}} = this.props;

		//напишем getDate как в letter.meta
		return (
			<div className='Order'>
				<div className='Order-header'>
					<span className='Order-shop'>{shop}</span>
					<span>{date}</span>
				</div>

				<div className='Order-items'>
					{this.getItems()}
				</div>
			</div>
		)
	}
}
