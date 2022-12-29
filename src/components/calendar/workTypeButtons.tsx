import styled from "styled-components";
import { WorkDataType } from "../../pages/calendar/calendar";

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

export const SaveButton = ({ onClick }: ActionTypeButtonProps) => {
	return (
		<Button color="#ac99db" onClick={onClick}>
			저장
		</Button>
	);
};

export const DeleteButton = ({ onClick }: ActionTypeButtonProps) => {
	return (
		<Button color="#E33333" onClick={onClick}>
			삭제
		</Button>
	);
};

export const SkipButton = ({ onClick }: ActionTypeButtonProps) => {
	return (
		<Button color="#cfcfcf" onClick={onClick}>
			스킵
		</Button>
	);
};

const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => (props.color ? props.color : "DFDFDF")};
	color: white;
	width: 75px;
	height: 32px;
	padding: 8px;
	border-radius: 5px;
	border: none;
	font-size: 1rem;
`;
