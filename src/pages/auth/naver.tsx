import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled, { keyframes } from "styled-components";
import { naverLogin } from "../../api/auth";
import { userState } from "../../recoil/user";

const Naver = () => {
	const setUser = useSetRecoilState(userState);
	const navigate = useNavigate();

	const url = new URL(window.location.href);
	const code = url.searchParams.get("code");
	const state = url.searchParams.get("state");

	useEffect(() => {
		if (code === null || state === null) navigate("/login");
		else {
			naverLogin(code, state)
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
		<NaverConatiner>
			<Spinner />
		</NaverConatiner>
	);
};

export default Naver;

const spinner = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`;

const NaverConatiner = styled.main`
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
