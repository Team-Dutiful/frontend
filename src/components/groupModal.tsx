import styled from "styled-components";

const GroupModal = () => {
	return (
		<GroupModalContainer>
			<GroupModalContent></GroupModalContent>
		</GroupModalContainer>
	);
};

export default GroupModal;

const GroupModalContainer = styled.div`
	width: 360px;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	left: 0;
	top: 0;
	text-align: center;
	background: rgba(0, 0, 0, 0.5);
`;

const GroupModalContent = styled.div`
	width: 290px;
	height: 299px;

	background: #ffffff;
	border-radius: 10px;
`;
