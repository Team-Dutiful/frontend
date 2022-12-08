import { useState, useEffect } from "react";
import styled from "styled-components";
import { SourceType } from "./calendar";
import { ReactComponent as PencilIcon } from "../../assets/icons/calendar_pencil_icon.svg";
import { ReactComponent as TrashbinIcon } from "../../assets/icons/calendar_trashbin_icon.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/calendar_settings_icon.svg";

interface FooterProps {
	event?: SourceType;
}

const Footer = ({ event }: FooterProps) => {
	const [isEditMode, setIsEditMode] = useState(false);

	const toggleEditMode = () => {
		setIsEditMode(!isEditMode);
	};

	useEffect(() => {
		if (event) {
			setIsEditMode(false);
		} else {
			setIsEditMode(true);
		}
	}, [event]);

	return (
		<FooterContainer>
			{!isEditMode ? (
				<EventBox>
					<Day color={event?.color}>{event?.day}</Day>
					<Name>{event?.name}</Name>
					<Time>{event?.work_time}</Time>
					<PencilIcon onClick={toggleEditMode} />
					<TrashbinIcon />
				</EventBox>
			) : (
				<NoEventBox>
					<Header>
						<Title>근무 등록</Title>
						<IconBox>
							<SettingsIcon />
						</IconBox>
					</Header>
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
	justify-content: center;
	padding: 1rem;
`;

const Header = styled.div``;

const Title = styled.h1`
	font-size: 20px;
	font-weight: 700;
`;

const IconBox = styled.div`
	position: absolute;
	top: 1rem;
	right: 1rem;
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
