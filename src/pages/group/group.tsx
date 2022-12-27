import styled from "styled-components";
import FootNavigation from "../../components/footNavigation";
import GroupBox from "../../components/groupBox";
import { ReactComponent as GroupAddIcon } from "../../assets/icons/group_add_icon.svg";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getGroups } from "../../api/group/index";

interface MemberProps {
	member_id: number;
	name: string;
}

interface GroupProps {
	group_id: number;
	leader_id: number;
	color: string;
	name: string;
	members: Array<MemberProps>;
}

const Group = () => {
	const navigate = useNavigate();

	const [groups, setGroups] = useState<any[]>([]);

	const goToGroupAdding = () => {
		navigate("/group/add");
	};

	const curUserId = 4;

	const getGroupInfo = async () => {
		const data = await getGroups();
		if (data.status == 200) {
			setGroups(data.body.groups);
		} else {
			alert(data.message);
		}
	};

	useEffect(() => {
		getGroupInfo();
	}, []);

	return (
		<GroupContainer>
			<AddIconBox>
				<IconButton>
					<GroupAddIcon onClick={goToGroupAdding} />
				</IconButton>
			</AddIconBox>
			<Title>나의 그룹</Title>
			{groups.map(({ group_id, leader_id, color, name, members }: GroupProps) => {
				return (
					<GroupBox
						key={group_id}
						groupId={group_id}
						isLeader={curUserId === leader_id}
						color={color}
						title={name}
						memberCount={members.length}
						onClick={() => console.log("123")}
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
	width: 100%;
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

const IconButton = styled.div`
	cursor: pointer;
	background-color: white;
	border: none;
`;
