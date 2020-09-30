import React from 'react';
import './Order.css';
import {getDate} from '../utils/getDate';

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
		if (!this.props.order) {
			return null;
		}

		const {order: {shop, date}} = this.props;

		if (!shop || !date) {
			return null;
		}

		return (
			<div className='Order'>
				<div className='Order-header'>
					<span className='Order-shop'>{shop}</span>
					<span id='date'>{getDate(date)}</span>
				</div>

				<div className='Order-items'>
					{this.getItems()}
				</div>
			</div>
		)
	}
}
