import React from "react";
import styled from "styled-components";
import FootNavigation from "../../components/footNavigation";
import { ReactComponent as DownloadIcon } from "../../assets/icons/group_download_icon.svg";
import { ReactComponent as ShareIcon } from "../../assets/icons/group_share_icon.svg";
import { ReactComponent as LeftIcon } from "../../assets/icons/group_left_icon.svg";
import CustomCalendar from "./customCalendar";
import Filter from "./filter";

interface GroupCalendarProps {
	title?: string;
}

const GroupCalendar = ({ title = "신생아실 간호사 모임" }: GroupCalendarProps) => {
	const handleClickBackButton = () => {
		console.log("back");
	};

	const handleClickDownloadButton = () => {
		console.log("download");
	};

	const handleClickShareButton = () => {
		console.log("share");
	};

	return (
		<GroupCalendarContainer>
			<GroupCalendarPage>
				<GroupCalendarHeader>
					<GroupCalendarIconButton onClick={handleClickBackButton}>
						<LeftIcon />
					</GroupCalendarIconButton>
					<GroupCalendarTitle>{title}</GroupCalendarTitle>
					<GroupCalendarIconButton onClick={handleClickDownloadButton}>
						<DownloadIcon />
					</GroupCalendarIconButton>
					<GroupCalendarIconButton onClick={handleClickShareButton}>
						<ShareIcon />
					</GroupCalendarIconButton>
				</GroupCalendarHeader>
				<GroupCalendarBox>
					<CustomCalendar />
				</GroupCalendarBox>
				<Filter />
			</GroupCalendarPage>
			<FootNavigation />
		</GroupCalendarContainer>
	);
};

export default GroupCalendar;

const GroupCalendarContainer = styled.div`
	position: relative;
	height: 100vh;
	width: 100%;
`;

const GroupCalendarPage = styled.div`
	position: relative;
	height: calc(100% - 84px);
`;

const GroupCalendarBox = styled.div`
	height: calc(100% - 220px);
	overflow: scroll;
`;

const GroupCalendarHeader = styled.header`
	display: flex;
	align-items: center;
	padding: 20px 20px 20px 5px;
	gap: 5px;
	background: transparent;
`;

const GroupCalendarTitle = styled.p`
	width: 100%;
	font-weight: 800;
	font-size: 16px;
	text-align: left;
	padding-bottom: 2px;
	color: #000000;
`;

const GroupCalendarIconButton = styled.button`
	border: none;
	outline: none;
	background-color: transparent;
`;
