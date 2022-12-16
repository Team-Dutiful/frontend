import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../components/appLogo";
import PreviousButton from "../../components/auth/previousButton";
import LabelInput from "../../components/auth/labelInput";
import { findId } from "../../api/auth";
import ModalPortal from "../../components/modalPortal";
import Modal from "../../components/auth/modal";
import FindIdModal from "../../components/auth/findIdModal";

const FindId = () => {
	const [user, setUser] = useState({
		name: "",
		email: "",
		identification: "",
	});
	const [modalState, setModalState] = useState<null | "success" | "fail">(null);
	const navigate = useNavigate();

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = event.target;
		setUser({
			...user,
			[id]: value,
		});
	};

	const handleClick = async () => {
		const data = await findId(user.name, user.email);
		console.log(data);
		if (data.identification) {
			setUser({
				...user,
				identification: data.identification,
			});
			setModalState("success");
		} else {
			setModalState("fail");
		}
	};

	const handleClose = () => {
		setModalState(null);
	};

	return (
		<>
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
			{modalState && (
				<ModalPortal>
					<Modal onClose={handleClose}>
						<FindIdModal
							modalState={modalState}
							name={user.name}
							identification={user.identification}
							onClose={handleClose}
						/>
					</Modal>
				</ModalPortal>
			)}
		</>
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
