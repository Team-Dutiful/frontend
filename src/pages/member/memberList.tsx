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
			const allMember = data.body.group_members.members;
			const leaderMember = allMember.filter((member: any) => member.member_id === data.body.group_members.leader_id);
			const normalMember = allMember.filter((member: any) => member.member_id !== data.body.group_members.leader_id);

			setMembers([...leaderMember, ...normalMember]);
			setLeaderId(data.body.group_members.leader_id);
		} else {
			alert(data.data.message);
		}
	};

	const handleChangeMemberData = (type: string, memberId: number) => {
		if (type === "change") {
			// 리더 변경
			const leaderMember = members?.filter((member: any) => member.member_id === memberId);
			const normalMember = members?.filter((member: any) => member.member_id !== memberId);
			if (leaderMember && normalMember) {
				setMembers([...leaderMember, ...normalMember]);
				setLeaderId(memberId);
			}
		}

		if (type === "delete") {
			// 멤버 강퇴
			setMembers(members?.filter((member) => member.member_id !== memberId));
		}
	};

	const handleGoGroupPage = () => {
		navigate("/group");
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
		console.log("render");
	}, []);

	return (
		<MemberListContainer>
			<IconBox>
				<BackIcon onClick={handleGoGroupPage} className="back" />
				<InviteIcon onClick={handleGoToInviting} className="invite" />
			</IconBox>
			<MemberTitleBox>
				<MemberListTitle>멤버 목록</MemberListTitle>
			</MemberTitleBox>
			{members?.map(({ member_id, name }: MemberProps) => {
				return (
					<MemberBox
						key={member_id}
						memberId={member_id}
						name={name}
						isLeader={member_id == leaderId}
						leaderId={leaderId}
						handleChangeMemberData={handleChangeMemberData}
					/>
				);
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
	width: 100vw;
	align-items: center;

	/* svg {
		position: absolute;
		top: 4px;
		left: 12px;
	} */
`;

const MemberTitleBox = styled.div`
	height: 70px;
	width: 300px;
	text-align: center;

	border-bottom: 1px solid #aeaeae;
`;

const MemberListTitle = styled.title`
	display: block;
	padding-top: 40px;

	font-weight: bold;
	font-family: sans-serif;
`;

const IconBox = styled.div`
	width: 100vw;
	display: flex;
	justify-content: space-between;

	.back {
		margin-left: 20px;
		margin-top: 4px;
	}

	.invite {
		margin-right: 20px;
		margin-top: 15px;
	}
`;
