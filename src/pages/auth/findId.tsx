import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../components/appLogo";
import PreviousButton from "../../components/auth/previousButton";
import LabelInput from "../../components/auth/labelInput";
import { findId } from "../../api/auth";

const FindId = () => {
	const [user, setUser] = useState({
		name: "",
		email: "",
	});
	const navigate = useNavigate();

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = event.target;
		setUser({
			...user,
			[id]: value,
		});
	};

	const handleClick = () => {
		console.log(user.name, user.email);
		findId(user.name, user.email)
			.then((res) => {
				console.log(res);
				if (res.status === 200) {
					const identification = res.data.body.identification;
					alert(`${user.name}님의 아이디는 ${identification} 입니다`);
				} else {
					alert("존재하지않는 유저");
				}
			})
			.catch((error) => {
				console.log(error);
				alert("오류");
			});
	};

	return (
		<FindIdContainer>
			<PreviousButton onClick={() => navigate("/login")} />
			<Logo />
			<FindIdTypograpy>아이디 찾기</FindIdTypograpy>
			<FindIdTForm>
				<LabelInput id="name" label="이름" value={user.name} onChange={handleChange} />
				<LabelInput id="email" label="이메일" value={user.email} onChange={handleChange} />
			</FindIdTForm>
			<FindIdButton onClick={handleClick}>아이디 찾기</FindIdButton>
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
