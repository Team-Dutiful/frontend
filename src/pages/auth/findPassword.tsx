import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../components/appLogo";
import PreviousButton from "../../components/auth/previousButton";
import LabelInput from "../../components/auth/labelInput";

const FindPassword = () => {
	const navigate = useNavigate();

	return (
		<FindPasswordContainer>
			<PreviousButton onClick={() => navigate("/login")} />
			<Logo />
			<FindPasswordTypograpy>비밀번호 찾기</FindPasswordTypograpy>
			<FindPasswordTForm>
				<LabelInput id="email" label="이메일" />
			</FindPasswordTForm>
			<FindPasswordButton>임시 비밀번호 발급</FindPasswordButton>
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
`;
