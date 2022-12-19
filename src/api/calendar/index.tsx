import { instance as axios } from "../config";

export const createWork = async (
	user_id: number,
	name: string,
	color: string,
	start_time: string,
	end_time: string,
	work_type: string,
	memo: string
) => {
	return await axios
		.post(`/works`, {
			user_id,
			name,
			color,
			start_time,
			end_time,
			work_type,
			memo,
		})
		.then((res) => console.log(res.data.body))
		.catch((error) => {
			console.error(error);
			return error;
		});
};

export const updateWork = async (
	work_id: number,
	name: string,
	color: string,
	start_time: string,
	end_time: string,
	work_type: string,
	memo: string
) => {
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
		.catch((error) => {
			console.error(error);
			return error;
		});
};

export const getWorkList = async () => {
	return await axios
		.get(`/works`)
		.then((res) => res.data.body.workList)
		.catch((error) => {
			return error;
		});
};
