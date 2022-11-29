import { useState } from "react";
import styled from "styled-components";
import FootNavigation from "../../components/footNavigation";
import GroupModal from "../../components/groupModal";
import ModalPortal from "../../components/modalPortal";
import { ReactComponent as GroupAddIcon } from "../../assets/icons/group_add_icon.svg";
import { ReactComponent as GroupMenuIcon } from "../../assets/icons/group_menu_icon.svg";
import { ReactComponent as GroupPeopleIcon } from "../../assets/icons/group_people_icon.svg";

const Group = () => {
	const [modalOpen, setModalOpen] = useState(false);

	const handleOpenModal = () => {
		setModalOpen(true);
	};

	const handleCloseModal = () => {
		setModalOpen(false);
	};

	return (
		<GroupContainer>
			<AddIconBox>
				<GroupAddIcon />
			</AddIconBox>
			<Title>나의 그룹</Title>
			<GroupBox>
				<ColorBox></ColorBox>
				<GroupTitle>신생아실 간호사 모임</GroupTitle>
				<IconBox>
					<GroupMenuIcon onClick={handleOpenModal} />
				</IconBox>
				<PeopleIconBox>
					<GroupPeopleIcon />
					<GroupPeopleCount>999</GroupPeopleCount>
				</PeopleIconBox>
			</GroupBox>
			<LeaderGroupBox>
				<ColorBox></ColorBox>
				<GroupTitle>신생아실 간호사 모임</GroupTitle>
				<IconBox>
					<GroupMenuIcon />
				</IconBox>
				<PeopleIconBox>
					<GroupPeopleIcon />
					<GroupPeopleCount>999</GroupPeopleCount>
				</PeopleIconBox>
			</LeaderGroupBox>
			<FootNavigation></FootNavigation>
			{modalOpen && (
				<ModalPortal>
					<GroupModal />
				</ModalPortal>
			)}
		</GroupContainer>
	);
};

export default Group;

const GroupContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 360px;
	align-items: center;
`;

const AddIconBox = styled.div`
	position: absolute;
	top: 15px;
	right: 18px;
`;

const Title = styled.h1`
	font-family: sans-serif;
	font-size: 20px;
	text-align: center;
	font-weight: bold;

	margin: 70px 0px 18px 0px;
`;

const GroupBox = styled.div`
	background-color: #ffffff;
	position: relative;
	display: flex;
	align-items: center;
	height: 90px;
	width: 320px;
	border: 1px solid #d3d3d3;
	box-sizing: border-box;
	box-shadow: 1px 3px 1px rgba(154, 154, 154, 0.25);
	padding: 0 20px;
	margin: 15px;
`;
const LeaderGroupBox = styled.div`
	background-color: #ffc5c5;
	position: relative;
	display: flex;
	align-items: center;
	height: 90px;
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
