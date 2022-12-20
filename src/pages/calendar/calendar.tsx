import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./header";
import CustomCalendar from "./fullCalendar";
import Footer from "./footer";
import ModalPortal from "../../components/modalPortal";
import CalendarModal from "../../components/calendarModal";
import { tempEvents } from "./tempData";

export interface EventDataType {
	// eventType
	calendar_date_id?: number;
	year?: string;
	month?: string;
	day?: string;
	work?: SourceType;

	// focusDateType
	start?: string;
	end?: string;
	overlay?: boolean;
	display?: string;
	isFocused?: boolean;
}

export interface SourceType {
	day?: string;
	color?: string;
	name: string;
	work_id?: number;
	work_time?: string;
}

export interface FocusDateType {
	start: string;
	end: string;
	overlap?: boolean;
	display?: string;
	isFocused?: boolean;
}

const Calendar = () => {
	const [events, setEvents] = useState<EventDataType[]>(tempEvents);
	const [eventDetail, setEventDetail] = useState<SourceType>();
	const [focusDate, setFocusDate] = useState<FocusDateType | null>(null);
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

	const addFocusDate = () => {
		const eventList = events.filter((event) => !("isFocused" in event));
		setEvents([...eventList, focusDate!]);
	};

	const resetFocusDate = () => {
		const eventList = events.filter((event) => !("isFocused" in event));
		setEvents([...eventList]);
		setFocusDate(null);
	};

	useEffect(() => {
		if (focusDate) addFocusDate();
	}, [focusDate]);

	useEffect(() => {
		if (!isEditMode) resetFocusDate();
	}, [isEditMode]);

	return (
		<CalendarContainer>
			<Header isEditMode={isEditMode} onOpenModal={handleOpenModal} toggleEditMode={toggleEditMode} />
			<CustomCalendar
				isEditMode={isEditMode}
				events={events}
				focusDate={focusDate}
				setEvents={setEvents}
				setEventDetail={setEventDetail}
				setIsEditMode={setIsEditMode}
				setFocusDate={setFocusDate}
			/>
			<Footer
				isEditMode={isEditMode}
				events={events}
				focusDate={focusDate}
				eventDetail={eventDetail}
				setEvents={setEvents}
				setFocusDate={setFocusDate}
				toggleEditMode={toggleEditMode}
			/>

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
