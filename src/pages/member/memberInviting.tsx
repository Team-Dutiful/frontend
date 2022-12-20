import styled from "styled-components";
import { ColorResult, SketchPicker } from "react-color";
import { useCallback, useState, useEffect } from "react";
import { ReactComponent as BackIcon } from "../../assets/icons/back_button_icon.svg";
import { useNavigate } from "react-router-dom";
import { inviteMember } from "../../api/group";

const MemberInviting = () => {
	const navigate = useNavigate();
	const handleGoBackPage = () => {
		navigate(-1);
	};
	const [email, setEmail] = useState("");

	const handleMemberEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	return (
		<MemberInvitingContainer>
			<BackIcon onClick={handleGoBackPage} />
			<MemberInviteTitle>그룹 초대</MemberInviteTitle>
			<MemberBox>
				<MemberBoxTitle>초대할 회원의 이메일을 입력해주세요.</MemberBoxTitle>
				<MemberEmailInput required value={email} onChange={handleMemberEmail}></MemberEmailInput>
			</MemberBox>
		</MemberInvitingContainer>
	);
};

export default MemberInviting;

const MemberInvitingContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 360px;
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

// const Member;
