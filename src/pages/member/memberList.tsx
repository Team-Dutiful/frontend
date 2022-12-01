import styled from "styled-components";
import MemberBox from "../../components/memberBox";
import { ReactComponent as InviteIcon } from "../../assets/icons/invite_button_icon.svg";

const MemberList = () => {
	const members = [
		{ name: "김다인", isLeader: true },
		{ name: "박나영", isLeader: false },
		{ name: "조용우", isLeader: false },
		{ name: "오예환", isLeader: false },
	];

	return (
		<MemberListContainer>
			<InviteIconBox>
				<InviteIcon />
			</InviteIconBox>
			<MemberTitleBox>
				<MemberListTitle>멤버 목록</MemberListTitle>
			</MemberTitleBox>
			{members.map((member) => {
				return <MemberBox name={member.name} isLeader={member.isLeader} />;
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
