import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { SourceType } from "./calendar";
import { ReactComponent as PencilIcon } from "../../assets/icons/calendar_pencil_icon.svg";
import { ReactComponent as TrashbinIcon } from "../../assets/icons/calendar_trashbin_icon.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/calendar_settings_icon.svg";
import { ActionTypeButton, WorkTypeButton } from "../../components/calendar/workTypeButtons";

interface FooterProps {
	event?: SourceType;
	isEditMode: boolean;
	toggleEditMode: () => void;
}

const Footer = ({ event, isEditMode, toggleEditMode }: FooterProps) => {
	const navigate = useNavigate();

	return (
		<FooterContainer>
			{event && !isEditMode && (
				<EventBox>
					<Day color={event?.color}>{event?.day}</Day>
					<Name>{event?.name}</Name>
					<Time>{event?.work_time}</Time>
					<PencilIcon onClick={toggleEditMode} />
					<TrashbinIcon />
				</EventBox>
			)}
			{isEditMode && (
				<NoEventBox>
					<Title>근무 등록</Title>
					<IconBox onClick={() => navigate("/calendar/setting")}>
						<SettingsIcon />
					</IconBox>
					<Buttons>
						<WorkButtons>
							<WorkTypeButton type="DAY" />
							<WorkTypeButton type={"EVE"} />
							<WorkTypeButton type={"NIGHT"} />
							<WorkTypeButton type={"OFF"} />
							<WorkTypeButton type={"ETC"} />
						</WorkButtons>
						<ActionButtons>
							<ActionTypeButton type={"SKIP"} />
							<ActionTypeButton type={"DELETE"} />
						</ActionButtons>
					</Buttons>
				</NoEventBox>
			)}
		</FooterContainer>
	);
};

export default Footer;

const FooterContainer = styled.div`
	height: 15%;
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
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

const WorkButtons = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
`;

const ActionButtons = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
