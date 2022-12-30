import styled from "styled-components";
import { Work } from "../members";
import CalendarDay from "./calendarDay";

interface CalendarWeekProps {
	weekly: number;
	week: number[];
	members: any;
}

interface Member {
	name: string;
	works: (Work[] | null[])[];
}

const CalendarWeek = ({ weekly, week, members }: CalendarWeekProps) => {
	return (
		<Table>
			<TableHeader>
				<P></P>
				{week.map((day, idx) => {
					return (
						<P key={idx} day={idx === 0 ? "sun" : undefined} prevMonth={weekly === 0 && day > 20}>
							{day}
						</P>
					);
				})}
			</TableHeader>
			{members.map((member: Member, idx: number) => {
				return (
					<TableRow key={idx}>
						<p>{member.name}</p>
						{member.works[weekly].map((work, idx) => {
							return <CalendarDay key={idx} work={work} />;
						})}
					</TableRow>
				);
			})}
		</Table>
	);
};

export default CalendarWeek;

const Table = styled.div`
	display: flex;
	flex-direction: column;
`;

const TableHeader = styled.div`
	display: grid;
	grid-template-columns: 50px repeat(7, 1fr);
	border-bottom: 1px solid #b4b4b4;
`;

const P = styled.p<{ day?: string; prevMonth?: boolean }>`
	font-weight: 600;
	font-size: 16px;
	text-align: center;
	padding-bottom: 4px;

	color: ${(props) => (props.day === "sun" ? "#FF0000" : "#000000")};
	opacity: ${(props) => (props.prevMonth ? "0.3" : "1")};
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
