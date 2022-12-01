import styled from "styled-components";
import FootNavigation from "../../components/footNavigation";
import GroupBox from "../../components/groupBox";
import { ReactComponent as GroupAddIcon } from "../../assets/icons/group_add_icon.svg";
import { useNavigate } from "react-router-dom";

const Group = () => {
	const navigate = useNavigate();

	const goToGroupAdding = () => {
		navigate("/group/add");
	};
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

	return (
		<GroupContainer>
			<AddIconBox>
				<GroupAddIcon onClick={goToGroupAdding} />
			</AddIconBox>
			<Title>나의 그룹</Title>
			{groups.map(({ leader_id, color, name, members }, index) => {
				return (
					<GroupBox
						key={index}
						isLeader={curUserId == leader_id}
						color={color}
						title={name}
						memberCount={members.length}
					/>
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
