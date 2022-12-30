import styled from "styled-components";

const EmailSetting = () => {
	return (
		<EmailSettingContainer>
			<EmailChangeForm>
				<InputLabel htmlFor="newEmail">새 이메일 입력</InputLabel>
				<EmailInput type="email" id="newEmail" placeholder="새 이메일을 입력해주세요."></EmailInput>
				<SubmitButton>전송</SubmitButton>
				<AuthCheckText>이메일 인증이 완료되었습니다.</AuthCheckText>
			</EmailChangeForm>
			<EmailConfirmButton>확인</EmailConfirmButton>
			<TeamLogo>@ToStar</TeamLogo>
		</EmailSettingContainer>
	);
};

export default EmailSetting;

const EmailSettingContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
`;

const EmailChangeForm = styled.form`
	display: flex;
	flex-direction: column;
`;

const InputLabel = styled.label`
	font-family: "Inter";
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 19px;
	text-align: left;
	color: #7a7a7a;
	margin-bottom: 8px;
`;

const EmailInput = styled.input`
	width: 240px;
	height: 38px;
	margin-bottom: 14px;
	border: 0.8px solid #a6a6a6;
`;

const SubmitButton = styled.button`
	position: absolute;
	width: 44px;
	height: 24px;
	left: 248px;
	top: 214px;

	background: #f4f3f3;
	border: 1px solid #878787;
	border-radius: 5px;
`;

const AuthCheckText = styled.span`
	width: 232px;
	height: 25px;
	font-family: "Inter";
	font-style: normal;
	font-weight: 300;
	font-size: 15px;
	line-height: 18px;
	text-align: center;
	color: #848484;
`;

const EmailConfirmButton = styled.button`
	width: 200px;
	height: 50px;
	background: #e86464;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 3px;
	border: none;
	font-family: "Inter";
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
	line-height: 22px;
	text-align: center;
	color: #ffffff;
	margin-top: 53px;
`;

const TeamLogo = styled.p`
	font-family: "Inika";
	font-style: normal;
	font-size: 1rem;
	position: fixed;
	left: 0;
	right: 0;
	bottom: 2rem;
	width: 100vw;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	box-sizing: border-box;
`;
