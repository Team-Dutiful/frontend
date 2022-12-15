import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ColorResult, SketchPicker } from "react-color";
import { ReactComponent as BackIcon } from "../../assets/icons/back_icon.svg";

const ManageWork = () => {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);
	const [colorHexCode, setColorHexCode] = useState("#000000");

	const handleGoBackPage = () => {
		navigate(-1);
	};

	const handleOpenColorPicker = () => {
		setIsOpen(true);
	};

	const handleCloseColorPicker = () => {
		setIsOpen(false);
	};

	const handleSelectColor = (e: ColorResult) => {
		setColorHexCode(e.hex);
	};

	return (
		<ManageWorkContainer>
			<BackIcon onClick={handleGoBackPage} />
			<Title>근무 생성</Title>
			<WorkColor color={colorHexCode} onClick={handleOpenColorPicker}></WorkColor>
			{isOpen && (
				<>
					<SketchPicker color={colorHexCode} onChange={handleSelectColor} />
					<ColorButtonBox>
						<ColorOkayButton onClick={handleCloseColorPicker}>확인</ColorOkayButton>
						<ColorCancelButton onClick={handleCloseColorPicker}>취소</ColorCancelButton>
					</ColorButtonBox>
				</>
			)}
			<WorkForm>
				<div>
					<span>근무명</span>
					<input type="text" />
				</div>
				<div>
					<span>근무시간</span>
					<input type="date" />
				</div>
				<div>
					<span>메모</span>
					<input type="text" />
				</div>
			</WorkForm>
		</ManageWorkContainer>
	);
};

export default ManageWork;

const ManageWorkContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	svg {
		cursor: pointer;
		position: absolute;
		top: 0;
		left: 8px;
	}
`;

const Title = styled.h1`
	margin: 100px 0 30px 0;
	font-size: 1.5rem;
	font-weight: bold;
	text-align: center;
`;

const WorkColor = styled.button`
	width: 100px;
	height: 100px;
	border-radius: 50%;
	border: none;
	margin: auto;
	margin-top: 12px;
	background-color: ${(props) => props.color};
	margin-bottom: 40px;
`;

const ColorButtonBox = styled.div`
	display: flex;
	gap: 16px;
	margin-top: 10px;

	button {
		background-color: #e86464;
		color: white;
		font-weight: bold;
		height: 30px;
		width: 70px;
		border: 0px;
		border-radius: 5px;
	}
`;

const ColorOkayButton = styled.button``;

const ColorCancelButton = styled.button``;

const WorkForm = styled.form`
	div {
		display: flex;
		flex-direction: column;
	}
`;
