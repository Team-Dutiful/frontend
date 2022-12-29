import CalendarWeek from "./calendarWeek";
import { getDatesForMonth, getMembersWorksForMonth } from "./date";
import { data } from "../members";

interface CalendarTableProps {
	year: number;
	month: number;
}

const CalendarTable = ({ year, month }: CalendarTableProps) => {
	const date = getDatesForMonth(year, month);
	const members = getMembersWorksForMonth(year, month, data);

	return (
		<>
			{date.map((week, idx) => {
				return <CalendarWeek weekly={idx} key={idx} week={week} members={members} />;
			})}
		</>
	);
};

export default CalendarTable;
