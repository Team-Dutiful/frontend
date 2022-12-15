import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../components/appLogo";
import LabelInput from "../../components/auth/labelInput";
import { useState } from "react";
import { changePasswordByEmail } from "../../api/auth";

const ChangePassword = () => {
	const [password, setPassword] = useState("");
	const [checkPassword, setCheckPassword] = useState("");
	const navigate = useNavigate();
	const location = useLocation();
	const email = location.state;

	const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

	const handleChangeCheckPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCheckPassword(event.target.value);
	};

	const handleClickChangeButton = async () => {
		const userInfo = await changePasswordByEmail(email, password);
		if (userInfo.identification) {
			navigate("login");
		} else {
			alert("뭔가 잘못 됐어");
		}
	};

	return (
		<ChangePasswordContainer>
			<Logo />
			<ChangePasswordTypograpy>비밀번호 변경하기</ChangePasswordTypograpy>
			<ChangePasswordTForm>
				<>
					<LabelInput
						id="password"
						type="password"
						label="새 비밀번호"
						value={password}
						onChange={handleChangePassword}
					/>
					{password.length < 5 && password.length > 1 && (
						<LabelInputBottomText color="#e86464">패스워드는 5자 이상 입력해주세요.</LabelInputBottomText>
					)}
				</>
				<>
					<LabelInput
						id="check-password"
						type="password"
						label="새 비밀번호 확인"
						value={checkPassword}
						onChange={handleChangeCheckPassword}
					/>
					<LabelInputBottomText color={password === checkPassword ? "#74d277" : "#e86464"}>
						{password.length < 5
							? null
							: password === checkPassword
							? "비밀번호가 일치합니다."
							: "비밀번호를 다시 확인해주세요."}
					</LabelInputBottomText>
				</>
			</ChangePasswordTForm>
			<ChangePasswordButton
				disabled={!(password !== "" && checkPassword !== "" && password === checkPassword)}
				onClick={handleClickChangeButton}
			>
				변경하기
			</ChangePasswordButton>
		</ChangePasswordContainer>
	);
};

export default ChangePassword;

const ChangePasswordContainer = styled.main`
	position: relative;
	height: calc(var(--vh, 1vh) * 100);

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const ChangePasswordTypograpy = styled.p`
	margin: 2rem;
	font-family: "Inika";
	font-weight: 700;
	font-size: 20px;
	color: #474747;
`;

const ChangePasswordTForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 70%;
	gap: 16px;
`;

const ChangePasswordButton = styled.button`
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
