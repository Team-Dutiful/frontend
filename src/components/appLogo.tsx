import styled from "styled-components";

interface LogoProps {
	fontSize?: string;
}

const Logo = ({ fontSize = "1.5rem" }: LogoProps) => {
	return <LogoContainer fontSize={fontSize}>Dutiful</LogoContainer>;
};

export default Logo;

const LogoContainer = styled.p<{ fontSize: string }>`
	font-family: "Inika";
	font-size: ${(props) => props.fontSize};
	color: #ff8181;
`;
