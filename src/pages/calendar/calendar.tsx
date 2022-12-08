import { useState } from "react";
import styled from "styled-components";
import CalendarModal from "../../components/calendarModal";
import ModalPortal from "../../components/modalPortal";
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
	const [modalOpen, setModalOpen] = useState(false);

	const handleOpenModal = () => {
		setModalOpen(true);
	};

	const handleCloseModal = () => {
		setModalOpen(false);
	};

	return (
		<CalendarContainer>
			<Header>
				<CalendarIcon className="calendar-icon" />
				<ShareIcon className="share-icon" onClick={handleOpenModal} />
			</Header>
			<CustomCalendar setEvent={setEvent} />
			<Footer event={event} />
			{modalOpen && (
				<ModalPortal>
					<CalendarModal onClose={handleCloseModal} />
				</ModalPortal>
			)}
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

	svg {
		cursor: pointer;
	}

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
