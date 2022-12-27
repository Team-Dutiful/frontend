import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled, { keyframes } from "styled-components";
import { kakaoLogin } from "../../api/auth";
import { userState } from "../../recoil/user";

const Kakao = () => {
	const setUser = useSetRecoilState(userState);
	const navigate = useNavigate();
	const code = new URL(window.location.href).searchParams.get("code");

	useEffect(() => {
		if (code === null) navigate("/login");
		else {
			kakaoLogin(code)
				.then((res) => {
					console.log(res);
					setUser({
						user_id: res.data.body.user_id,
						identification: res.data.body.identification,
						name: res.data.body.name,
						email: res.data.body.email,
					});
					navigate("/calendar");
				})
				.catch((error) => {
					console.log(error);
					navigate("/login");
				});
		}
	}, []);

	return (
		<KaKaoConatiner>
			<Spinner />
		</KaKaoConatiner>
	);
};

export default Kakao;

const spinner = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`;

const KaKaoConatiner = styled.main`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Spinner = styled.div`
	box-sizing: border-box;
	position: absolute;
	top: 50%;
	left: 50%;
	width: 40px;
	height: 40px;
	margin-top: -10px;
	margin-left: -10px;
	border-radius: 50%;
	border-top: 3px solid #fb87f9;
	border-right: 2px solid transparent;
	animation: ${spinner} 0.5s linear infinite;
`;
