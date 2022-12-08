import { useState } from "react";
import styled from "styled-components";
import CustomCalendar from "./fullCalendar";
import Footer from "./footer";
import { ReactComponent as CalendarIcon } from "../../assets/icons/calendar_function_icon.svg";
import { ReactComponent as ShareIcon } from "../../assets/icons/calendar_share_icon.svg";

export interface EventType {
	title?: string;
	name?: string;
	date?: string;
	day?: number;
	color?: string;
	source?: object;
}

export interface SourceType {
	color: string;
	day: number;
	name: string;
	work_id: number;
	work_time: string;
}

const Calendar = () => {
	const [event, setEvent] = useState<SourceType>();

	return (
		<CalendarContainer>
			<Header>
				<CalendarIcon className="calendar-icon" />
				<ShareIcon className="share-icon" />
			</Header>
			<CustomCalendar setEvent={setEvent} />
			<Footer event={event} />
		</CalendarContainer>
	);
};

export default Calendar;

const CalendarContainer = styled.div`
	position: relative;
	height: calc(var(--vh, 1vh) * 100);
`;

const Header = styled.header`
	height: 60px;
	display: flex;
	justify-content: end;
	padding-right: 32px;

	.calendar-icon {
		width: 32px;
		height: 32px;
		margin-top: 20px;
	}

	.share-icon {
		width: 17px;
		height: 20px;
		margin-left: 12px;
		margin-top: 26px;
	}
`;
