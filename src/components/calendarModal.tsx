import styled from "styled-components";
import { ReactComponent as CloseIcon } from "../assets/icons/close_icon.svg";
import { useNavigate } from "react-router-dom";

interface CalendarModalProps {
	onClose: () => void;
}

const CalendarModal = ({ onClose }: CalendarModalProps) => {
	const navigate = useNavigate();

	const handleClickModal = (e: { stopPropagation: () => void }) => {
		e.stopPropagation();
	};

	return (
		<CalendarModalContainer onClick={onClose}>
			<GroupModalContent onClick={handleClickModal}>
				<CloseIcon onClick={onClose} />
				<GroupHeaderSection>
					<ModalTitle>공유하기</ModalTitle>
				</GroupHeaderSection>
				<GroupButton>링크</GroupButton>
				<GroupButton>이미지</GroupButton>
			</GroupModalContent>
		</CalendarModalContainer>
	);
};

export default CalendarModal;

const CalendarModalContainer = styled.div`
	width: 360px;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	left: 0;
	top: 0;
	text-align: center;
	z-index: 1;
	background: rgba(0, 0, 0, 0.5);
`;

const GroupModalContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 270px;
	height: 260px;

	background: #ffffff;
	border-radius: 10px;
	position: relative;

	svg {
		position: absolute;
		top: 20px;
		right: 20px;
		cursor: pointer;
	}
`;

const GroupHeaderSection = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 60px;
	margin-bottom: 32px;
`;

const ModalTitle = styled.span`
	font-family: "Inter";
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 19px;
	text-align: center;
	color: #000000;
	margin-left: 7px;
`;

const GroupButton = styled.button`
	font-family: "Inter";
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 19px;
	padding: 5px;
	margin-bottom: 20px;
	border: none;
	background-color: white;
	cursor: pointer;

	:hover {
		background-color: pink;
	}
`;
