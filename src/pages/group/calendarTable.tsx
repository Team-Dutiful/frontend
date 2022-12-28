import styled from "styled-components";

const CalendarTable = () => {
	return (
		<Table>
			<TableHeader>
				<P></P>
				<P day="sun">1</P>
				<P>2</P>
				<P>3</P>
				<P>4</P>
				<P>5</P>
				<P>6</P>
				<P>7</P>
			</TableHeader>
			<TableRow>
				<p>오예환</p>
				<Color work="off">OFF</Color>
				<Color work="day">DAY</Color>
				<Color />
				<Color work="day">DAY</Color>
				<Color work="eve">EVE</Color>
				<Color work="day">DAY</Color>
				<Color />
			</TableRow>
			<TableRow>
				<p>오예환</p>
				<Color work="off">OFF</Color>
				<Color work="day">DAY</Color>
				<Color work="day">DAY</Color>
				<Color />
				<Color />
				<Color work="day">DAY</Color>
				<Color work="other">휴가</Color>
			</TableRow>
			<TableRow>
				<p>오예환</p>
				<Color work="off">OFF</Color>
				<Color work="day">DAY</Color>
				<Color work="day">DAY</Color>
				<Color />
				<Color />
				<Color work="day">DAY</Color>
				<Color work="other">휴가</Color>
			</TableRow>
			<TableRow>
				<p>오예환</p>
				<Color work="off">OFF</Color>
				<Color work="day">DAY</Color>
				<Color work="day">DAY</Color>
				<Color />
				<Color />
				<Color work="day">DAY</Color>
				<Color work="other">휴가</Color>
			</TableRow>
		</Table>
	);
};

export default CalendarTable;

const Table = styled.div`
	display: flex;
	flex-direction: column;
`;

const TableHeader = styled.div`
	display: grid;
	grid-template-columns: 50px repeat(7, 1fr);
	border-bottom: 1px solid #b4b4b4;
`;

const P = styled.p<{ day?: string }>`
	font-weight: 600;
	font-size: 16px;
	text-align: center;
	padding-bottom: 4px;

	color: ${(props) => (props.day === "sun" ? "#FF0000" : "#000000")};
`;

const TableRow = styled.div`
	display: grid;
	grid-template-columns: 50px repeat(7, 1fr);
	column-gap: 2px;
	border-bottom: 1px solid #cacaca;

	p {
		display: flex;
		align-items: center;
		justify-content: center;
		padding-top: 4px;
	}
`;

const Color = styled.div<{ work?: string }>`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 30px;
	font-size: 14px;
	padding-top: 3px;

	background-color: ${(props) => {
		switch (props.work) {
			case "off":
				return "#bdffeb";
			case "day":
				return "#FFD9D9";
			case "eve":
				return "#FFB9B9";
			case "other":
				return "#D5CEFF";
			default:
				return "transparent";
		}
	}};
	color: #646464;
`;
