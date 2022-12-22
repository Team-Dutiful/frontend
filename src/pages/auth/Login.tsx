import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../../components/appLogo";
import TeamLogo from "../../components/teamLogo";
import { ReactComponent as KakoIcon } from "../../assets/icons/auth_kakao.svg";
import { ReactComponent as NaverIcon } from "../../assets/icons/auth_naver.svg";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/auth";
import { useSetRecoilState } from "recoil";
import { userState } from "../../recoil/user";

const {
	VITE_KAKAO_REST_API_KEY, //
	VITE_KAKAO_REDIRECT_URI,
	VITE_NAVER_CLIENT_ID,
	VITE_NAVER_REDIRECT_URI,
} = import.meta.env;

const Login = () => {
	const setUser = useSetRecoilState(userState);
	const [userInfo, setUserInfo] = useState({
		id: "",
		password: "",
	});
	const navigate = useNavigate();

	const handleChangeLoginInfo = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = event.target;
		setUserInfo({
			...userInfo,
			[id]: value,
		});
	};

	const handleClickLoginButton = async () => {
		const user = await login(userInfo.id, userInfo.password);
		if (user.identification) {
			setUser({
				user_id: user.user_id,
				identification: user.identification,
				name: user.name,
				email: user.email,
			});
			navigate("/calendar");
		} else {
			alert("로그인 실패!");
		}
	};

	const handleClickKakaoLogin = () => {
		const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${VITE_KAKAO_REST_API_KEY}&redirect_uri=${VITE_KAKAO_REDIRECT_URI}&response_type=code`;
		window.location.href = KAKAO_AUTH_URL;
	};

	// https://nid.naver.com/oauth2.0/authorize?client_id={클라이언트 아이디}&response_type=code&redirect_uri={개발자 센터에 등록한 콜백 URL(URL 인코딩)}&state={상태 토큰}
	const hadleClickNaverLogin = () => {
		const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?client_id=${VITE_NAVER_CLIENT_ID}&response_type=code&redirect_uri=${VITE_NAVER_REDIRECT_URI}&state=12345`;
		window.location.href = NAVER_AUTH_URL;
	};

	return (
		<LoginContainer>
			<LoginSection>
				<Logo fontSize="2rem" />
				<LoginBox style={{ marginTop: "3rem" }}>
					<LoginTypograph>로그인</LoginTypograph>
					<LoginInputButtonGroup>
						<LoginInput id="id" placeholder="아이디를 입력해주세요." onChange={handleChangeLoginInfo} />
						<LoginInput
							id="password"
							placeholder="비밀번호를 입력해주세요."
							type="password"
							autoComplete="on"
							onChange={handleChangeLoginInfo}
						/>
					</LoginInputButtonGroup>
					<LoginButton onClick={handleClickLoginButton}>확인</LoginButton>
					<LoginTextButtonGroup>
						<LoginTextButton onClick={() => navigate("/signup")}>회원가입</LoginTextButton>
						<div>
							<LoginTextButton onClick={() => navigate("/find-id")}>아이디 </LoginTextButton>/
							<LoginTextButton onClick={() => navigate("/find-password")}>비밀번호 찾기</LoginTextButton>
						</div>
					</LoginTextButtonGroup>
				</LoginBox>
				<LoginBox style={{ marginTop: "2rem" }}>
					<LoginTypograph>간편 로그인</LoginTypograph>
					<CustomButton backgroundColor="#f9e000" onClick={handleClickKakaoLogin}>
						<KakoIcon width="14px" height="14px" />
						카카오톡으로 로그인
					</CustomButton>
					<CustomButton color="#fff" backgroundColor="#00C73C" onClick={hadleClickNaverLogin}>
						<NaverIcon width="10px" height="10px" />
						네이버로 로그인
					</CustomButton>
				</LoginBox>
			</LoginSection>
			<TeamLogo />
		</LoginContainer>
	);
};

export default Login;

const LoginContainer = styled.main`
	position: relative;
	text-align: center;
	height: calc(var(--vh, 1vh) * 100);
`;

const LoginSection = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const LoginBox = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
`;

const LoginInputButtonGroup = styled.form`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
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

const LoginTextButtonGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
	color: #a5a5a5;
`;

const LoginTextButton = styled.button`
	font-family: "Inter";
	font-weight: 400;
	font-size: 1rem;

	border: none;
	outline: none;
	background-color: transparent;

	color: #a5a5a5;

	&:active {
		color: yellow;
		background-color: yellow;
	}
`;

const LoginTypograph = styled.p`
	font-family: "Inika";
	font-weight: 700;
	font-size: 20px;
	color: #474747;
`;

const CustomButton = styled.button<{ backgroundColor: string; color?: string }>`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 6px;
	line-height: 1px;

	width: 15rem;
	height: 2.5rem;
	border: none;
	border-radius: 8px;
	color: ${(props) => props.color};
	background-color: ${(props) => props.backgroundColor};
	outline: none;
`;
