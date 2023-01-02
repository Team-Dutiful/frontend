import { useState } from "react";
import styled from "styled-components";
import { changePasswordByPassword } from "../../api/auth";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { userState } from "../../recoil/user";

const PasswordSetting = () => {
	const navigate = useNavigate();
	const userInfo = useRecoilValue(userState);
	const [curPwd, setCurPwd] = useState("");
	const [newPwd, setNewPwd] = useState("");

	const handleChangeCurPwd = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCurPwd(e.target.value);
	};

	const handleChangeNewPwd = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewPwd(e.target.value);
	};

	const handleSubmitNewPwd = async () => {
		if (userInfo) {
			await changePasswordByPassword(userInfo.identification, curPwd, newPwd);
			navigate(`/settings`);
		}
	};

	return (
		<PasswordSettingContainer>
			<PasswordChangeForm>
				<InputLabel htmlFor="curPwd">현재 비밀번호</InputLabel>
				<PwdInput
					type="password"
					id="curPwd"
					placeholder="현재 비밀번호를 입력해주세요."
					onChange={handleChangeCurPwd}
				/>
				<InputLabel htmlFor="newPwd">새 비밀번호</InputLabel>
				<PwdInput type="password" id="newPwd" placeholder="새 비밀번호를 입력해주세요." onChange={handleChangeNewPwd} />
				<InputLabel htmlFor="checkNewPwd">새 비밀번호 확인</InputLabel>
				<PwdInput type="password" id="checkNewPwd" placeholder="다시한번 입력해주세요." />
			</PasswordChangeForm>
			<PwdChangeButton onClick={handleSubmitNewPwd}>변경</PwdChangeButton>
			<TeamLogo>@ToStar</TeamLogo>
		</PasswordSettingContainer>
	);
};

export default PasswordSetting;

const PasswordSettingContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
`;

const PasswordChangeForm = styled.form`
	display: flex;
	flex-direction: column;
`;

const InputLabel = styled.label`
	font-family: "Inter";
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 19px;
	text-align: left;
	color: #7a7a7a;
	margin-bottom: 8px;
`;

const PwdInput = styled.input`
	width: 240px;
	height: 38px;
	margin-bottom: 14px;
	border: 0.8px solid #a6a6a6;
`;

// storyboard 상 css
// const PwdChangeButton = styled.button`
// 	box-sizing: border-box;

// 	width: 120px;
// 	height: 31px;
// 	background: #e86464;
// 	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
// 	border: none;
// 	font-family: "Inter";
// 	font-style: normal;
// 	font-weight: 600;
// 	font-size: 18px;
// 	line-height: 22px;
// 	text-align: center;
// 	color: #ffffff;
// 	border-radius: 5px;
// `;

const PwdChangeButton = styled.button`
	width: 200px;
	height: 50px;
	background: #e86464;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 3px;
	border: none;
	font-family: "Inter";
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
	line-height: 22px;
	text-align: center;
	color: #ffffff;
	margin-top: 53px;
`;

const TeamLogo = styled.p`
	font-family: "Inika";
	font-style: normal;
	font-size: 1rem;
	position: fixed;
	left: 0;
	right: 0;
	bottom: 2rem;
	width: 360px;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	box-sizing: border-box;
`;
