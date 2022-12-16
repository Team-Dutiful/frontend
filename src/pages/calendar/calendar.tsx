import { useState } from "react";
import styled from "styled-components";
import Header from "./header";
import CustomCalendar from "./fullCalendar";
import Footer from "./footer";
import ModalPortal from "../../components/modalPortal";
import CalendarModal from "../../components/calendarModal";

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
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isEditMode, setIsEditMode] = useState(false);

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	const toggleEditMode = () => {
		setIsEditMode(!isEditMode);
	};

	return (
		<CalendarContainer>
			<Header isEditMode={isEditMode} onOpenModal={handleOpenModal} toggleEditMode={toggleEditMode} />
			<CustomCalendar setEvent={setEvent} setIsEditMode={setIsEditMode} />
			<Footer event={event} isEditMode={isEditMode} toggleEditMode={toggleEditMode} />

			{isModalOpen && (
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
