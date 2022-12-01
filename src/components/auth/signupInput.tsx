import styled from "styled-components";

interface SignUpInputProps {
	id: string;
	type?: React.HTMLInputTypeAttribute;
	autoComplete?: string;
	value?: string;
	label: string;
	buttonLabel?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const SignUpInput = ({ id, type, autoComplete, value, label, buttonLabel, onClick, onChange }: SignUpInputProps) => {
	return (
		<SignUpInputContainer>
			<Label>{label}</Label>
			<div style={{ display: "flex", gap: "3px" }}>
				<Input id={id} type={type} autoComplete={autoComplete} value={value} onChange={onChange} />
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
`;

const Label = styled.p`
	font-size: 1rem;
	color: #7a7a7a;
`;

const Input = styled.input`
	padding: 0px 4px 0px 4px;
	width: 100%;
	height: 2rem;
	background: #ffffff;
	border: 0.8px solid #a6a6a6;
`;

export default SignUpInput;
