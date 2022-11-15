import styled from "styled-components";

const Login = () => {
	return (
		<LoginContainer>
			<Logo>Dutiful</Logo>
			<TeamLogo>@ToStar</TeamLogo>
			<LoginTypograph>로그인</LoginTypograph>
			<LoginInput placeholder="아이디를 입력해주세요." />
			<LoginInput placeholder="비밀번호를 입력해주세요." />
			<LoginButton onClick={() => console.log()}>확인</LoginButton>
			<LoginTextButton>회원가입</LoginTextButton>
			<LoginTextButton>아이디 / 비밀번호 찾기</LoginTextButton>
			<LoginTypograph>간편 로그인</LoginTypograph>
			<CustomButton backgroundColor="#f9e000">카카오톡으로 로그인</CustomButton>
			<CustomButton backgroundColor="#00C73C">네이버로 로그인</CustomButton>
		</LoginContainer>
	);
};

export default Login;

const LoginContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: calc(var(--vh, 1vh) * 100);
`;

const LoginInput = styled.input`
	width: 15rem;
	height: 2rem;
	padding: 2px 10px 2px 10px;
	outline: none;
	color: #6f6f6f;
	background: #ffffff;
	border: 0.8px solid #a6a6a6;
`;

const LoginButton = styled.button`
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

const LoginTextButton = styled.button`
	font-family: "Inter";
	font-weight: 400;
	font-size: 1rem;

	border: none;
	outlie: none;
	background-color: transparent;

	color: #a5a5a5;
`;

const LoginTypograph = styled.p`
	font-family: "Inika";
	font-weight: 700;
	font-size: 20px;
	color: #474747;
`;

const Logo = styled.div`
	font-family: "Inika";
	font-size: 2rem;
	color: #ff8181;
`;

const TeamLogo = styled.p`
	position: absolute;
	bottom: 2rem;
	font-family: "Inika";
	font-style: normal;
	font-size: 1rem;
`;

const CustomButton = styled.button<{ backgroundColor: string }>`
	width: 15rem;
	height: 2.5rem;
	border: none;
	border-radius: 8px;
	background-color: ${(props) => props.backgroundColor};
	outline: none;
`;
