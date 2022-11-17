import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import FootNavigation from "../../components/footNavigation";

const AccountSetting = () => {
	const navigate = useNavigate();

	const handleChangeUrl = (pageUrl: string) => {
		navigate(`/setting/${pageUrl}`);
	};

	return (
		<AccountSettingContainer>
			<AccountSpan>계정 설정</AccountSpan>
			<ButtonSection>
				<EmailChangeButton
					onClick={() => {
						handleChangeUrl("email");
					}}
				>
					이메일 변경
				</EmailChangeButton>
				<PwdChangeButton
					onClick={() => {
						handleChangeUrl("password");
					}}
				>
					비밀번호 변경
				</PwdChangeButton>
			</ButtonSection>
			<FootNavigation />
		</AccountSettingContainer>
	);
};

export default AccountSetting;

const AccountSettingContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	width: 360px;
`;

const AccountSpan = styled.span`
	text-align: center;
	font-family: "Inter";
	font-style: normal;
	font-weight: 700;
	font-size: 20px;
	line-height: 24px;
	text-align: center;
	color: #000000;
`;

const ButtonSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 21px;
	margin-top: 70px;

	button {
		border: 1px solid #e86464;
		border-radius: 5px;
		width: 220px;
		height: 54px;
		font-weight: 900;
		font-size: 16px;
	}
`;

const EmailChangeButton = styled.button`
	background: #ffffff;
	color: #e86464;
`;

const PwdChangeButton = styled.button`
	background: #ffd1d1;
	color: #e86464;
`;
