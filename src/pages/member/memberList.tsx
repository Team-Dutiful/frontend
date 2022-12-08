import styled from "styled-components";
import MemberBox from "../../components/memberBox";
import { ReactComponent as InviteIcon } from "../../assets/icons/invite_button_icon.svg";
import { useCallback, useState, useEffect } from "react";
import { getMembers } from "../../api/group/index";
import { useNavigate, useLocation } from "react-router-dom";

interface MemberProps {
	member_id: number;
	name: string;
}

const MemberList = () => {
	const location = useLocation();

	const [members, setMembers] = useState<MemberProps[]>();
	const [groupId, setGroupId] = useState(location.state.groupId);
	const [leaderId, setLeaderId] = useState(0);

	const getMemberList = () => {
		return getMembers(groupId)
			.then((res) => {
				return res.data.body.group_members;
			})
			.catch((err) => console.log(err));
	};

	const setMemberData = async () => {
		const res = await getMemberList();
		setMembers(res.members);
		setLeaderId(res.leader_id);
	};

	useEffect(() => {
		setMemberData();
	}, []);

	return (
		<MemberListContainer>
			<InviteIconBox>
				<InviteIcon />
			</InviteIconBox>
			<MemberTitleBox>
				<MemberListTitle>멤버 목록</MemberListTitle>
			</MemberTitleBox>
			{members?.map(({ member_id, name }: MemberProps) => {
				return <MemberBox name={name} isLeader={member_id == leaderId} />;
			})}
		</MemberListContainer>
	);
};

export default MemberList;

const MemberListContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 360px;
	align-items: center;
`;

const MemberTitleBox = styled.div`
	height: 100px;
	width: 300px;
	text-align: center;

	border-bottom: 1px solid #aeaeae;
`;

const MemberListTitle = styled.title`
	display: block;
	padding-top: 70px;

	font-weight: bold;
	font-family: sans-serif;
`;

const InviteIconBox = styled.div`
	position: absolute;
	top: 15px;
	right: 18px;
`;
