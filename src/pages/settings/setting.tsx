import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Setting = () => {
	return (
		<SettingContainer>
			<Logo>Dutiful</Logo>
			<Outlet />
		</SettingContainer>
	);
};

export default Setting;

const SettingContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	width: 360px;
`;

const Logo = styled.div`
	font-family: "Inika";
	font-size: 2rem;
	color: #ff8181;
	margin-top: 78px;
	margin-bottom: 68px;
	text-align: center;
`;
