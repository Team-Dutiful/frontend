import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface FindIdModal {
	modalState: null | "success" | "fail";
	name: string;
	identification: string;
	onClose: () => void;
}

const FindIdModal = ({ modalState, name, identification, onClose }: FindIdModal) => {
	const navigate = useNavigate();

	const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
		event.stopPropagation();
	};

	return (
		<FindIdModalContainer onClick={handleClick}>
			{modalState === "success" ? (
				<>
					<p>
						<span>{name}</span> 님의 아이디는 <span>{identification}</span> 입니다.
					</p>
					<div>
						<button onClick={() => navigate("/login")}>로그인하러 가기</button>
						<button onClick={() => navigate("/find-password")}>비밀번호 찾기</button>
					</div>
				</>
			) : (
				<>
					<p>존재하지 않는 회원정보 입니다.</p>
					<button onClick={() => onClose()}>돌아가기</button>
				</>
			)}
		</FindIdModalContainer>
	);
};

export default FindIdModal;

const FindIdModalContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	justify-content: center;
	align-items: center;
	width: 300px;
	height: 120px;
	border-radius: 10px;
	background-color: #fff;

	div {
		display: flex;
		gap: 10px;
	}

	p {
		font-size: 16px;
		font-weight: 600;
		color: #f4aeae;

		span {
			color: #4293e4;
		}
	}

	button {
		padding: 10px 10px;
		border: none;
		outline: none;
		border-radius: 10px;
	}
`;
