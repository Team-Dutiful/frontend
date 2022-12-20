import styled from "styled-components";
import { WorkDataType } from "../../pages/calendar/footer";

interface WorkTypeButtonProps {
	work: WorkDataType;
	onClick: (work: WorkDataType) => void;
}

interface ActionTypeButtonProps {
	onClick: () => void;
}

export const WorkTypeButton = ({ work, onClick }: WorkTypeButtonProps) => {
	return (
		<Button color={work.color} onClick={() => onClick(work)}>
			{work.name}
		</Button>
	);
};

export const DeleteButton = ({ onClick }: ActionTypeButtonProps) => {
	return (
		<Button color="#E33333" onClick={onClick}>
			DELETE
		</Button>
	);
};

export const SkipButton = ({ onClick }: ActionTypeButtonProps) => {
	return (
		<Button color="#DFDFDF" onClick={onClick}>
			SKIP
		</Button>
	);
};

const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => (props.color ? props.color : "DFDFDF")};
	color: white;
	width: 72px;
	height: 32px;
	padding: 8px;
	border-radius: 5px;
	border: none;
	font-size: 1rem;
`;
