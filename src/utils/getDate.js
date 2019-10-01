const weeks = {
	0: 'пн',
	1: 'вт',
	2: 'ср',
	3: 'чт',
	4: 'пт',
	5: 'сб',
	6: 'вс',
};

const months = {
	0: 'января',
	1: 'февраля',
	2: 'марта',
	3: 'апреля',
	4: 'мая',
	5: 'июня',
	6: 'июля',
	7: 'августа',
	8: 'сентября',
	9: 'октября',
	10: 'ноября',
	11: 'декабря',
};

export function getDate(timestamp) {
	const date = new Date(timestamp);

	const day = date.getDate();
	const week = date.getDay();
	const month = date.getMonth();
	const year = date.getFullYear();

	return `${day} ${months[month]}, ${weeks[week]}, ${year} год`;
}
