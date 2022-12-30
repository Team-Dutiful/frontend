import { CalendarDate, CustomDate, Member } from "../members";

function divideIntoGroups<T>(date: T[], size = 1) {
	const groups = [];
	let i = 0;

	while (i < date.length) {
		groups.push(date.slice(i, i + size));
		i += size;
	}

	return groups;
}

// 달력 그리기
export const getDatesForMonth = (year: number, month: number) => {
	const prevMonthDate = new Date(year, month - 1, 0).getDate();
	const curMonthDate = new Date(year, month, 0).getDate();
	const curMonthFirstDay = new Date(`${year}-${month}-1`).getDay();
	const datesForMonth = [];

	for (let i = 0; i < curMonthFirstDay + curMonthDate; i++) {
		if (i < curMonthFirstDay) {
			datesForMonth.push(prevMonthDate - curMonthFirstDay + 1 + i);
		} else {
			datesForMonth.push(i - curMonthFirstDay + 1);
		}
	}

	return divideIntoGroups(datesForMonth, 7);
};

const getWorks = (datesForMonth: CustomDate[], calendarDates: CalendarDate[]) => {
	const worksForMonth = datesForMonth.map((date) => {
		const findDate = calendarDates.find((item) => {
			return `${item.year}-${item.month}-${item.day}` === `${date.year}-${date.month}-${date.day}`;
		});

		if (findDate === undefined) {
			return null;
		} else {
			return findDate.work;
		}
	});

	return divideIntoGroups(worksForMonth, 7);
};

export const getMembersWorksForMonth = (year: number, month: number, data: Member[]) => {
	const prevMonthDate = new Date(year, month - 1, 0).getDate();
	const curMonthDate = new Date(year, month, 0).getDate();
	const curMonthFirstDay = new Date(`${year}-${month}-1`).getDay();
	const datesForMonth: CustomDate[] = [];

	for (let i = 0; i < curMonthFirstDay + curMonthDate; i++) {
		if (i < curMonthFirstDay) {
			datesForMonth.push({
				year,
				month: month - 1,
				day: prevMonthDate - curMonthFirstDay + 1 + i,
			});
		} else {
			datesForMonth.push({
				year,
				month,
				day: i - curMonthFirstDay + 1,
			});
		}
	}

	const members = data.map((i) => {
		return {
			name: i.name,
			works: getWorks(datesForMonth, i.calendar_dates),
		};
	});

	return members;
};
