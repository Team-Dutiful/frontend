import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { sendSignUpMail } from "../../api/auth";
import { changeUserEmail } from "../../api/auth";
import LabelInput from "../../components/auth/labelInput";
import { userState } from "../../recoil/user";

const EmailSetting = () => {
	const navigate = useNavigate();
	const userInfo = useRecoilValue(userState);
	const setUser = useSetRecoilState(userState);
	const [isSend, setIsSend] = useState(false);
	const [authCode, setAuthCode] = useState("");
	const [newEmail, setNewEmail] = useState("");
	const [checkCode, setCheckCode] = useState(false);
	const [code, setCode] = useState("");

	const handleClickSendMailButton = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		setIsSend(true);
		const authNum = await sendSignUpMail(newEmail);
		setAuthCode(authNum);
	};

	const handleClickCheckButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		if (code === String(authCode)) {
			setCheckCode(true);
		}
	};

	const handleChangeNewEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewEmail(e.target.value);
	};

	const handleChangeCode = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCode(e.target.value);
	};

	const handleSubmitEmail = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		try {
			await changeUserEmail(newEmail);
			if (userInfo) {
				setUser({
					...userInfo,
					email: newEmail,
				});
			}
			navigate("/settings");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<EmailSettingContainer>
			<EmailChangeForm>
				<InputLabel htmlFor="newEmail">새 이메일 입력</InputLabel>
				<EmailInput
					type="email"
					id="newEmail"
					placeholder="새 이메일을 입력해주세요."
					onChange={handleChangeNewEmail}
				/>
				<SubmitButton onClick={handleClickSendMailButton}>전송</SubmitButton>
				{isSend && (
					<>
						<LabelInput
							id="code"
							label="인증코드"
							buttonLabel="확인"
							onChange={handleChangeCode}
							onClick={handleClickCheckButton}
							checkCode={checkCode}
						/>
						{checkCode ? <AuthCheckText>이메일 인증이 완료되었습니다.</AuthCheckText> : null}
					</>
				)}
				<EmailConfirmButton onClick={handleSubmitEmail}>확인</EmailConfirmButton>
			</EmailChangeForm>
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
	left: 68vw;
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
	align-self: center;
`;

const TeamLogo = styled.p`
	font-family: "Inika";
	font-style: normal;
	font-size: 1rem;
	position: fixed;
	left: 0;
	right: 0;
	bottom: 2rem;
	width: 360px;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	box-sizing: border-box;
`;
