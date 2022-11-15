import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

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
				<WelcomeTitle>Dutiful</WelcomeTitle>
				<WelcomeSubTitle>교대 근무 관리 어플</WelcomeSubTitle>
			</WelComeLogo>
			<TeamLogo>@ToStar</TeamLogo>
		</WelcomeContainer>
	);
};

export default Welcome;

const WelcomeContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
	height: calc(var(--vh, 1vh) * 100);
`;

const WelComeLogo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2px;
	opacity: 0.8;
`;

const WelcomeTitle = styled.div`
	font-family: "Inika";
	font-size: 1.5rem;
	color: #ff8181;
`;

const WelcomeSubTitle = styled.div`
	font-family: "IBM Plex Sans Thai";
	font-size: 1rem;
	color: #848484;
`;

const TeamLogo = styled.p`
	position: absolute;
	bottom: 2rem;
	font-family: "Inika";
	font-style: normal;
	font-size: 1rem;
`;
