import styled from "styled-components";
import { Outlet, useNavigate } from "react-router-dom";
import { ReactComponent as BackIcon } from "../../assets/icons/back_icon.svg";

const Setting = () => {
	const navigate = useNavigate();

	const handleGoBackPage = () => {
		navigate(-1);
	};

	return (
		<SettingContainer>
			<BackIcon onClick={handleGoBackPage} />
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

	> svg {
		cursor: pointer;
		position: absolute;
		left: 8px;
	}

	button {
		cursor: pointer;
	}
`;

const Logo = styled.div`
	font-family: "Inika";
	font-size: 2rem;
	color: #ff8181;
	margin-top: 78px;
	margin-bottom: 68px;
	text-align: center;
`;
