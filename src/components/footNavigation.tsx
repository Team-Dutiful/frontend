import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as CalendarIcon } from "../assets/icons/calendar_unactive_icon.svg";
import { ReactComponent as GroupIcon } from "../assets/icons/group_unactive_icon.svg";
import { ReactComponent as SettingIcon } from "../assets/icons/setting_unactive_icon.svg";
import { useState, useEffect } from "react";

const FootNavigation = () => {
	const navigate = useNavigate();

	const urlPath = useLocation().pathname.split("/")[1];
	const [currentUrl, setCurrentUrl] = useState("calendar");

	useEffect(() => {
		if (urlPath.includes("calendar")) setCurrentUrl("calendar");
		else if (urlPath.includes("group")) setCurrentUrl("group");
		else if (urlPath.includes("setting")) setCurrentUrl("setting");
	}, [urlPath]);

	const handleChangeUrl = (pageUrl: string) => {
		navigate(`/${pageUrl}`);
	};

	return (
		<FootNavigationContainer>
			<CalendarIcon
				className={`${currentUrl === "calendar" ? "active" : ""}`}
				onClick={() => handleChangeUrl("calendar")}
			/>
			<GroupIcon className={`${currentUrl === "group" ? "active" : ""}`} onClick={() => handleChangeUrl("group")} />
			<SettingIcon
				className={`${currentUrl === "setting" ? "active" : ""}`}
				onClick={() => handleChangeUrl("settings")}
			/>
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
	width: 100vw;
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
