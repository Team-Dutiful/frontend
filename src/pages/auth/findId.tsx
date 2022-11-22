import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../components/appLogo";
import PreviousButton from "../../components/auth/previousButton";
import SignUpInput from "../../components/auth/signupInput";

const FindId = () => {
	const navigate = useNavigate();

	return (
		<FindIdContainer>
			<PreviousButton onClick={() => navigate("/login")} />
			<Logo />
			<FindIdTypograpy>아이디 찾기</FindIdTypograpy>
			<FindIdTForm>
				<SignUpInput id="name" label="이름" />
				<SignUpInput id="email" label="이메일" />
			</FindIdTForm>
			<FindIdButton>아이디 찾기</FindIdButton>
		</FindIdContainer>
	);
};

export default FindId;

const FindIdContainer = styled.main`
	position: relative;
	height: calc(var(--vh, 1vh) * 100);

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const FindIdTypograpy = styled.p`
	margin: 2rem;
	font-family: "Inika";
	font-weight: 700;
	font-size: 20px;
	color: #474747;
`;

const FindIdTForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 70%;
	gap: 16px;
`;

const FindIdButton = styled.button`
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
