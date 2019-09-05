import React from 'react';
import {getUrl} from '../utils/getUrl';

export default class Header extends React.PureComponent {
	render() {
		return (
			<>
				<p>Добро пожаловать на семинар по Unit-тестам</p>
				<a
					href={getUrl()}
					target={'_blank'}
				>
					Отметиться на занятии
				</a>
			</>
		)
	}
}
