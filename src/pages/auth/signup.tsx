import styled from "styled-components";
import TeamLogo from "../../components/teamLogo";
import { useNavigate } from "react-router-dom";
import LabelInput from "../../components/auth/labelInput";
import { useState } from "react";
import PreviousButton from "../../components/auth/previousButton";
import { sendSignUpMail, signUp } from "../../api/auth";
import Modal from "../../components/auth/modal";
import ModalPortal from "../../components/modalPortal";
import SignUpModal from "../../components/auth/signUpModal";

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
	const [modalState, setModalState] = useState<null | "success" | "fail">(null);

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
				setModalState("success");
			} else {
				setModalState("fail");
			}
		} else {
			setModalState("fail");
		}
	};

	const handleClickModalClose = () => {
		setModalState(null);
	};

	return (
		<>
			<SignUpContainer>
				<PreviousButton onClick={() => navigate("/login")} />
				<SignUpSection>
					<SignUpTypograpy>????????????</SignUpTypograpy>
					<SignUpForm>
						<LabelInput id="id" label="?????????" autoComplete="userid" value={user.id} onChange={handleChangeUserInfo} />
						<>
							<LabelInput
								id="password"
								label="????????????"
								type="password"
								autoComplete="new-password"
								value={user.password}
								onChange={handleChangeUserInfo}
							/>
							{user.password.length < 5 && user.password.length > 1 && (
								<SignUpInputBottomText color="#e86464">??????????????? 5??? ?????? ??????????????????.</SignUpInputBottomText>
							)}
						</>
						<>
							<LabelInput
								id="checkPassword"
								label="???????????? ??????"
								type="password"
								autoComplete="new-password"
								value={user.checkPassword}
								onChange={handleChangeUserInfo}
							/>
							<SignUpInputBottomText color={user.password === user.checkPassword ? "#74d277" : "#e86464"}>
								{user.password.length < 5
									? null
									: user.password === user.checkPassword
									? "??????????????? ???????????????."
									: "??????????????? ?????? ??????????????????."}
							</SignUpInputBottomText>
						</>
						<LabelInput
							id="name"
							label="??????"
							autoComplete="username"
							value={user.name}
							onChange={handleChangeUserInfo}
						/>
						<>
							<LabelInput
								id="email"
								label="?????????"
								buttonLabel="??????"
								onClick={handleClickSendMailButton}
								value={user.email}
								onChange={handleChangeUserInfo}
								checkCode={false}
							/>
							{isSend ? (
								<SignUpInputBottomText color="#848484">??????????????? ?????????????????????.</SignUpInputBottomText>
							) : null}
						</>
						{isSend && (
							<>
								<LabelInput
									id="code"
									label="????????????"
									buttonLabel="??????"
									onClick={handleClickCheckButton}
									value={user.code}
									onChange={handleChangeUserInfo}
									checkCode={checkCode}
								/>
								{checkCode ? (
									<SignUpInputBottomText color="#848484">????????? ????????? ?????????????????????.</SignUpInputBottomText>
								) : null}
							</>
						)}
					</SignUpForm>
					<SignUpButton onClick={handleClickSignUpButton}>??????</SignUpButton>
				</SignUpSection>
				<TeamLogo />
			</SignUpContainer>
			{modalState && (
				<ModalPortal>
					<Modal>
						<SignUpModal modalState={modalState} onClose={handleClickModalClose} />
					</Modal>
				</ModalPortal>
			)}
		</>
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
