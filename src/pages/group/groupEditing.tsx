import styled from "styled-components";
import { ColorResult, SketchPicker } from "react-color";
import { useCallback, useState, useEffect } from "react";
import { ReactComponent as BackIcon } from "../../assets/icons/back_button_icon.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { editGroup } from "../../api/group";

const GroupEditing = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const groupId = location.state.groupId;
	const color = location.state.color;
	const title = location.state.title;

	const handleGoBackPage = () => {
		navigate(-1);
	};

	const [isOpen, setIsOpen] = useState(false);
	const [choiceColor, setChoiceColor] = useState(color);
	const [prevColor, setPrevColor] = useState(color);
	const [name, setName] = useState(title);

	const handleOpenColorPicker = () => {
		setIsOpen(true);
	};

	const handleAcceptColorPicker = (color: string) => {
		setChoiceColor(color);
		setPrevColor(color);
		setIsOpen(false);
	};

	const handleCancleColorPicker = () => {
		setChoiceColor(prevColor);
		setIsOpen(false);
	};

	const handleSelectColor = (e: ColorResult) => {
		setChoiceColor(e.hex);
	};

	const handleGroupName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

	const handleEditGroup = (id: number, name: string, color: string) => {
		editGroup(id, name, color)
			.then(() => {
				alert("그룹 수정 성공!");
				handleGoBackPage();
			})
			.catch((err) => alert("그룹 수정 실패!" + err));
	};

	return (
		<GroupSettingContainer>
			<BackIcon onClick={handleGoBackPage} />
			<GroupSettingTitle>그룹 편집</GroupSettingTitle>
			<GroupBox>
				<GroupName>그룹명</GroupName>
				<GroupNameInput required value={name} onChange={handleGroupName}></GroupNameInput>
			</GroupBox>
			<GroupBox>
				<GroupName>그룹 색상</GroupName>
				<ColorBox color={choiceColor} onClick={handleOpenColorPicker}></ColorBox>
			</GroupBox>
			{isOpen && (
				<>
					<SketchPicker color={choiceColor} onChange={handleSelectColor} />
					<ColorButtonBox>
						<ColorOkayButton onClick={() => handleAcceptColorPicker(choiceColor)}>확인</ColorOkayButton>
						<ColorCancelButton onClick={handleCancleColorPicker}>취소</ColorCancelButton>
					</ColorButtonBox>
				</>
			)}

			<GroupSettingOkayButton>
				<GroupSettinButtonText onClick={() => handleEditGroup(groupId, name, choiceColor)}>확인</GroupSettinButtonText>
			</GroupSettingOkayButton>
		</GroupSettingContainer>
	);
};

export default GroupEditing;

const GroupSettingContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 360px;
	align-items: center;

	svg {
		position: absolute;
		top: 4px;
		left: 12px;
	}
`;

const GroupSettingTitle = styled.h1`
	font-family: sans-serif;
	font-size: 20px;
	margin: 70px 0px 18px 0px;
`;

const GroupBox = styled.div`
	align-items: center;

	height: 70px;
	width: 250px;
	box-sizing: border-box;
	padding: 15px 0px;
`;

const GroupName = styled.h3`
	font-family: sans-serif;
	margin: 0px 0px 4px 0px;
`;

const GroupNameInput = styled.input`
	width: 240px;
	height: 30px;
	border: solid 0.5px #e2e2e2;
`;

const ColorBox = styled.div`
	width: 245px;
	height: 30px;
	background-color: ${(props) => props.color};
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

const ColorOkayButton = styled.button`
	cursor: pointer;
`;

const ColorCancelButton = styled.button`
	cursor: pointer;
`;

const GroupSettingOkayButton = styled.button`
	background-color: #e86464;
	height: 56px;
	width: 235px;
	border: 0px;

	cursor: pointer;
	padding: 0;
	margin: 70px 0px 0px 0px;
	box-shadow: 1px 3px 1px rgba(0, 0, 0, 0.25);
`;

const GroupSettinButtonText = styled.h5`
	color: white;
	font-weight: bold;
`;
