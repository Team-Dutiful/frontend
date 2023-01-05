import { instance as axios } from "../config";

export interface WorkDataType {
	work_id: number;
	name: string;
	color: string;
	start_time: string;
	end_time: string;
	work_type: string;
	memo?: string;
}
export interface SaveWorkType {
	year: string;
	month: string;
	day: string;
	work_id: number;
}

export const createWork = async (
	user_id: number,
	{ work_id, name, color, start_time, end_time, work_type, memo }: WorkDataType
) => {
	return await axios
		.post(`/works`, {
			user_id,
			work_id,
			name,
			color,
			start_time,
			end_time,
			work_type: "ETC",
			memo,
		})
		.then((res) => console.log(res.data.body))
		.catch((err) => err);
};

export const updateWork = async ({ work_id, name, color, start_time, end_time, work_type, memo }: WorkDataType) => {
	return await axios
		.put(`/works/${work_id}`, {
			work_id,
			name,
			color,
			start_time,
			end_time,
			work_type,
			memo,
		})
		.then((res) => console.log(res.data.body))
		.catch((err) => err);
};

export const getWork = async (id: number) => {
	return await axios
		.get(`/works/${id}`)
		.then((res) => res.data.body.work)
		.catch((err) => err);
};

export const getWorkList = async () => {
	return await axios
		.get(`/works`)
		.then((res) => res.data.body.workList)
		.catch((err) => err);
};

export const getSchedule = async (year: string, month: string) => {
	const schedule = await axios
		.post(`/schedule`, { year, month })
		.then((res) => res.data.body)
		.catch((err) => err);

	return schedule;
};

export const manageSchedule = async (schedules: SaveWorkType[]) => {
	return await axios
		.post(`/schedule/manage`, { calendarWork: schedules })
		.then((res) => true)
		.catch((err) => false);
};
