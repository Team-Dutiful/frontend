import styled from "styled-components";

const TeamLogo = () => {
	return <TeamLogoContainer>@ToStar</TeamLogoContainer>;
};

export default TeamLogo;

const TeamLogoContainer = styled.p`
	position: absolute;
	left: 50%;
	bottom: 2rem;
	transform: translateX(-50%);
	font-family: "Inika";
	font-style: normal;
	font-size: 1rem;
`;
