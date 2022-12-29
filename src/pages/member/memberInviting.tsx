import styled from "styled-components";
import { ColorResult, SketchPicker } from "react-color";
import { useCallback, useState, useEffect } from "react";
import { ReactComponent as BackIcon } from "../../assets/icons/back_button_icon.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { inviteMember } from "../../api/group";

const MemberInviting = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const handleGoBackPage = () => {
		navigate(-1);
	};

	const [email, setEmail] = useState("");
	const [groupId, setGroupId] = useState(location.state.groupId);

	const handleMemberEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const handleMemberInviting = async (groupId: number, email: string) => {
		const data = await inviteMember(groupId, email);
		if (data.status == 200) {
			alert("초대 완료");
			navigate("/members", {
				state: {
					groupId: groupId,
				},
			});
		} else if (data.status == 400) {
			alert(data.data.message);
		}
	};

	return (
		<MemberInvitingContainer>
			<BackIcon onClick={handleGoBackPage} />
			<MemberInviteTitle>그룹 초대</MemberInviteTitle>
			<MemberBox>
				<MemberBoxTitle>초대할 회원의 이메일을 입력해주세요.</MemberBoxTitle>
				<MemberEmailInput required value={email} onChange={handleMemberEmail}></MemberEmailInput>
			</MemberBox>
			<MemberInvitingOkayButton>
				<MemberInvitingText onClick={() => handleMemberInviting(groupId, email)}>확인</MemberInvitingText>
			</MemberInvitingOkayButton>
		</MemberInvitingContainer>
	);
};

export default MemberInviting;

const MemberInvitingContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 100vw;
	align-items: center;

	svg {
		position: absolute;
		top: 4px;
		left: 12px;
	}
`;

const MemberInviteTitle = styled.h1`
	font-family: sans-serif;
	font-size: 20px;
	margin: 70px 0px 70px 0px;
`;

const MemberBox = styled.div`
	align-items: center;

	height: 70px;
	width: 250px;
	box-sizing: border-box;
	padding: 30px 0px;
`;

const MemberBoxTitle = styled.h3`
	font-family: sans-serif;
	margin: 0px 0px 4px 0px;
`;

const MemberEmailInput = styled.input`
	width: 240px;
	height: 30px;
	border: solid 0.5px #e2e2e2;
`;

const MemberInvitingOkayButton = styled.button`
	background-color: #e86464;
	height: 56px;
	width: 235px;
	border: 0px;

	cursor: pointer;
	padding: 0;
	margin: 70px 0px 0px 0px;
	box-shadow: 1px 3px 1px rgba(0, 0, 0, 0.25);
`;

const MemberInvitingText = styled.h5`
	color: white;
	font-weight: bold;
`;
