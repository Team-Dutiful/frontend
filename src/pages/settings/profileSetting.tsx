import styled from "styled-components";
import bigProfileImg from "../../assets/images/bigProfileImg.png";

const ProfileSetting = () => {
	return (
		<ProfileSettingContainer>
			<Logo>Dutiful</Logo>
			<ProfileSpan>프로필 설정</ProfileSpan>
			<ProfileImgContainer>
				<ProfileImg src={bigProfileImg}></ProfileImg>
			</ProfileImgContainer>
			<ProfileNameLabel htmlFor="nameInput">이름</ProfileNameLabel>
			<ProfileNameInput type="text" id="nameInput" placeholder="이름을 입력해주세요." />
			<NameChangeButton>변경</NameChangeButton>
		</ProfileSettingContainer>
	);
};

export default ProfileSetting;

const ProfileSettingContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	width: 360px;
`;

const Logo = styled.div`
	font-family: "Inika";
	font-size: 2rem;
	color: #ff8181;
	margin-top: 78px;
	margin-bottom: 68px;
	text-align: center;
`;

const ProfileSpan = styled.span`
	text-align: center;
	font-family: "Inter";
	font-style: normal;
	font-weight: 700;
	font-size: 20px;
	line-height: 24px;
	text-align: center;
	color: #000000;
`;

const ProfileImgContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const ProfileImg = styled.img`
	box-sizing: border-box;
	width: 157.06px;
	height: 150px;
	border-radius: 50px;
	margin-top: 42px;
`;

const ProfileNameLabel = styled.label`
	position: absolute;
	width: 124px;
	height: 24px;
	left: 12px;
	top: 432px;

	font-family: "Inter";
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 19px;
	text-align: center;

	color: #7a7a7a;
`;

const ProfileNameInput = styled.input`
	width: 240px;
	height: 35px;
	margin-top: 62px;
	margin-bottom: 216px;
	border: 0.8px solid #a6a6a6;
`;

const NameChangeButton = styled.button`
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
`;
