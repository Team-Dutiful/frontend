import styled from "styled-components";

interface CalendarDayProps {
	work: { work_id: number; name: string } | null;
}

const CanlendarDay = ({ work }: CalendarDayProps) => {
	return <CanlendarDayContainer work={work?.name}>{work?.name}</CanlendarDayContainer>;
};

export default CanlendarDay;

const CanlendarDayContainer = styled.div<{ work?: string }>`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 30px;
	font-size: 14px;
	padding-top: 3px;

	background-color: ${(props) => {
		switch (props.work) {
			case "OFF":
				return "#bdffeb";
			case "DAY":
				return "#FFD9D9";
			case "EVE":
				return "#FFB9B9";
			case "휴가":
				return "#D5CEFF";
			default:
				return "transparent";
		}
	}};
	color: #646464;
`;
