import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { EventDataType, FocusDateType, SourceType } from "./calendar";
import { ReactComponent as PencilIcon } from "../../assets/icons/calendar_pencil_icon.svg";
import { ReactComponent as TrashbinIcon } from "../../assets/icons/calendar_trashbin_icon.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/calendar_settings_icon.svg";
import { WorkTypeButton, DeleteButton, SkipButton, SaveButton } from "../../components/calendar/workTypeButtons";
import { getDay, getMonth, getTomorrow, getYear } from "../../utils/getDate";
import { manageSchedule, SaveWorkType, WorkDataType } from "../../api/calendar";

interface FooterProps {
	isEditMode: boolean;
	events: EventDataType[];
	workData: WorkDataType[];
	focusDate: FocusDateType | null;
	eventDetail?: SourceType;
	setEvents: React.Dispatch<React.SetStateAction<EventDataType[]>>;
	setFocusDate: React.Dispatch<React.SetStateAction<FocusDateType | null>>;
	toggleEditMode: () => void;
}

const Footer = ({
	isEditMode,
	events,
	workData,
	focusDate,
	eventDetail,
	setEvents,
	setFocusDate,
	toggleEditMode,
}: FooterProps) => {
	const navigate = useNavigate();

	const isDefaultType = () => {
		const type = eventDetail?.name;
		if (type === "DAY" || type === "EVE" || type === "NIGHT" || type === "OFF") return true;
		else return false;
	};

	const handleClickWorkButton = (work: WorkDataType) => {
		const now = focusDate?.start!;
		const exist = events.find((event) => event.day === getDay(now));
		const newEvent = {
			year: getYear(now),
			month: getMonth(now),
			day: getDay(now),
			work: {
				work_id: work.work_id,
				work_type: work.work_type,
				name: work.name,
				color: work.color,
				start_time: work.start_time,
				end_time: work.end_time,
			},
		};

		if (exist) setEvents([...events.filter((event) => event.day !== getDay(now)), { ...exist, ...newEvent }]);
		else setEvents([...events, newEvent]);

		handleClickSkip();
	};

	const handleClickSkip = () => {
		const now = focusDate?.start!;

		if (!isEnd(getYear(now), getMonth(now), getTomorrow(now))) {
			const tomorrow = getYear(now) + "-" + getMonth(now) + "-" + getTomorrow(now);
			setFocusDate({ ...focusDate, start: tomorrow, end: tomorrow });
		}
	};

	const handleClickDelete = () => {
		setEvents([...events.filter((event) => event.day !== getDay(focusDate?.start!))]);
		handleClickSkip();
	};

	const handleSave = async () => {
		const saveEvents: SaveWorkType[] = [];
		const eventList = events.filter((event) => !("isFocused" in event));

		eventList.forEach((item) => {
			const event = {
				year: item.year,
				month: item.month,
				day: item.day,
				work_id: item.work?.work_id,
			} as SaveWorkType;

			saveEvents.push(event);
		});

		const res = await manageSchedule(saveEvents);

		if (res) {
			setFocusDate(null);
			toggleEditMode();
		}
	};

	const handleMoveManagePage = () => {
		navigate("/calendar/manage");
	};

	const isEnd = (year: string, month: string, day: string) => {
		let end;

		switch (month) {
			case "01":
			case "03":
			case "05":
			case "07":
			case "08":
			case "10":
			case "12":
				end = 31;
				break;
			case "04":
			case "06":
			case "09":
			case "11":
				end = 30;
				break;
			case "02":
				end = (Number(year) % 4 === 0 && Number(year) % 100 !== 0) || Number(year) % 400 === 0 ? 29 : 28;
				break;
			default:
				end = 31;
		}

		if (Number(day) > end) return true;
		else return false;
	};

	return (
		<FooterContainer>
			{!isEditMode && eventDetail && (
				<EventBox>
					<Day color={eventDetail?.color}>{eventDetail?.day}</Day>
					<Name>{eventDetail?.name}</Name>
					<Time>
						{eventDetail?.start_time} ~ {eventDetail.end_time}
					</Time>
					{!isDefaultType() && (
						<>
							<PencilIcon onClick={handleMoveManagePage} />
							<TrashbinIcon />
						</>
					)}
				</EventBox>
			)}
			{isEditMode && focusDate && (
				<NoEventBox>
					<Title>근무 등록</Title>
					<IconBox>
						<SettingsIcon onClick={() => navigate("/calendar/setting")} />
					</IconBox>
					<Buttons>
						<WorkButtons>
							{workData?.map((work) => (
								<div key={work.work_id}>
									<WorkTypeButton work={work} onClick={handleClickWorkButton} />
								</div>
							))}
						</WorkButtons>
						<ActionButtons>
							<DeleteButton onClick={handleClickDelete} />
							<SkipButton onClick={handleClickSkip} />
							<SaveButton onClick={handleSave} />
						</ActionButtons>
					</Buttons>
				</NoEventBox>
			)}
		</FooterContainer>
	);
};

export default Footer;

const FooterContainer = styled.div`
	height: 18%;
`;

const EventBox = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
`;

const NoEventBox = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	padding: 1rem;
`;

const Title = styled.h1`
	font-size: 20px;
	font-weight: 700;
	text-align: center;
	margin: 8px 0 16px 0;
`;

const IconBox = styled.div`
	position: absolute;
	top: 24px;
	right: 24px;
`;

const Day = styled.h1`
	font-size: 24px;
	color: ${(props) => props.color};
`;

const Name = styled.h1`
	font-size: 24px;
`;

const Time = styled.p`
	font-size: 20px;
	font-weight: 400;
`;

const Buttons = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const WorkButtons = styled.div`
	display: flex;
	overflow-x: scroll;
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
	::-webkit-scrollbar {
		display: none; /* Chrome, Safari, Opera*/
	}
	gap: 1rem;
`;

const ActionButtons = styled.div`
	display: flex;
	justify-content: center;
	gap: 1rem;
`;
