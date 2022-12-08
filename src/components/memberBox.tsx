import styled from "styled-components";
import { ReactComponent as AuthorizeLeaderIcon } from "../assets/icons/authorize_leader_icon.svg";
import { ReactComponent as BanMemberIcon } from "../assets/icons/ban_member_icon.svg";
import ProfileImage from "../assets/images/profileImg.png";
import { ReactComponent as CrownIcon } from "../assets/icons/leader_crown_icon.svg";

interface MemberBoxProps {
	name: string;
	isLeader: boolean;
}

const MemberBox = ({ name, isLeader }: MemberBoxProps) => {
	return (
		<MemberBoxContainer>
			<MemberProfileImage src={ProfileImage} />
			<MemberProfileName isLeader={isLeader}>{name}</MemberProfileName>
			{isLeader ? (
				<IconWrapper>
					<CrownIcon></CrownIcon>
				</IconWrapper>
			) : (
				<>
					<IconWrapper style={{ marginRight: "10px" }}>
						<AuthorizeLeaderIcon />
					</IconWrapper>
					<IconWrapper>
						<BanMemberIcon />
					</IconWrapper>
				</>
			)}
		</MemberBoxContainer>
	);
};

export default MemberBox;

const MemberBoxContainer = styled.div`
	display: flex;
	height: 50px;
	width: 300px;
	margin: 14px 0px;
	/* justify-content: space-between; */
	align-items: center;
	padding: 0 10px 0 10px;
	svg {
		margin-right: 10px;
	}
`;

const MemberProfileImage = styled.img`
	height: 50px;
	width: 50px;

	margin-right: 20px;
	border: 1px solid #d3d3d3;
	border-radius: 50px;
`;

const MemberProfileName = styled.span<{ isLeader: boolean }>`
	font-size: 16px;
	font-family: sans-serif;
	font-weight: 600;
	font-style: normal;

	margin-right: 10px;
	width: ${(props) => (props.isLeader ? "auto" : "160px")};
`;

const IconWrapper = styled.div`
	height: 20px;
	width: 20px;
`;
