import styled, { StyledComponent } from "styled-components";
import { ReactComponent as RefreshIcon } from "../../assets/icons/refresh_button_icon.svg";
import { ReactComponent as BackIcon } from "../../assets/icons/back_button_icon.svg";
import { useCallback, useState, useEffect } from "react";
import { getMembers } from "../../api/group/index";

interface MemberProps {
	member_id: number;
	name: string;
}
const GroupFilter = () => {
	const [members, setMembers] = useState<MemberProps[]>();

	const groupId = 1;

	const getMemberInfo = () => {
		return getMembers(groupId);
	};

	const setMemberData = async () => {
		const res = await getMemberInfo();
		if (res.status == 200) {
			setMembers(res.body.members);
		}
	};

	useEffect(() => {
		setMemberData();
	}, []);

	return (
		<GroupFilterContainer>
			<GroupFilterTitleBox>
				<IconBar>
					<BackIcon />
					<RefreshIcon />
				</IconBar>
				<GroupFilterTitle>그룹 필터</GroupFilterTitle>
			</GroupFilterTitleBox>
			<MemberBox>
				<MemberTitle>멤버</MemberTitle>
				{members?.map((member, i) => {
					if (i == 0) {
						return (
							<MemberContainer key={member.member_id}>
								<MemberNameBox isExist={true}>전체보기</MemberNameBox>
								{members[0] ? (
									<MemberNameBox isExist={true}>{member.name}</MemberNameBox>
								) : (
									<MemberNameBox isExist={false}></MemberNameBox>
								)}
							</MemberContainer>
						);
					} else if (i % 2 !== 0 && i > 0) {
						return (
							<MemberContainer key={member.member_id}>
								<MemberNameBox isExist={true}>{member.name}</MemberNameBox>
								{members[i + 1] ? (
									<MemberNameBox isExist={true}>{members[i + 1].name}</MemberNameBox>
								) : (
									<MemberNameBox isExist={false}></MemberNameBox>
								)}
							</MemberContainer>
						);
					}
				})}
			</MemberBox>
			<WorkBox>
				<WorkTitle>근무</WorkTitle>
				<WorkTypeWrapper>
					<WorkTypeBoxWrapper>
						<WorkTypeBox color={"#ffffff"}>전체보기</WorkTypeBox>
						<WorkTypeBox color={"#FFD9D9"}>DAY</WorkTypeBox>
					</WorkTypeBoxWrapper>
					<WorkTypeBoxWrapper>
						<WorkTypeBox color={"#FFB9B9"}>EVENING</WorkTypeBox>
						<WorkTypeBox color={"#B2FFE8"}>NIGHT</WorkTypeBox>
					</WorkTypeBoxWrapper>
					<WorkTypeBoxWrapper>
						<WorkTypeBox color={"#BBE7FF"}>OFF</WorkTypeBox>
						<WorkTypeBox color={"#D5CEFF"}>사용자 설정</WorkTypeBox>
					</WorkTypeBoxWrapper>
				</WorkTypeWrapper>
			</WorkBox>
			<GroupFilterOkayButton>적용하기</GroupFilterOkayButton>
			<GroupFilterCancelButton>취소</GroupFilterCancelButton>
		</GroupFilterContainer>
	);
};

export default GroupFilter;

const GroupFilterContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 360px;
	align-items: center;
`;

const IconBar = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	svg:nth-child(2) {
		margin-right: 10px;
	}
`;

const GroupFilterTitleBox = styled.div`
	background-color: #ff9595;
	width: 360px;
	text-align: center;
`;

const GroupFilterTitle = styled.title`
	display: block;
	padding-top: 12px;
	padding-bottom: 12px;
	font-weight: bold;
	font-family: sans-serif;
	color: #000000;
`;

const MemberBox = styled.div`
	background-color: white;

	width: 360px;
	padding: 25px;
	box-sizing: border-box;
	flex-wrap: wrap;
`;

const MemberContainer = styled.div`
	width: 310px;
	background-color: white;

	display: flex;
	justify-content: center;
	align-items: center;
`;

const MemberNameBox = styled.div<{ isExist: boolean }>`
	height: 36px;
	width: 155px;
	background-color: #fff;
	border: 0.5px solid #dbdbdb;

	font-size: 16px;
	font-family: sans-serif;
	display: flex;
	justify-content: center;
	align-items: center;

	visibility: ${(props) => (props.isExist ? "visible" : "hidden")};
`;

const MemberTitle = styled.title`
	display: block;
	font-weight: bold;
	font-family: sans-serif;
	color: #505050;
	padding-bottom: 16px;
`;

const WorkBox = styled.div`
	background-color: white;
	width: 360px;
	padding: 25px;
	box-sizing: border-box;
	flex-wrap: wrap;
`;

const WorkTitle = styled.title`
	color: #505050;
	display: block;
	font-weight: bold;
	font-family: sans-serif;
	padding-bottom: 16px;
`;

const WorkTypeWrapper = styled.div``;

const WorkTypeBoxWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 16px;
	align-items: center;
`;

const WorkTypeBox = styled.div<{ color: string }>`
	background-color: ${(props) => (props.color ? props.color : "white")};
	height: 36px;
	width: 124px;

	border: 1px solid #b1b1b1;
	border-radius: 5px;

	font-size: 16px;
	font-family: sans-serif;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const GroupFilterOkayButton = styled.button`
	background-color: #e86464;
	min-height: 56px;
	width: 235px;
	border: 0px;

	padding: 0;
	margin: 70px 0px 10px 0px;
	box-shadow: 1px 3px 1px rgba(0, 0, 0, 0.25);

	color: white;
	font-weight: bold;
	font-size: 18px;
`;

const GroupFilterCancelButton = styled.button`
	color: #3a3a3a;
	font-size: 15px;
	background-color: #fff;
	border: none;
`;
