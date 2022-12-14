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
					<p> π κ°μμ΄ μλ£λμμ΅λλ€! π</p>
					<button onClick={() => navigate("/login")}>λ‘κ·ΈμΈ νλ¬κ°κΈ°</button>
				</>
			) : (
				<>
					<p> μλͺ»λ μλ ₯ μ λ³΄κ° μ‘΄μ¬ν©λλ€.</p>
					<button
						onClick={() => {
							onClose();
						}}
					>
						λμκ°κΈ°
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
