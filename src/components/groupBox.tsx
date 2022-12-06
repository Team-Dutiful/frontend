import styled from "styled-components";
import GroupModal from "../components/groupModal";
import ModalPortal from "../components/modalPortal";
import { ReactComponent as GroupMenuIcon } from "../assets/icons/group_menu_icon.svg";
import { ReactComponent as GroupPeopleIcon } from "../assets/icons/group_people_icon.svg";
import { useState } from "react";

interface GroupBoxProps {
	isLeader: boolean;
	color: string;
	title: string;
	memberCount: number;
}

const GroupBox = ({ isLeader, color, title, memberCount }: GroupBoxProps) => {
	const [modalOpen, setModalOpen] = useState(false);

	const handleOpenModal = () => {
		setModalOpen(true);
	};

	const handleCloseModal = () => {
		setModalOpen(false);
	};

	return (
		<GroupBoxContainer isLeader={isLeader}>
			<ColorBox color={color}></ColorBox>
			<GroupTitle>{title}</GroupTitle>
			<IconBox>
				<GroupMenuIcon onClick={handleOpenModal} />
			</IconBox>
			<PeopleIconBox>
				<GroupPeopleIcon />
				<GroupPeopleCount>{memberCount}</GroupPeopleCount>
			</PeopleIconBox>
			{modalOpen && (
				<ModalPortal>
					<GroupModal title={title} isLeader={isLeader} onClose={handleCloseModal} />
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

const ColorBox = styled.div`
	background-color: red;
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
