import styled from "styled-components";
import { ReactComponent as CloseIcon } from "../assets/icons/close_icon.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { exitGroup, deleteGroup } from "../api/group/index";

interface GroupModalProps {
	groupId: number;
	title: string;
	color: string;
	isLeader: boolean;
	onClose: (event?: React.MouseEvent<HTMLDivElement>) => void;
	handleDeleteGroup: (groupId: number) => void;
}

const GroupModal = ({ groupId, title, color, isLeader, onClose, handleDeleteGroup }: GroupModalProps) => {
	const navigate = useNavigate();

	const handleGoToEditing = () => {
		navigate("/group/edit", {
			state: {
				groupId: groupId,
				color: color,
				title: title,
			},
		});
	};

	const handleGoToMemberList = () => {
		navigate("/members", {
			state: {
				groupId: groupId,
			},
		});
	};

	const handleGoToInviting = () => {
		navigate("/members/invite", {
			state: {
				groupId: groupId,
			},
		});
	};

	const handleClickModal = (e: { stopPropagation: () => void }) => {
		e.stopPropagation();
	};

	const handleGroupExit = async () => {
		const data = await exitGroup(groupId);
		if (data.status == 200) {
			alert("그룹 나가기 성공!");
			handleDeleteGroup(groupId);
			onClose();
		} else {
			alert(data.data.message);
		}
	};

	const handeGroupDelete = async () => {
		const data = await deleteGroup(groupId);
		if (data.status == 200) {
			alert("그룹 삭제 성공.");
			handleDeleteGroup(groupId);
			onClose();
		} else {
			alert(data.data.message);
		}
	};

	return (
		<GroupModalContainer onClick={onClose}>
			<GroupModalContent isLeader={isLeader} onClick={handleClickModal}>
				<div onClick={onClose}>
					<CloseIcon />
				</div>
				<GroupHeaderSection>
					<ColorBox color={color} />
					<GroupTitle>{title}</GroupTitle>
				</GroupHeaderSection>
				<GroupButton onClick={handleGoToEditing}>그룹 편집하기</GroupButton>
				<GroupButton onClick={handleGoToInviting}>멤버 초대하기</GroupButton>
				{isLeader ? (
					<>
						<GroupButton onClick={handleGoToMemberList}>리더 변경하기</GroupButton>
						<ButtonBorder />
						<GroupDeleteButton onClick={handeGroupDelete}>그룹 삭제하기</GroupDeleteButton>
					</>
				) : (
					<GroupButton onClick={handleGroupExit}>그룹 나가기</GroupButton>
				)}
			</GroupModalContent>
		</GroupModalContainer>
	);
};

export default GroupModal;

const GroupModalContainer = styled.div`
	width: 100%;
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
	font-family: sans-serif;
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 19px;
	text-align: center;
	color: #000000;
	margin-left: 7px;
`;

const ColorBox = styled.div<{ color: string }>`
	background-color: ${(props) => (props.color ? props.color : "black")};
	height: 30px;
	width: 30px;
	border-radius: 50%;
	margin: 5px;
`;

const GroupButton = styled.button`
	font-family: "Inter";
	font-family: sans-serif;
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
