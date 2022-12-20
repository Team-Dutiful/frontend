import axios from "axios";

const API_URL = "http://localhost:10101/groups";

export const getGroups = () => {
	return axios
		.get(`${API_URL}`, {
			withCredentials: true,
		})
		.then((res) => {
			return res.data.body.groups;
		})
		.catch((err) => {
			return err;
		});
};

export const getMembers = (groupId: number) => {
	return axios
		.get(`${API_URL}/${groupId}/members`, {
			withCredentials: true,
		})
		.then((res) => {
			return res.data.body.group_members;
		})
		.catch((err) => {
			return err;
		});
};

export const createGroup = (name: string, color: string): any => {
	return axios
		.post(
			`${API_URL}`,
			{ name: name, color: color },
			{
				withCredentials: true,
			}
		)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			return err;
		});
};

export const editGroup = (groupId: number, name: string, color: string) => {
	return axios.put(
		`${API_URL}/${groupId}`,
		{ name: name, color: color },
		{
			withCredentials: true,
		}
	);
};

export const exitGroup = (groupId: number) => {
	return axios.post(
		`${API_URL}/${groupId}/exit`,
		{},
		{
			withCredentials: true,
		}
	);
};

export const deleteGroup = (groupId: number) => {
	return axios.delete(`${API_URL}/${groupId}`, {
		withCredentials: true,
	});
};

export const chagneGroupLeader = (groupId: number, userId: number) => {
	return axios.put(
		`${API_URL}/${groupId}/change-leader`,
		{
			user_id: userId,
		},
		{
			withCredentials: true,
		}
	);
};

export const inviteMember = (groupId: number, email: string) => {
	return axios.post(
		`${API_URL}/${groupId}/invite`,
		{
			email: email,
		},
		{
			withCredentials: true,
		}
	);
};
