import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../components/appLogo";
import PreviousButton from "../../components/auth/previousButton";
import LabelInput from "../../components/auth/labelInput";
import { useState } from "react";
import { sendAuthCodeAtFindPassword } from "../../api/auth";

const FindPassword = () => {
	const [user, setUser] = useState({
		email: "",
		code: "",
	});
	const [isSend, setIsSend] = useState(false);
	const [authCode, setAuthCode] = useState("");
	const [checkCode, setCheckCode] = useState(false);
	const navigate = useNavigate();

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
		sendAuthCodeAtFindPassword(user.email)
			.then((res) => {
				console.log(res);
				setAuthCode(res.data.body.authNum);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleClickCheckButton = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault();
		if (user.code === String(authCode)) setCheckCode(true);
	};

	const handleClickFindPasswordButton = () => {
		navigate("/change-password", { state: user.email });
	};

	return (
		<FindPasswordContainer>
			<PreviousButton onClick={() => navigate("/login")} />
			<Logo />
			<FindPasswordTypograpy>비밀번호 찾기</FindPasswordTypograpy>
			<FindPasswordTForm>
				<LabelInput
					id="email"
					label="이메일"
					buttonLabel="전송"
					onChange={handleChangeUserInfo}
					onClick={handleClickSendMailButton}
				/>
				{isSend ? <LabelInputBottomText color="#848484">인증코드가 전송되었습니다.</LabelInputBottomText> : null}
				{isSend && (
					<>
						<LabelInput
							id="code"
							label="인증코드"
							buttonLabel="확인"
							onClick={handleClickCheckButton}
							onChange={handleChangeUserInfo}
						/>
						{checkCode ? <LabelInputBottomText color="#1b9f2b">인증이 완료되었습니다.</LabelInputBottomText> : null}
					</>
				)}
			</FindPasswordTForm>
			<FindPasswordButton disabled={!checkCode} onClick={handleClickFindPasswordButton}>
				비밀번호 재설정하기
			</FindPasswordButton>
		</FindPasswordContainer>
	);
};

export default FindPassword;

const FindPasswordContainer = styled.main`
	position: relative;
	height: calc(var(--vh, 1vh) * 100);

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const FindPasswordTypograpy = styled.p`
	margin: 2rem;
	font-family: "Inika";
	font-weight: 700;
	font-size: 20px;
	color: #474747;
`;

const FindPasswordTForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 70%;
	gap: 16px;
`;

const FindPasswordButton = styled.button`
	margin-top: 2rem;
	width: 12rem;
	height: 2rem;

	background: #ec8989;
	border: none;
	outline: none;
	border-radius: 5px;

	color: #fff;
	font-family: "Inter";
	font-weight: 300;
	font-size: 1rem;

	:disabled {
		background-color: #e5e4e4;
		color: #adadad;
	}
`;

const LabelInputBottomText = styled.p<{ color: string }>`
	height: 0.5rem;
	font-size: 14px;
	color: ${(props) => props.color};
	line-height: 2px;
`;
