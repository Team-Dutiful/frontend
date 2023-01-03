import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./header";
import CustomCalendar from "./fullCalendar";
import Footer from "./footer";
import ModalPortal from "../../components/modalPortal";
import CalendarModal from "../../components/calendarModal";
import { getSchedule, getWorkList, WorkDataType } from "../../api/calendar";
import { getMonth, getYear } from "../../utils/getDate";

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
	work_type: string;
	work_id?: number;
	start_time: string;
	end_time: string;
}

export interface FocusDateType {
	start: string;
	end: string;
	overlap?: boolean;
	display?: string;
	isFocused?: boolean;
}

const Calendar = () => {
	const today = new Date();
	const [nowYear, setNowYear] = useState<string>(String(today.getFullYear()));
	const [nowMonth, setNowMonth] = useState<string>(
		today.getMonth() < 10 ? `0${today.getMonth()}` : String(today.getMonth() + 1)
	);
	const [focusDate, setFocusDate] = useState<FocusDateType | null>(null);

	const [events, setEvents] = useState<EventDataType[]>([]);
	const [eventDetail, setEventDetail] = useState<SourceType>();
	const [workData, setWorkData] = useState<WorkDataType[]>([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isEditMode, setIsEditMode] = useState(false);

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	const toggleEditMode = () => {
		if (!isEditMode) {
			changeFocusDate(`${nowYear}-${nowMonth}-01`);
			setIsEditMode(true);
		} else setIsEditMode(false);
	};

	const addFocusDate = (focusDate: FocusDateType) => {
		const eventList = events.filter((event) => !("isFocused" in event));
		setEvents([...eventList, focusDate]);
	};

	const resetFocusDate = () => {
		const eventList = events.filter((event) => !("isFocused" in event || "isTemp" in event));
		setEvents([...eventList]);
		setFocusDate(null);
	};

	const changeFocusDate = (date: string) => {
		if (getYear(date) !== nowYear || getMonth(date) !== nowMonth) return;

		const focus = {
			start: date,
			end: date,
			overlap: false,
			display: "background",
			isFocused: true,
		};
		setFocusDate(focus);
	};

	useEffect(() => {
		if (focusDate) addFocusDate(focusDate);
	}, [focusDate]);

	useEffect(() => {
		if (!isEditMode) resetFocusDate();
	}, [isEditMode]);

	useEffect(() => {
		async function getScheduleData() {
			const scheduleData = await getSchedule(nowYear, nowMonth);
			const workData = await getWorkList();

			setEvents(scheduleData);
			setWorkData(workData);
		}
		getScheduleData();
	}, [nowYear, nowMonth]);

	return (
		<CalendarContainer>
			<Header isEditMode={isEditMode} onOpenModal={handleOpenModal} toggleEditMode={toggleEditMode} />
			<CustomCalendar
				isEditMode={isEditMode}
				events={events}
				setNowYear={setNowYear}
				setNowMonth={setNowMonth}
				setEventDetail={setEventDetail}
				changeFocusDate={changeFocusDate}
			/>
			<Footer
				isEditMode={isEditMode}
				events={events}
				workData={workData}
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
	height: 100vh;
`;
