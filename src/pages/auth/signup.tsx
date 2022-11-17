import styled from "styled-components";
import TeamLogo from "../../components/teamLogo";
import { ReactComponent as PreviousIcon } from "../../assets/icons/auth_previous.svg";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
	const navigate = useNavigate();

	return (
		<SignUpContainer>
			<PreviousButton onClick={() => navigate("/login")}>
				<PreviousIcon width="16px" height="16px" />
			</PreviousButton>
			<SignUpSection>
				<SignUpTypograpy>회원가입</SignUpTypograpy>
				<div style={{ width: "70%", textAlign: "center" }}>
					<SignUpInput label="아이디" />
					<SignUpInput label="비밀번호" />
					<SignUpInput label="비밀번호 확인" />
					<p style={{ fontSize: "14px", color: "#E86464", lineHeight: "1px", marginBottom: "16px" }}>
						비밀번호를 다시 확인해주세요
					</p>
					<SignUpInput label="이름" />
					<div style={{ display: "flex", alignItems: "center" }}>
						<SignUpInput label="이메일" buttonLabel="전송" onClick={() => console.log("이메일 전송")} />
					</div>
					<p style={{ fontSize: "14px", color: "#848484", lineHeight: "2px", marginBottom: "16px" }}>
						인증코드가 전송되었습니다.
					</p>
					<SignUpInput label="인증코드" buttonLabel="확인" onClick={() => console.log("확인")} />
					<p style={{ fontSize: "14px", color: "#848484", lineHeight: "2px", marginBottom: "16px" }}>
						이메일 인증이 완료되었습니다.
					</p>
				</div>
				<SignUpButton onClick={() => console.log("가입하기")}>가입</SignUpButton>
			</SignUpSection>
			<TeamLogo />
		</SignUpContainer>
	);
};

export default SignUp;

const SignUpContainer = styled.main`
	position: relative;
	height: calc(var(--vh, 1vh) * 100);
`;

const PreviousButton = styled.button`
	position: absolute;
	top: 0.5rem;
	left: 0.5rem;
	border: none;
	outline: none;
	background-color: transparent;
	transform: rotate(-90deg);
`;

const SignUpSection = styled.section`
	position: relative;
	top: 35%;
	transform: translateY(-35%);

	display: flex;
	flex-direction: column;
	align-items: center;
`;

const SignUpTypograpy = styled.p`
	margin-bottom: 2rem;
	font-family: "Inika";
	font-weight: 700;
	font-size: 20px;
	color: #474747;
`;

const SignUpButton = styled.button`
	margin-top: 2rem;
	width: 120px;
	height: 31px;

	background: #ec8989;
	border: none;
	outline: none;
	border-radius: 5px;

	color: #fff;
	font-family: "Inter";
	font-weight: 300;
	font-size: 1rem;
`;

interface SignUpInputProps {
	label: string;
	buttonLabel?: string;
	onClick?: () => void;
}

const SignUpInput = ({ label, buttonLabel, onClick }: SignUpInputProps) => {
	return (
		<SignUpInputContainer>
			<Label>{label}</Label>
			<div style={{ display: "flex", gap: "3px" }}>
				<Input />
				{buttonLabel === undefined ? null : (
					<button style={{ width: "50px", fontSize: "12px" }} onClick={onClick}>
						{buttonLabel}
					</button>
				)}
			</div>
		</SignUpInputContainer>
	);
};

const SignUpInputContainer = styled.div`
	display: flex;
	flex-direction: column;
	text-align: start;
	width: 100%;
	gap: 4px;
	margin-bottom: 1rem;
`;

const Label = styled.p`
	font-size: 1rem;
	color: #7a7a7a;
`;

const Input = styled.input`
	padding: 0;
	width: 100%;
	height: 2rem;
	background: #ffffff;
	border: 0.8px solid #a6a6a6;
`;
