import styled from "styled-components";
import { ReactComponent as PreviousIcon } from "../../assets/icons/auth_previous.svg";

interface PreviousButtonProps {
	onClick: () => void;
}

const PreviousButton = ({ onClick }: PreviousButtonProps) => {
	return (
		<PreviousButtonContainer onClick={onClick}>
			<PreviousIcon width="16px" height="16px" />
		</PreviousButtonContainer>
	);
};

export default PreviousButton;

const PreviousButtonContainer = styled.button`
	position: absolute;
	top: 0.5rem;
	left: 0.5rem;
	border: none;
	outline: none;
	background-color: transparent;
	transform: rotate(-90deg);
`;
