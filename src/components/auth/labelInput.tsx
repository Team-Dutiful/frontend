import styled from "styled-components";

interface LabelInputtProps {
	id: string;
	type?: React.HTMLInputTypeAttribute;
	autoComplete?: string;
	value?: string;
	label: string;
	buttonLabel?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	checkCode?: boolean;
}

const LabelInput = ({
	id,
	type,
	autoComplete,
	value,
	label,
	buttonLabel,
	onClick,
	onChange,
	checkCode,
}: LabelInputtProps) => {
	return (
		<LabelInputContainer>
			<Label>{label}</Label>
			<div style={{ display: "flex", gap: "3px" }}>
				<Input
					checkCode={checkCode}
					id={id}
					type={type}
					autoComplete={autoComplete}
					value={value}
					onChange={onChange}
					disabled={checkCode}
				/>
				{buttonLabel === undefined ? null : (
					<Button onClick={onClick} checkCode={checkCode} disabled={checkCode}>
						{buttonLabel}
					</Button>
				)}
			</div>
		</LabelInputContainer>
	);
};

const LabelInputContainer = styled.div`
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

const Input = styled.input<{ checkCode?: boolean }>`
	padding: 0px 4px 0px 4px;
	width: 100%;
	height: 2rem;
	background: ${(props) => {
		return props.checkCode === true ? "#ebebeb" : "#fff";
	}};
	color: ${(props) => {
		return props.checkCode ? "#a9a8a8" : "#000";
	}};
	border: 0.8px solid #a6a6a6;
`;

const Button = styled.button<{ checkCode?: boolean }>`
	width: 50px;
	font-size: 12px;
`;

export default LabelInput;
