import React from 'react'
import {getUrl} from './getUrl';

it('getUrl function test', () => {
	const url = getUrl();

	expect(url).toEqual('https://park.mail.ru')
});
