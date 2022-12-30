import styled from "styled-components";
import { Work } from "../members";

interface CalendarDayProps {
	work: Work | null;
}

const CanlendarDay = ({ work }: CalendarDayProps) => {
	return <CanlendarDayContainer bgColor={work?.color}>{work?.name}</CanlendarDayContainer>;
};

export default CanlendarDay;

const CanlendarDayContainer = styled.div<{ bgColor?: string }>`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 30px;
	font-size: 14px;
	padding-top: 3px;

	background-color: ${(props) => props.bgColor};
	color: #646464;
`;
