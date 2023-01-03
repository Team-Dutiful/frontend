import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import profileImg from "../../assets/images/profileImg.png";
import FootNavigation from "../../components/footNavigation";
import { userState } from "../../recoil/user";
import { logout } from "../../api/auth";

const Settings = () => {
	const navigate = useNavigate();
	const userInfo = useRecoilValue(userState);

	const handleChangeUrl = (pageUrl: string) => {
		navigate(`/setting/${pageUrl}`);
	};

	const handleLogout = async () => {
		await logout();
		navigate(`/`);
	};

	return (
		<SettingsContainer>
			<Profile>
				<ProfileImgContainer>
					<ProfileImg src={profileImg}></ProfileImg>
				</ProfileImgContainer>
				<ProfileInfo>
					<ProfileName>{userInfo?.name}</ProfileName>
					<ProfileEmail>{userInfo?.email}</ProfileEmail>
				</ProfileInfo>
			</Profile>
			<ButtonSection>
				<SettingButton
					onClick={() => {
						handleChangeUrl("profile");
					}}
				>
					프로필 설정
				</SettingButton>
				<SettingButton
					onClick={() => {
						handleChangeUrl("account");
					}}
				>
					계정 설정
				</SettingButton>
				<LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
			</ButtonSection>
			<FootNavigation />
		</SettingsContainer>
	);
};

export default Settings;

const SettingsContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 100vw;
`;

const Profile = styled.div`
	margin-bottom: 64px;
`;

const ProfileImgContainer = styled.div`
	height: 200px;
	display: flex;
	justify-content: center;
	background-color: #e86464;
`;

const ProfileImg = styled.img`
	box-sizing: border-box;
	width: 115.18px;
	height: 110px;
	border-radius: 50px;
	margin-top: 72px;
`;

const ProfileInfo = styled.div`
	width: 100%;
	height: 110px;
	font-weight: 500;
	line-height: 15px;
	text-align: center;

	color: #ffffff;
	display: flex;
	flex-direction: column;
	background-color: #e86464;
	border-radius: 0 0 50% 50%;
`;

const ProfileName = styled.span`
	margin-top: 10px;
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
		cursor: pointer;
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
