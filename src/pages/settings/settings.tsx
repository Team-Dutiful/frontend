import styled from "styled-components";

const Settings = () => {
	return (
		<SettingsContainer>
			<Profile>
				<ProfileImg></ProfileImg>
				<ProfileInfo>
					<ProfileName>조용우</ProfileName>
					<ProfileEmail>yongwoo_cho@tmax.co.kr</ProfileEmail>
				</ProfileInfo>
			</Profile>
			<ButtonSection>
				<SettingButton>프로필 설정</SettingButton>
				<SettingButton>계정 설정</SettingButton>
				<LogoutButton>로그아웃</LogoutButton>
			</ButtonSection>
		</SettingsContainer>
	);
};

export default Settings;

const SettingsContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 360px;
`;

const Profile = styled.div`
	height: 309px;
	width: 360px;
	background-color: #e86464;
	margin-bottom: 64px;
`;

const ProfileImg = styled.img`
	box-sizing: border-box;
	position: absolute;
	width: 115.18px;
	height: 110px;
	left: 122px;
	top: 71px;
	border: 1px solid #d3d3d3;
	border-radius: 50px;
`;

const ProfileInfo = styled.div`
	position: absolute;
	width: 230px;
	height: 51px;
	left: 65px;
	top: 200px;

	font-weight: 500;
	line-height: 15px;
	text-align: center;

	color: #ffffff;
	display: flex;
	flex-direction: column;
`;

const ProfileName = styled.span`
	font-size: 20px;
	margin-bottom: 10px;
`;

const ProfileEmail = styled.span`
	font-size: 12px;
`;

const ButtonSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 21px;

	button {
		border: 1px solid #e86464;
		border-radius: 5px;
		width: 220px;
		height: 54px;
		font-weight: 900;
		font-size: 16px;
	}
`;

const SettingButton = styled.button`
	background: #ffffff;
	color: #e86464;
`;

const LogoutButton = styled.button`
	background: #ffd1d1;
	color: #e86464;
`;
