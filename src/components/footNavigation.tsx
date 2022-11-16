import styled from "styled-components";
import { ReactComponent as CalendarIcon } from "../assets/icons/calendar_unactive_icon.svg";
import { ReactComponent as GroupIcon } from "../assets/icons/group_unactive_icon.svg";
import { ReactComponent as SettingIcon } from "../assets/icons/setting_unactive_icon.svg";

const FootNavigation = () => {
	return (
		<FootNavigationContainer>
			<CalendarIcon />
			<GroupIcon />
			<SettingIcon />
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
`;
