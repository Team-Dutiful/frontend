import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as LeftIcon } from "../../assets/icons/custom_calendar_left_icon.svg";
import { ReactComponent as RightIcon } from "../../assets/icons/custom_calendar_right_icon.svg";
import CalendarTable from "./calendarTable";

const CustomCalendar = () => {
	const [year, setYear] = useState(2022);
	const [month, setMonth] = useState(10);

	const handleClickLeft = () => {
		setMonth((prev) => {
			const res = prev - 1;
			if (res === 0) {
				setYear(year - 1);
				return 12;
			}
			return res;
		});
	};

	const handleClickRight = () => {
		setMonth((prev) => {
			const res = prev + 1;
			if (res === 13) {
				setYear(year + 1);
				return 1;
			}
			return res;
		});
	};

	return (
		<CustomCalendarCotainer>
			<CustomCalendarHeader>
				<Year>{year}</Year>
				<CustomCalendarTitle>
					<CustomCalendarButton onClick={handleClickLeft}>
						<LeftIcon width={15} height={15} />
					</CustomCalendarButton>
					<Month>{month}</Month>
					<CustomCalendarButton onClick={handleClickRight}>
						<RightIcon width={15} height={15} />
					</CustomCalendarButton>
				</CustomCalendarTitle>
			</CustomCalendarHeader>
			<CustomCalendarMain>
				<CalendarTable />
				<CalendarTable />
				<CalendarTable />
				<CalendarTable />
			</CustomCalendarMain>
		</CustomCalendarCotainer>
	);
};

export default CustomCalendar;

const CustomCalendarCotainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const CustomCalendarHeader = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 5px;
	width: 100%;
`;

const CustomCalendarTitle = styled.div`
	display: flex;
	gap: 35px;
`;

const Year = styled.p`
	font-weight: 400;
	font-size: 18px;
`;

const Month = styled.p`
	text-align: center;
	width: 30px;
	font-weight: 600;
	font-size: 20px;
	padding-top: 3px;
`;

const CustomCalendarButton = styled.button`
	border: none;
	outline: none;
	background-color: transparent;
`;

const CustomCalendarMain = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	padding: 25px 15px;
`;
