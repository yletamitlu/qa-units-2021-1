import React from 'react'
import {sortByItemCount} from './sortOrders';

it('sortByItemCount: orders not object', () => {
	const result = sortByItemCount('order1', 'order2');
	expect(result).toEqual(0);
});

it('sortByItemCount: orders null', () => {
	const result = sortByItemCount(null, null);
	expect(result).toEqual(0);
});
