import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { ColorResult, SketchPicker } from "react-color";
import { ReactComponent as BackIcon } from "../../assets/icons/back_icon.svg";
import { TextField } from "@mui/material";
import { createWork, getWork, updateWork, WorkDataType } from "../../api/calendar";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "../../recoil/user";
import { workIdState } from "../../recoil/work";

const ManageWork = () => {
	const { state } = useLocation();
	const navigate = useNavigate();
	const [userInfo] = useRecoilState(userState);
	const workId = useRecoilValue(workIdState);

	const [workData, setWorkData] = useState<WorkDataType>({
		work_id: 1,
		work_type: "DAY",
		name: "DAY",
		color: "#000000",
		start_time: "09:00",
		end_time: "18:00",
		memo: "",
	});
	const [isOpen, setIsOpen] = useState(false);

	const [isCreateMode, setIsCreateMode] = useState(false);

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
		const work = { ...workData };
		work["color"] = e.hex;
		setWorkData(work);
	};

	const handleStopEvent = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	const handleChangeInput = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		field: "name" | "memo" | "start_time" | "end_time"
	) => {
		const work = { ...workData };
		work[field] = e.target.value;
		setWorkData(work);
	};

	const handleSubmitWorkForm = async () => {
		if (isCreateMode) {
			if (userInfo?.user_id) {
				await createWork(userInfo?.user_id, workData);
			}
		} else {
			await updateWork(workData);
		}
		handleGoBackPage();
	};

	useEffect(() => {
		setIsCreateMode(state);
	}, []);

	useEffect(() => {
		if (workId) {
			async function getWorkData(id: number) {
				const workData = await getWork(id);
				setWorkData(workData);
			}
			getWorkData(workId);
		}
	}, [workId]);

	return (
		<ManageWorkContainer>
			<BackIcon onClick={handleGoBackPage} />
			<Title>근무 {isCreateMode ? "생성" : "수정"}</Title>
			<WorkColor color={workData?.color} onClick={handleOpenColorPicker}></WorkColor>
			{isOpen && (
				<>
					<SketchPicker color={workData?.color} onChange={handleSelectColor} />
					<ColorButtonBox>
						<ColorOkayButton onClick={handleCloseColorPicker}>확인</ColorOkayButton>
						<ColorCancelButton onClick={handleCloseColorPicker}>취소</ColorCancelButton>
					</ColorButtonBox>
				</>
			)}
			<WorkForm onSubmit={handleStopEvent}>
				<div>
					<span>근무명</span>
					<WorkNameInput type="text" value={workData?.name} onChange={(e) => handleChangeInput(e, "name")} />
				</div>
				<WorkTime>
					<span>근무시간</span>
					<TextField
						id="time"
						label="시작시간"
						type="time"
						value={workData?.start_time}
						InputLabelProps={{
							shrink: true,
						}}
						inputProps={{
							step: 300, // 5 min
						}}
						onChange={(e) => handleChangeInput(e, "start_time")}
					/>
					<TextField
						id="time"
						label="종료시간"
						type="time"
						value={workData?.end_time}
						InputLabelProps={{
							shrink: true,
						}}
						inputProps={{
							step: 300, // 5 min
						}}
						onChange={(e) => handleChangeInput(e, "end_time")}
					/>
				</WorkTime>
				<div>
					<span>메모</span>
					<WorkMemoInput type="text" value={workData.memo} onChange={(e) => handleChangeInput(e, "memo")} />
				</div>
				<SubmitButton onClick={handleSubmitWorkForm}>확인</SubmitButton>
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
	width: 268px;
	display: flex;
	flex-direction: column;
	align-items: center;

	div {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	span {
		font-weight: 500;
		font-size: 16px;
		line-height: 19px;
		color: #7a7a7a;
		margin-bottom: 4px;
	}
`;

const WorkNameInput = styled.input`
	height: 38px;
	box-sizing: border-box;
	margin-bottom: 30px;
	background: #ffffff;
	border: 0.8px solid #a6a6a6;
`;

const WorkMemoInput = styled.input`
	height: 72px;
	box-sizing: border-box;
	background: #ffffff;
	border: 0.8px solid #a6a6a6;
`;

const SubmitButton = styled.button`
	background-color: #e86464;
	height: 56px;
	width: 235px;
	border: 0px;
	padding: 0;
	margin-top: 70px;
	box-shadow: 1px 3px 1px rgba(0, 0, 0, 0.25);
	color: white;
	font-weight: bold;
`;

const WorkTime = styled.div`
	margin-bottom: 30px;
	gap: 12px;
`;
