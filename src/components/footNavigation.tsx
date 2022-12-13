import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { ReactComponent as CalendarIcon } from "../assets/icons/calendar_unactive_icon.svg";
import { ReactComponent as GroupIcon } from "../assets/icons/group_unactive_icon.svg";
import { ReactComponent as SettingIcon } from "../assets/icons/setting_unactive_icon.svg";
import { useState, useEffect } from "react";

const FootNavigation = () => {
	const urlPath = useLocation().pathname.split("/")[1];
	const [currentUrl, setCurrentUrl] = useState("calendar");

	useEffect(() => {
		if (urlPath.includes("calendar")) setCurrentUrl("calendar");
		else if (urlPath.includes("group")) setCurrentUrl("group");
		else if (urlPath.includes("setting")) setCurrentUrl("setting");
	}, [urlPath]);

	return (
		<FootNavigationContainer>
			<CalendarIcon className={`${currentUrl === "calendar" ? "active" : ""}`} />
			<GroupIcon className={`${currentUrl === "group" ? "active" : ""}`} />
			<SettingIcon className={`${currentUrl === "setting" ? "active" : ""}`} />
		</FootNavigationContainer>
	);
};

export default FootNavigation;

const FootNavigationContainer = styled.div`
	border: 1px solid #cfcfcf;
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	height: 84px;
	width: 360px;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	box-sizing: border-box;

	svg {
		cursor: pointer;
	}

	.active {
		path {
			fill: #e86464;
		}
	}
`;
