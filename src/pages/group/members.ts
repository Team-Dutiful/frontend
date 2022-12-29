interface Work {
	work_id: number;
	name: string;
}

export interface CustomDate {
	year: number;
	month: number;
	day: number;
}

export interface CalendarDate extends CustomDate {
	work: Work;
}

export interface Member {
	member_id: number;
	name: string;
	calendar_dates: CalendarDate[];
}

export const data = [
	{
		member_id: 1,
		name: "오예환",
		calendar_dates: [
			{
				year: 2022,
				month: 11,
				day: 27,
				work: {
					work_id: 3,
					name: "OFF",
				},
			},
			{
				year: 2022,
				month: 12,
				day: 5,
				work: {
					work_id: 3,
					name: "OFF",
				},
			},
			{
				year: 2022,
				month: 12,
				day: 6,
				work: {
					work_id: 4,
					name: "휴가",
				},
			},
			{
				year: 2022,
				month: 12,
				day: 7,
				work: {
					work_id: 1,
					name: "DAY",
				},
			},
			{
				year: 2022,
				month: 12,
				day: 8,
				work: {
					work_id: 1,
					name: "DAY",
				},
			},
			{
				year: 2022,
				month: 12,
				day: 9,
				work: {
					work_id: 1,
					name: "DAY",
				},
			},
		],
	},
];
