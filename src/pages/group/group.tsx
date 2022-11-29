import { useState } from "react";
import styled from "styled-components";
import FootNavigation from "../../components/footNavigation";
import GroupModal from "../../components/groupModal";
import ModalPortal from "../../components/modalPortal";
import GroupBox from "../../components/groupBox";
import { ReactComponent as GroupAddIcon } from "../../assets/icons/group_add_icon.svg";

const Group = () => {
	const curUserId = 1;

	const groups = [
		{
			group_id: 1,
			name: "update group",
			color: "#000000",
			leader_id: 1,
			members: [
				{
					member_id: 1,
					name: "김철수",
				},
				{
					member_id: 2,
					name: "김철수",
				},
				{
					member_id: 2,
					name: "김철수",
				},
			],
		},
		{
			group_id: 1,
			name: "hi group",
			color: "#000000",
			leader_id: 2,
			members: [
				{
					member_id: 1,
					name: "김철수",
				},
				{
					member_id: 2,
					name: "김철수",
				},
			],
		},
		{
			group_id: 1,
			name: "update group",
			color: "#000000",
			leader_id: 3,
			members: [
				{
					member_id: 1,
					name: "김철수",
				},
				{
					member_id: 2,
					name: "김철수",
				},
			],
		},
	];

	const [modalOpen, setModalOpen] = useState(false);
	const [modalTitle, setModalTitle] = useState("신생아실 간호사 모임");
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
			{groups.map(({ leader_id, color, name, members }) => {
				return (
					<>
						<GroupBox
							isLeader={curUserId == leader_id}
							color={color}
							title={name}
							memberCount={members.length}
							handleOpenModal={handleOpenModal}
						/>
						{modalOpen && (
							<ModalPortal>
								<GroupModal title={name} isLeader={curUserId === leader_id} onClose={handleCloseModal} />
							</ModalPortal>
						)}
					</>
				);
			})}

			<FootNavigation></FootNavigation>
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
