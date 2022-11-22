import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Logo from "../components/appLogo";
import TeamLogo from "../components/teamLogo";

const Welcome = () => {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate("/login");
		}, 1000);
	}, []);

	return (
		<WelcomeContainer>
			<WelComeLogo>
				<Logo />
				<WelcomeTitle>교대 근무 관리 어플</WelcomeTitle>
			</WelComeLogo>
			<TeamLogo />
		</WelcomeContainer>
	);
};

export default Welcome;

const WelcomeContainer = styled.main`
	position: relative;
	height: calc(var(--vh, 1vh) * 100);
`;

const WelComeLogo = styled.section`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2px;
	opacity: 0.8;
`;

const WelcomeTitle = styled.div`
	font-family: "IBM Plex Sans Thai";
	font-size: 1rem;
	color: #848484;
`;
