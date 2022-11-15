import styled from "styled-components";

const Group = () => {
	return <GroupContainer>group페이지</GroupContainer>;
};

export default Group;

const GroupContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 360px;
`;
