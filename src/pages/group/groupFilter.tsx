import styled from "styled-components";
import { ReactComponent as RefreshIcon } from "../../assets/icons/refresh_button_icon.svg";
import { ReactComponent as BackIcon } from "../../assets/icons/back_button_icon.svg";

const GroupFilter = () => {
	const members = ["김다인", "박나영", "조용우", "오예환"];
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
	color: #505050;
`;

const MemberBox = styled.div`
	background-color: blue;
	height: 100px;
	width: 360px;
	padding: 25px;
	box-sizing: border-box;
	/* margin-top: 20px; */
`;

const MemberTitle = styled.title`
	display: block;
	font-weight: bold;
	font-family: sans-serif;
	color: #505050;
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

const WorkTypeWrapper = styled.div`
	/* display: flex; */
`;

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
	height: 56px;
	width: 235px;
	border: 0px;

	padding: 0;
	margin: 70px 0px 0px 0px;
	box-shadow: 1px 3px 1px rgba(0, 0, 0, 0.25);

	color: white;
	font-weight: bold;
`;
