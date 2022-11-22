import styled from "styled-components";

const GroupFilter = () => {
	const members = ["김다인", "박나영", "조용우", "오예환"];
	return (
		<GroupFilterContainer>
			<GroupFilterTitleBox>
				<GroupFilterTitle>그룹 필터</GroupFilterTitle>
			</GroupFilterTitleBox>
			<MemberBox></MemberBox>
			<WorkBox>
				<WorkTitle></WorkTitle>
				<WorkTypeBox></WorkTypeBox>
			</WorkBox>
		</GroupFilterContainer>
	);
};

export default GroupFilter;

const GroupFilterContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 360px;
`;

const GroupFilterTitleBox = styled.div`
	background-color: #ff9595;
	height: 100px;
	width: 360px;
	text-align: center;
`;

const GroupFilterTitle = styled.title`
	display: block;
	padding-top: 70px;

	font-weight: bold;
	font-family: sans-serif;
`;

const MemberBox = styled.div``;
const WorkBox = styled.div``;

const MemberTitle = styled.title``;
const WorkTitle = styled.title``;

const WorkTypeBox = styled.div``;
