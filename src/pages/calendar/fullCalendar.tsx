import "@fullcalendar/react/dist/vdom";
import FullCalendar, {
	DateSelectArg,
	DayHeaderContentArg,
	EventClickArg,
	VerboseFormattingArg,
} from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import styled from "styled-components";
import { EventDataType, SourceType } from "./calendar";

interface CustomCalendarProps {
	isEditMode: boolean;
	events: EventDataType[];
	setNowYear: React.Dispatch<React.SetStateAction<string>>;
	setNowMonth: React.Dispatch<React.SetStateAction<string>>;
	setEventDetail: React.Dispatch<React.SetStateAction<SourceType | undefined>>;
	changeFocusDate: (date: string) => void;
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
	setNowYear,
	setNowMonth,
	setEventDetail,
	changeFocusDate,
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
					type: data.work?.work_type,
					color: data.work?.color,
					name: data.work?.name,
					start_time: data.work?.start_time,
					end_time: data.work?.end_time,
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

	const titleFormat = (arg: VerboseFormattingArg) => {
		const year = String(arg.date.year);
		const month = arg.date.month < 10 ? `0${arg.date.month + 1}` : String(arg.date.month + 1);

		const formattedTitle = (
			<Title>
				<TitleYear>{arg.date.year}</TitleYear>
				<TitleMonth>{arg.date.month + 1}</TitleMonth>
			</Title>
		);

		setNowYear(year);
		setNowMonth(month);
		return formattedTitle;
	};

	const eventClick = (arg: EventClickArg) => {
		changeFocusDate(arg.event.startStr);
		if (!isEditMode) setEventDetail(arg.event._def.extendedProps.source);
	};

	const dateClick = (arg: DateClickArg) => {
		changeFocusDate(arg.dateStr);
		if (!isEditMode) {
			const sources = arg.view.getCurrentData().eventSources;
			const key = Object.keys(sources)[0];
			const events = sources[key].meta;
			const event = events.filter((event: formattedEventType) => event.date === arg.dateStr)[0]?.source;

			if (event) setEventDetail(event);
			else setEventDetail(undefined);
		}
	};

	return (
		<FullCalendarContainer isEditMode={isEditMode}>
			<FullCalendar
				plugins={[dayGridPlugin, interactionPlugin]} // interactionPlugin: dateClick, eventClick 사용을 위한 plugin
				initialView="dayGridMonth"
				height={"100%"}
				headerToolbar={{ start: "", center: `prev title next`, end: "" }} // <- 2022.11 ->
				titleFormat={titleFormat}
				dayHeaderContent={dayName} // 요일을 한국어로
				fixedWeekCount={false} // true일 경우 항상 6줄
				events={formattedEvents()} // event data를 fullCalendar event 형식에 맞춰 전처리
				eventClick={eventClick}
				dateClick={dateClick}
			/>
		</FullCalendarContainer>
	);
};

export default CustomCalendar;

const FullCalendarContainer = styled.div<{ isEditMode: boolean }>`
	width: 100%;
	height: 75%;

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
			display: ${(props) => (props.isEditMode ? "none" : "")};

			.fc-icon {
				color: #d9d9d9;
			}
		}

		.fc-next-button {
			border: none;
			background-color: white;
			padding: 0.5rem;
			margin: 0;
			display: ${(props) => (props.isEditMode ? "none" : "")};

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

	// Focus date Custom
	.fc-bg-event {
		border: ${(props) => (props.isEditMode ? "1px solid #ff6a6a" : "transparent")};
		background-color: ${(props) => (props.isEditMode ? "transparent" : "#e9e9e989")};
		opacity: 100;
	}

	// no scroll
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
	div::-webkit-scrollbar {
		display: none; /* Chrome, Safari, Opera*/
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
