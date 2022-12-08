import { useState } from "react";
import styled from "styled-components";
import CustomCalendar from "./fullCalendar";
import Footer from "./footer";

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
			<Header>헤더</Header>
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
	height: 10%;
`;
