import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface ChangePasswordModalProps {
	modalState: null | "success" | "fail";
	onClose: () => void;
}

const ChangePasswordModal = ({ modalState, onClose }: ChangePasswordModalProps) => {
	const navigate = useNavigate();

	return (
		<ChangePasswordModalContainer>
			{modalState === "success" ? (
				<>
					<p> 비밀번호가 성공적으로 변경되었습니다! </p>
					<button onClick={() => navigate("/login")}>로그인 하러가기</button>
				</>
			) : (
				<>
					<p>네트워크 오류</p>
					<button
						onClick={() => {
							onClose();
						}}
					>
						돌아가기
					</button>
				</>
			)}
		</ChangePasswordModalContainer>
	);
};

export default ChangePasswordModal;

const ChangePasswordModalContainer = styled.div`
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
		font-size: 16px;
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
