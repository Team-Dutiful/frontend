export const getYear = (fullDate: string) => {
	const year = fullDate.slice(0, 4);
	return year;
};

export const getMonth = (fullDate: string) => {
	const month = ("0" + fullDate.slice(5, 7)).slice(-2);
	return month;
};

export const getDay = (fullDate: string) => {
	const day = ("0" + fullDate.slice(-2)).slice(-2);
	return day;
};

export const getTomorrow = (fullDate: string) => {
	const tomorrow = ("0" + (Number(fullDate.slice(-2)) + 1)).slice(-2);
	return tomorrow;
};
