import styled from "styled-components";
import TeamLogo from "../../components/teamLogo";
import { useNavigate } from "react-router-dom";
import LabelInput from "../../components/auth/labelInput";
import { useState } from "react";
import PreviousButton from "../../components/auth/previousButton";
import { sendSignUpMail, signUp } from "../../api/auth";

const SignUp = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState({
		id: "",
		password: "",
		checkPassword: "",
		name: "",
		email: "",
		code: "",
	});
	const [isSend, setIsSend] = useState(false);
	const [checkCode, setCheckCode] = useState(false);
	const [authCode, setAuthCode] = useState("");

	const handleChangeUserInfo = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = event.target;
		setUser({
			...user,
			[id]: value,
		});
	};

	const handleClickSendMailButton = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault();
		setIsSend(true);
		const authNum = await sendSignUpMail(user.email);
		setAuthCode(authNum);
	};

	const handleClickCheckButton = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault();
		if (user.code === String(authCode)) {
			setCheckCode(true);
		}
	};

	const handleClickSignUpButton = async () => {
		if (checkCode && user.checkPassword === user.password) {
			const { id, password, name, email } = user;
			const userInfo = await signUp(id, password, name, email);
			if (userInfo.identification) {
				alert("가입이 완료되었습니다.");
				navigate("/login");
			} else {
				alert("가입 실패");
			}
		} else {
			alert("잘못된 입력 정보가 존재합니다.");
		}
	};

	return (
		<SignUpContainer>
			<PreviousButton onClick={() => navigate("/login")} />
			<SignUpSection>
				<SignUpTypograpy>회원가입</SignUpTypograpy>
				<SignUpForm>
					<LabelInput id="id" label="아이디" autoComplete="userid" value={user.id} onChange={handleChangeUserInfo} />
					<>
						<LabelInput
							id="password"
							label="패스워드"
							type="password"
							autoComplete="new-password"
							value={user.password}
							onChange={handleChangeUserInfo}
						/>
						{user.password.length < 5 && user.password.length > 1 && (
							<SignUpInputBottomText color="#e86464">패스워드는 5자 이상 입력해주세요.</SignUpInputBottomText>
						)}
					</>
					<>
						<LabelInput
							id="checkPassword"
							label="패스워드 확인"
							type="password"
							autoComplete="new-password"
							value={user.checkPassword}
							onChange={handleChangeUserInfo}
						/>
						<SignUpInputBottomText color={user.password === user.checkPassword ? "#74d277" : "#e86464"}>
							{user.password.length < 5
								? null
								: user.password === user.checkPassword
								? "비밀번호가 일치합니다."
								: "비밀번호를 다시 확인해주세요."}
						</SignUpInputBottomText>
					</>
					<LabelInput
						id="name"
						label="이름"
						autoComplete="username"
						value={user.name}
						onChange={handleChangeUserInfo}
					/>
					<>
						<LabelInput
							id="email"
							label="이메일"
							buttonLabel="전송"
							onClick={handleClickSendMailButton}
							value={user.email}
							onChange={handleChangeUserInfo}
							checkCode={false}
						/>
						{isSend ? <SignUpInputBottomText color="#848484">인증코드가 전송되었습니다.</SignUpInputBottomText> : null}
					</>
					{isSend && (
						<>
							<LabelInput
								id="code"
								label="인증코드"
								buttonLabel="확인"
								onClick={handleClickCheckButton}
								value={user.code}
								onChange={handleChangeUserInfo}
								checkCode={checkCode}
							/>
							{checkCode ? (
								<SignUpInputBottomText color="#848484">이메일 인증이 완료되었습니다.</SignUpInputBottomText>
							) : null}
						</>
					)}
				</SignUpForm>
				<SignUpButton onClick={handleClickSignUpButton}>가입</SignUpButton>
			</SignUpSection>
			<TeamLogo />
		</SignUpContainer>
	);
};

export default SignUp;

const SignUpContainer = styled.main`
	position: relative;
	height: calc(var(--vh, 1vh) * 100);
`;

const SignUpSection = styled.section`
	position: relative;
	top: 35%;
	transform: translateY(-35%);

	display: flex;
	flex-direction: column;
	align-items: center;
`;

const SignUpForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 70%;
	gap: 16px;
`;

const SignUpTypograpy = styled.p`
	margin-bottom: 2rem;
	font-family: "Inika";
	font-weight: 700;
	font-size: 20px;
	color: #474747;
`;

const SignUpButton = styled.button`
	margin-top: 2rem;
	width: 120px;
	height: 31px;

	background: #ec8989;
	border: none;
	outline: none;
	border-radius: 5px;

	color: #fff;
	font-family: "Inter";
	font-weight: 300;
	font-size: 1rem;
`;

const SignUpInputBottomText = styled.p<{ color: string }>`
	height: 0.5rem;
	font-size: 14px;
	color: ${(props) => props.color};
	line-height: 2px;
`;
