import styled from "styled-components";
import TeamLogo from "../../components/teamLogo";
import { useNavigate } from "react-router-dom";
import SignUpInput from "../../components/auth/signupInput";
import { useState } from "react";
import PreviousButton from "../../components/auth/previousButton";
import { sendAuthCodeEmail, signUp } from "../../api/auth";

// TO DO
// 비밀번호 확인 칠때부터 비밀번호 확인해주세요 경고문 띄우기
// 비밀번호 5자 미만일 때 경고문 띄우기
// 가입 완료시 성공 or 실패 모달 띄우고 페이지 넘어가기
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

	const handleClickSendMailButton = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault();
		setIsSend(true);
		sendAuthCodeEmail(user.email)
			.then((res) => {
				setAuthCode(res.data.body.authNum);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleClickCheckButton = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault();
		if (user.code === String(authCode)) {
			setCheckCode(true);
		}
	};

	const handleClickSignUpButton = () => {
		if (checkCode && user.checkPassword === user.password) {
			const { id, password, name, email } = user;
			signUp(id, password, name, email)
				.then((res) => {
					console.log(res);
					navigate("/login");
				})
				.catch((error) => {
					console.log(error);
				});
		}
	};

	return (
		<SignUpContainer>
			<PreviousButton onClick={() => navigate("/login")} />
			<SignUpSection>
				<SignUpTypograpy>회원가입</SignUpTypograpy>
				<SignUpForm>
					<SignUpInput id="id" label="아이디" autoComplete="userid" value={user.id} onChange={handleChangeUserInfo} />
					<SignUpInput
						id="password"
						label="비밀번호"
						type="password"
						autoComplete="new-password"
						value={user.password}
						onChange={handleChangeUserInfo}
					/>
					<>
						<SignUpInput
							id="checkPassword"
							label="비밀번호 확인"
							type="password"
							autoComplete="new-password"
							value={user.checkPassword}
							onChange={handleChangeUserInfo}
						/>
						<SignUpInputBottomText color={user.password === user.checkPassword ? "#74d277" : "#e86464"}>
							{user.password === ""
								? null
								: user.password === user.checkPassword
								? "비밀번호가 일치합니다."
								: "비밀번호를 다시 확인해주세요."}
						</SignUpInputBottomText>
					</>
					<SignUpInput
						id="name"
						label="이름"
						autoComplete="username"
						value={user.name}
						onChange={handleChangeUserInfo}
					/>
					<>
						<SignUpInput
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
					<>
						<SignUpInput
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
