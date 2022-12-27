import styled from "styled-components";
import MemberBox from "../../components/memberBox";
import { ReactComponent as InviteIcon } from "../../assets/icons/invite_button_icon.svg";
import { ReactComponent as BackIcon } from "../../assets/icons/back_button_icon.svg";
import { useCallback, useState, useEffect } from "react";
import { getMembers } from "../../api/group/index";
import { useNavigate, useLocation } from "react-router-dom";

interface MemberProps {
	member_id: number;
	name: string;
}

const MemberList = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const [members, setMembers] = useState<MemberProps[]>();
	const [groupId, setGroupId] = useState(location.state.groupId);
	const [leaderId, setLeaderId] = useState(0);

	const setMemberData = async () => {
		const data = await getMembers(groupId);
		if (data.status == 200) {
			setMembers(data.body.group_members.members);
			setLeaderId(data.body.group_members.leader_id);
		} else {
			alert(data.data.message);
		}
	};

	const handleGoBackPage = () => {
		navigate(-1);
	};

	const handleGoToInviting = () => {
		navigate("/members/invite", {
			state: {
				groupId: groupId,
			},
		});
	};

	useEffect(() => {
		setMemberData();
	}, []);

	return (
		<MemberListContainer>
			<BackIcon onClick={handleGoBackPage} />
			<InviteIconBox>
				<InviteIcon onClick={handleGoToInviting} />
			</InviteIconBox>
			<MemberTitleBox>
				<MemberListTitle>멤버 목록</MemberListTitle>
			</MemberTitleBox>
			{members?.map(({ member_id, name }: MemberProps) => {
				return <MemberBox memberId={member_id} name={name} isLeader={member_id == leaderId} />;
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

	/* svg {
		position: absolute;
		top: 4px;
		left: 12px;
	} */
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
