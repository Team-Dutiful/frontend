import styled from "styled-components";
import GroupModal from "../components/groupModal";
import ModalPortal from "../components/modalPortal";
import { ReactComponent as GroupMenuIcon } from "../assets/icons/group_menu_icon.svg";
import { ReactComponent as GroupPeopleIcon } from "../assets/icons/group_people_icon.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface GroupBoxProps {
	groupId: number;
	isLeader: boolean;
	leaderId: number;
	color: string;
	title: string;
	memberCount: number;
	handleDeleteGroup: (groupId: number) => void;
}

const GroupBox = ({ groupId, isLeader, leaderId, color, title, memberCount, handleDeleteGroup }: GroupBoxProps) => {
	const navigate = useNavigate();

	const [modalOpen, setModalOpen] = useState(false);

	const handleOpenModal = (event: React.MouseEvent<HTMLDivElement>) => {
		event.stopPropagation();
		setModalOpen(true);
	};

	const handleCloseModal = () => {
		setModalOpen(false);
	};

	const handleGoToMemberList = () => {
		navigate("/members", {
			state: {
				groupId: groupId,
				leaderId: leaderId,
			},
		});
	};

	return (
		<GroupBoxContainer isLeader={isLeader}>
			<ColorBox color={color}></ColorBox>
			<GroupTitle>{title}</GroupTitle>
			<IconBox>
				<IconButton onClick={handleOpenModal}>
					<GroupMenuIcon />
				</IconButton>
			</IconBox>
			<IconButton>
				<PeopleIconBox onClick={handleGoToMemberList}>
					<GroupPeopleIcon />
					<GroupPeopleCount>{memberCount}</GroupPeopleCount>
				</PeopleIconBox>
			</IconButton>

			{modalOpen && (
				<ModalPortal>
					<GroupModal
						groupId={groupId}
						title={title}
						color={color}
						isLeader={isLeader}
						onClose={handleCloseModal}
						handleDeleteGroup={handleDeleteGroup}
					/>
				</ModalPortal>
			)}
		</GroupBoxContainer>
	);
};

export default GroupBox;

const GroupBoxContainer = styled.div<{ isLeader: boolean }>`
	background-color: ${(props) => (props.isLeader ? "pink" : "white")};
	position: relative;
	display: flex;
	align-items: center;
	min-height: 90px;
	width: 320px;
	border: 1px solid #d3d3d3;
	box-sizing: border-box;
	box-shadow: 1px 3px 1px rgba(154, 154, 154, 0.25);
	padding: 0 20px;
	margin: 15px;
`;

const ColorBox = styled.div<{ color: string }>`
	background-color: ${(props) => (props.color ? props.color : "black")};
	height: 30px;
	width: 30px;
	border-radius: 50%;
	margin: 5px;
`;

const GroupTitle = styled.div`
	font-size: 16px;
	font-family: sans-serif;
	margin: 0 auto;
	text-align: center;
`;

const IconBox = styled.div`
	position: absolute;
	top: 0px;
	right: 5px;
`;

const PeopleIconBox = styled.div`
	position: absolute;
	bottom: 3px;
	right: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
`;

const GroupPeopleCount = styled.span``;

const IconButton = styled.div`
	cursor: pointer;
	background-color: transparent;
	border: none;
`;
