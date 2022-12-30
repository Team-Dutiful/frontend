export interface Work {
	work_id: number;
	name: string;
	work_type: "DAY" | "EVE" | "NIGHT" | "OFF" | "ETC";
	color: string;
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

export const data: Member[] = [
	{
		member_id: 1,
		name: "조용우",
		calendar_dates: [
			{
				year: 2022,
				month: 11,
				day: 27,
				work: {
					work_id: 3,
					name: "OFF",
					work_type: "OFF",
					color: "#B3FFE8",
				},
			},
			{
				year: 2022,
				month: 12,
				day: 5,
				work: {
					work_id: 4,
					name: "OFF",
					work_type: "OFF",
					color: "#B3FFE8",
				},
			},
			{
				year: 2022,
				month: 12,
				day: 6,
				work: {
					work_id: 4,
					name: "ETC",
					work_type: "ETC",
					color: "#D5CEFF",
				},
			},
			{
				year: 2022,
				month: 12,
				day: 7,
				work: {
					work_id: 1,
					name: "DAY",
					work_type: "DAY",
					color: "#FFD9D9",
				},
			},
			{
				year: 2022,
				month: 12,
				day: 8,
				work: {
					work_id: 1,
					name: "DAY",
					work_type: "DAY",
					color: "#FFD9D9",
				},
			},
			{
				year: 2022,
				month: 12,
				day: 9,
				work: {
					work_id: 1,
					name: "DAY",
					work_type: "DAY",
					color: "#FFD9D9",
				},
			},
			{
				year: 2022,
				month: 12,
				day: 10,
				work: {
					work_id: 1,
					name: "NIGHT",
					work_type: "NIGHT",
					color: "#D4FFB3",
				},
			},
			{
				year: 2022,
				month: 12,
				day: 11,
				work: {
					work_id: 1,
					name: "EVE",
					work_type: "EVE",
					color: "#FFB9B9",
				},
			},
			{
				year: 2022,
				month: 12,
				day: 13,
				work: {
					work_id: 4,
					name: "사용",
					work_type: "ETC",
					color: "#D5CEFF",
				},
			},
			{
				year: 2022,
				month: 12,
				day: 14,
				work: {
					work_id: 4,
					name: "555",
					work_type: "ETC",
					color: "#D5CEFF",
				},
			},
		],
	},
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
					work_type: "OFF",
					color: "#B3FFE8",
				},
			},
			{
				year: 2022,
				month: 12,
				day: 5,
				work: {
					work_id: 4,
					name: "OFF",
					work_type: "OFF",
					color: "#B3FFE8",
				},
			},
			{
				year: 2022,
				month: 12,
				day: 6,
				work: {
					work_id: 4,
					name: "ETC",
					work_type: "ETC",
					color: "#D5CEFF",
				},
			},
			{
				year: 2022,
				month: 12,
				day: 7,
				work: {
					work_id: 1,
					name: "DAY",
					work_type: "DAY",
					color: "#FFD9D9",
				},
			},
			{
				year: 2022,
				month: 12,
				day: 8,
				work: {
					work_id: 1,
					name: "DAY",
					work_type: "DAY",
					color: "#FFD9D9",
				},
			},
			{
				year: 2022,
				month: 12,
				day: 9,
				work: {
					work_id: 1,
					name: "DAY",
					work_type: "DAY",
					color: "#FFD9D9",
				},
			},
			{
				year: 2022,
				month: 12,
				day: 10,
				work: {
					work_id: 1,
					name: "NIGHT",
					work_type: "NIGHT",
					color: "#D4FFB3",
				},
			},
			{
				year: 2022,
				month: 12,
				day: 11,
				work: {
					work_id: 1,
					name: "EVE",
					work_type: "EVE",
					color: "#FFB9B9",
				},
			},
			{
				year: 2022,
				month: 12,
				day: 13,
				work: {
					work_id: 4,
					name: "사용",
					work_type: "ETC",
					color: "#D5CEFF",
				},
			},
			{
				year: 2022,
				month: 12,
				day: 14,
				work: {
					work_id: 4,
					name: "555",
					work_type: "ETC",
					color: "#D5CEFF",
				},
			},
		],
	},
];
