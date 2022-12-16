import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface SignUpModalProps {
	modalState: null | "success" | "fail";
	onClose: () => void;
}

const SignUpModal = ({ modalState, onClose }: SignUpModalProps) => {
	const navigate = useNavigate();

	return (
		<SignUpModalContainer>
			{modalState === "success" ? (
				<>
					<p> 🎉 가입이 완료되었습니다! 🎉</p>
					<button onClick={() => navigate("/login")}>로그인 하러가기</button>
				</>
			) : (
				<>
					<p> 잘못된 입력 정보가 존재합니다.</p>
					<button
						onClick={() => {
							onClose();
						}}
					>
						돌아가기
					</button>
				</>
			)}
		</SignUpModalContainer>
	);
};

export default SignUpModal;

const SignUpModalContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	justify-content: center;
	align-items: center;
	width: 300px;
	height: 120px;
	border-radius: 10px;
	background-color: #fff;

	p {
		font-size: 20px;
		font-weight: 600;
		color: #f4aeae;
	}

	button {
		padding: 10px 10px;
		border: none;
		outline: none;
		border-radius: 10px;
	}
`;
