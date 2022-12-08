import styled from "styled-components";
import { ReactComponent as CloseIcon } from "../assets/icons/close_icon.svg";
import { useNavigate } from "react-router-dom";

interface GroupModalProps {
	groupId: number;
	title: string;
	isLeader: boolean;
	onClose: () => void;
}

const GroupModal = ({ groupId, title, isLeader, onClose }: GroupModalProps) => {
	const navigate = useNavigate();
	const handleGoToEditing = () => {
		navigate("/group/edit");
	};

	const handleGoToMemberList = () => {
		navigate("/members", {
			state: {
				groupId: groupId,
			},
		});
	};

	const handleClickModal = (e: { stopPropagation: () => void }) => {
		e.stopPropagation();
	};

	return (
		<GroupModalContainer onClick={onClose}>
			<GroupModalContent isLeader={isLeader} onClick={handleClickModal}>
				<CloseIcon onClick={onClose} />
				<GroupHeaderSection>
					<ColorBox />
					<GroupTitle>{title}</GroupTitle>
				</GroupHeaderSection>
				<GroupButton onClick={handleGoToEditing}>그룹 편집하기</GroupButton>
				<GroupButton onClick={handleGoToMemberList}>멤버 초대하기</GroupButton>
				{isLeader ? (
					<>
						<GroupButton>리더 변경하기</GroupButton>
						<ButtonBorder />
						<GroupDeleteButton>그룹 삭제하기</GroupDeleteButton>
					</>
				) : (
					<GroupButton>그룹 나가기</GroupButton>
				)}
			</GroupModalContent>
		</GroupModalContainer>
	);
};

export default GroupModal;

const GroupModalContainer = styled.div`
	width: 360px;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	left: 0;
	top: 0;
	text-align: center;
	background: rgba(0, 0, 0, 0.5);
`;

const GroupModalContent = styled.div<{ isLeader: boolean }>`
	display: flex;
	flex-direction: column;
	width: 290px;
	height: 299px;
	height: ${(props) => (props.isLeader ? "372px" : "300px")};

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

const GroupTitle = styled.span`
	font-family: "Inter";
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 19px;
	text-align: center;
	color: #000000;
	margin-left: 7px;
`;

const ColorBox = styled.div`
	background-color: red;
	height: 30px;
	width: 30px;
	border-radius: 50%;
	margin: 5px;
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

const ButtonBorder = styled.hr`
	width: 70%;
	border: 1px solid #e0e0e0;
	margin-top: 20px;
`;

const GroupDeleteButton = styled.button`
	width: 104px;
	height: 24px;
	color: white;
	background: #ff5454;
	border-radius: 5px;
	margin: auto;
	margin-top: 16px;
	border: none;
	cursor: pointer;
`;
