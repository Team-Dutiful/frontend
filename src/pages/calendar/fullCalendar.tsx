import "@fullcalendar/react/dist/vdom";
import FullCalendar, { DayHeaderContentArg, EventClickArg, VerboseFormattingArg } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import styled from "styled-components";
import { EventDataType, SourceType, FocusDateType } from "./calendar";

interface CustomCalendarProps {
	isEditMode: boolean;
	events: EventDataType[];
	nowMonth: string;
	setNowYear: React.Dispatch<React.SetStateAction<string>>;
	setNowMonth: React.Dispatch<React.SetStateAction<string>>;
	setEventDetail: React.Dispatch<React.SetStateAction<SourceType | undefined>>;
	setFocusDate: React.Dispatch<React.SetStateAction<FocusDateType | null>>;
	onChangeFocusDate: (date: string) => void;
}

export interface formattedEventType {
	title?: string;
	name?: string;
	date?: string;
	day?: string;
	color?: string;
	source?: object;
}

const CustomCalendar = ({
	isEditMode,
	events,
	nowMonth,
	setNowYear,
	setNowMonth,
	setEventDetail,
	setFocusDate,
	onChangeFocusDate,
}: CustomCalendarProps) => {
	const formattedEvents = () => {
		let newEvents: formattedEventType[] = [];

		events?.forEach((data: EventDataType) => {
			if ("display" in data) {
				newEvents.push(data); // editMode에서 highlight 효과를 위한 data
			} else {
				let event: formattedEventType = {};

				// fullCalendar 필수 data
				event.title = data.work?.name[0];
				event.date = `${data.year}-${data.month}-${data.day}`;
				event.color = data.work?.color;

				// custom needed data
				event.source = {
					day: data.day,
					work_id: data.work?.work_id,
					name: data.work?.name,
					work_time: data.work?.work_time,
				};
				newEvents.push(event);
			}
		});

		return newEvents;
	};

	const dayName = (arg: DayHeaderContentArg) => {
		const weekList = ["일", "월", "화", "수", "목", "금", "토"];
		return weekList[arg.dow];
	};

	const headerTitleFormat = (arg: VerboseFormattingArg) => {
		const year = String(arg.date.year);
		const month = String(arg.date.month + 1);

		setNowYear(year);
		setNowMonth(month);
		const formattedTitle = (
			<Title>
				<TitleYear>{year}</TitleYear>
				<TitleMonth>{month}</TitleMonth>
			</Title>
		);

		return formattedTitle;
	};

	const handleClickEvent = (arg: EventClickArg) => {
		setEventDetail(arg.event._def.extendedProps.source);
		if (isEditMode) {
			onChangeFocusDate(arg.event.startStr);
		}
	};

	const handleClickDate = (arg: DateClickArg) => {
		if (isEditMode) {
			onChangeFocusDate(arg.dateStr);
		} else {
			const sources = arg.view.getCurrentData().eventSources;
			const key = Object.keys(sources)[0];
			const events = sources[key].meta;
			const event = events.filter((event: formattedEventType) => event.date === arg.dateStr)[0]?.source;

			if (event) setEventDetail(event);
			else setEventDetail(undefined);
		}
	};

	return (
		<FullCalendarContainer>
			<FullCalendar
				plugins={[dayGridPlugin, interactionPlugin]} // interactionPlugin: dateClick, eventClick 사용을 위한 plugin
				initialView="dayGridMonth"
				height={"100%"}
				events={formattedEvents()} // event data를 fullCalendar event 형식에 맞춰 전처리
				titleFormat={(arg) => headerTitleFormat(arg)}
				headerToolbar={{ start: "", center: `prev title next`, end: "" }} // <- 2022.11 ->
				dayHeaderContent={(arg) => dayName(arg)} // 요일을 한국어로
				fixedWeekCount={false} // true일 경우 항상 6줄
				eventClick={(arg) => handleClickEvent(arg)}
				dateClick={(arg) => handleClickDate(arg)}
			/>
		</FullCalendarContainer>
	);
};

export default CustomCalendar;

const FullCalendarContainer = styled.div`
	width: 100%;
	height: 85%;

	.fc-bg-event {
		border: 1px solid #ff6a6a;
		background-color: transparent;
		opacity: 100;
	}

	// Header Toolbar Custom
	.fc-toolbar-chunk {
		display: flex;
		align-items: center;

		.fc-toolbar-title {
			margin: 0;
			text-align: center;
			font-weight: bold;
		}

		.fc-prev-button {
			border: none;
			background-color: white;
			padding: 0.5rem;

			.fc-icon {
				color: #d9d9d9;
			}
		}

		.fc-next-button {
			border: none;
			background-color: white;
			padding: 0.5rem;
			margin: 0;

			.fc-icon {
				color: #d9d9d9;
			}
		}
	}

	// Day(요일) Custom
	.fc-daygrid-day-top {
		display: flex;
		justify-content: center;
	}

	// Table Custom
	.fc-scrollgrid-sync-inner {
		display: flex;
		flex-direction: column;
		gap: 11px;
		font-size: 18px;
	}

	.fc-theme-standard .fc-scrollgrid {
		border: 1px solid white;
	}

	.fc-theme-standard td,
	.fc-theme-standard th {
		border-left: none;
		border-right: none;
	}

	.fc .fc-daygrid-day-number {
		font-weight: 100;
		font-size: 16px;
	}

	.fc-day-sun {
		color: #ff0000;
	}

	// Event Custom
	.fc-daygrid-event-harness {
		display: flex;
		align-items: center;
		justify-content: center;

		.fc-daygrid-event {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 30px;
			height: 30px;
			font-size: 18px;
			border: none;
			border-radius: 7px;
		}

		.fc-event-title-container {
			display: flex;
			justify-content: center;
			align-items: center;
			padding-top: 2px;
		}
	}

	// Today Custom
	.fc .fc-daygrid-day.fc-day-today {
		background-color: #ffb0b0;
	}
`;

const Title = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

const TitleYear = styled.div`
	font-size: 18px;
`;
const TitleMonth = styled.div`
	font-size: 30px;
`;
