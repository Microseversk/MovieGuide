const monthsMap = {
	1: 'января',
	2: 'февраля',
	3: 'марта',
	4: 'апреля',
	5: 'мая',
	6: 'июня',
	7: 'июля',
	8: 'августа',
	9: 'сентября',
	10: 'октября',
	11: 'ноября',
	12: 'декабря',
}

const formatDate = (stringDate: string): string => {
	const date = new Date(stringDate)

	return `${date.getDate()} ${monthsMap[1]} ${date.getFullYear()}`
}

export default formatDate
