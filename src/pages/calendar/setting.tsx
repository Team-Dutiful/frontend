import { useState, useEffect } from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { ReactComponent as BackIcon } from "../../assets/icons/back_icon.svg";
import { ReactComponent as MoreIcon } from "../../assets/icons/calendar_more_icon.svg";
import { ReactComponent as CreateWorkIcon } from "../../assets/icons/create_work_icon.svg";
import { getWorkList } from "../../api/calendar";
import { workIdState } from "../../recoil/work";

interface workListProps {
	name: string;
	color: string;
	start_time: string;
	end_time: string;
	memo: string;
	work_type: string;
	user_id: number;
	work_id: number;
	createdAt: string;
}

const CalendarSetting = () => {
	const navigate = useNavigate();
	const [workList, setWorkList] = useState<workListProps[]>([]);
	const setWorkId = useSetRecoilState(workIdState);

	const handleGoBackPage = () => {
		navigate(-1);
	};

	const handleMoveManagePage = (id: number, type: string) => {
		if (type !== "ETC") return;
		else {
			setWorkId(id);
			navigate("/calendar/manage");
		}
	};

	useEffect(() => {
		async function getWorks() {
			setWorkList(await getWorkList());
		}
		getWorks();
	}, []);

	return (
		<SettingContainer>
			<BackIconBox>
				<BackIcon onClick={handleGoBackPage} />
			</BackIconBox>
			<Title>근무 설정</Title>
			<Works>
				{workList.map(({ work_id, color, name, start_time, end_time, work_type }) => (
					<Work key={work_id}>
						<ColorBox color={color} />
						<div>
							<WorkName>{name}</WorkName>
							<WorkTime>
								{start_time} ~ {end_time}
							</WorkTime>
						</div>
						{work_type === "ETC" && (
							<MoreIcon className="icon" onClick={() => handleMoveManagePage(work_id, work_type)} />
						)}
					</Work>
				))}
			</Works>
			<CreateIconBox>
				<CreateWorkIcon onClick={() => navigate("/calendar/manage", { state: true })} />
			</CreateIconBox>
		</SettingContainer>
	);
};

export default CalendarSetting;

const SettingContainer = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const BackIconBox = styled.div`
	position: fixed;
`;

const Title = styled.h1`
	padding: 50px 0 30px 0;
	font-size: 1.5rem;
	font-weight: bold;
	text-align: center;
`;

const Works = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 36px;
	padding: 36px;
`;

const Work = styled.div`
	width: 100%;
	position: relative;
	display: flex;
	align-items: center;

	.icon {
		position: absolute;
		right: 0;
	}
`;

const ColorBox = styled.div`
	width: 60px;
	height: 60px;
	background-color: ${(props) => props.color};
	margin-right: 24px;
`;

const WorkName = styled.h5`
	font-size: 20px;
`;

const WorkTime = styled.p``;

<<<<<<< HEAD
const CreateIconBox = styled.div`
	position: fixed;
	right: 0;
	bottom: 1rem;

	svg {
		background-color: white;
=======
const ButtonContainer = styled.div`
	display: flex;
	justify-content: end;

	svg {
>>>>>>> ceca495 ([feat] 근무 생성/수정 페이지 추가)
		margin-right: 24px;
		cursor: pointer;
	}
`;
