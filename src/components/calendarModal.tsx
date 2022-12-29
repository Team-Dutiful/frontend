import styled from "styled-components";
import { ReactComponent as CloseIcon } from "../assets/icons/close_icon.svg";
import KakaoShareButton from "./KaKaoShare";
import { useEffect, useState } from "react";

interface CalendarModalProps {
	onClose: () => void;
}

const CalendarModal = ({ onClose }: CalendarModalProps) => {
	const [shareButton, setShareButton] = useState(false);
	const handleClickModal = (e: { stopPropagation: () => void }) => {
		e.stopPropagation();
	};

	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://developers.kakao.com/sdk/js/kakao.js";
		script.async = true;
		document.body.appendChild(script);

		// 스크립트가 로드 된 후 쉐어버튼 렌더링
		script.onload = () => {
			setShareButton(true);
		};

		return () => {
			document.body.removeChild(script);
		};
	}, []);
	return (
		<CalendarModalContainer onClick={onClose}>
			<GroupModalContent onClick={handleClickModal}>
				<CloseIcon onClick={onClose} />
				<GroupHeaderSection>
					<ModalTitle>공유하기</ModalTitle>
				</GroupHeaderSection>
				<GroupButton>링크</GroupButton>
				<GroupButton>이미지</GroupButton>
				{shareButton && <KakaoShareButton></KakaoShareButton>}
			</GroupModalContent>
		</CalendarModalContainer>
	);
};

export default CalendarModal;

const CalendarModalContainer = styled.div`
	width: 100vw;
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
