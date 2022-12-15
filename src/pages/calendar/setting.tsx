import styled from "styled-components";
import { tempWorkList } from "./tempData";
import { ReactComponent as MoreIcon } from "../../assets/icons/calendar_more_icon.svg";

const CalendarSetting = () => {
	return (
		<SettingContainer>
			<Title>근무 설정</Title>
			<Works>
				{tempWorkList.map((work) => (
					<Work>
						<ColorBox color={work.color} />
						<div>
							<WorkName>{work.name}</WorkName>
							<WorkTime>
								{work.start_time} ~ {work.end_time}
							</WorkTime>
						</div>
						<MoreIcon className="icon" />
					</Work>
				))}
			</Works>
		</SettingContainer>
	);
};

export default CalendarSetting;

const SettingContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const Title = styled.h1`
	margin: 100px 0 30px 0;
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