import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./header";
import CustomCalendar from "./fullCalendar";
import Footer from "./footer";
import ModalPortal from "../../components/modalPortal";
import CalendarModal from "../../components/calendarModal";
import { getSchedule, getWorkList } from "../../api/calendar";
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

export interface WorkDataType {
	work_id: number;
	name: string;
	color: string;
	start_time: string;
	end_time: string;
	work_type: string;
	memo?: string;
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
	const today = new Date();
	const [nowYear, setNowYear] = useState<string>(String(today.getFullYear()));
	const [nowMonth, setNowMonth] = useState<string>(String(today.getMonth()) + 1);
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
			handleChangeFocusDate(`${nowYear}-${nowMonth}-01`);
			setIsEditMode(true);
			// console.log(document.getElementsByClassName("fc-prev-button")[0].className);
			// prev, next 버튼 disabled 구현해야함
		} else setIsEditMode(false);
	};

	const addFocusDate = (focusDate: FocusDateType) => {
		const eventList = events.filter((event) => !("isFocused" in event));
		setEvents([...eventList, focusDate]);
	};

	const resetFocusDate = () => {
		const eventList = events.filter((event) => !("isFocused" in event));
		setEvents([...eventList]);
		setFocusDate(null);
	};

	const handleChangeFocusDate = (date: string) => {
		console.log(getYear(date), nowYear);
		console.log(getMonth(date), nowMonth);
		if (getYear(date) !== nowYear || getMonth(date) !== nowMonth) return;

		const focus = {
			start: date,
			end: date,
			overlap: false,
			display: "background",
			isFocused: true,
		};
		setFocusDate({ ...focus });
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
				nowMonth={nowMonth}
				setNowYear={setNowYear}
				setNowMonth={setNowMonth}
				setEventDetail={setEventDetail}
				setFocusDate={setFocusDate}
				onChangeFocusDate={handleChangeFocusDate}
			/>
			<Footer
				isEditMode={isEditMode}
				events={events}
				workData={workData}
				focusDate={focusDate}
				eventDetail={eventDetail}
				setEvents={setEvents}
				setFocusDate={setFocusDate}
				// toggleEditMode={toggleEditMode}
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
