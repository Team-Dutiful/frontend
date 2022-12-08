import axios from "axios";

const API_URL = "http://localhost:10101/groups";
const TOKEN =
	"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWNhdGlvbiI6ImFhYWFhIiwiaWF0IjoxNjcwNDk3MzQ0LCJleHAiOjE2NzA1ODM3NDR9.F9UNJZUldad1lsPydKou4EZRgj3o9LKbhUlWSqvJ66g";

export const getGroups = () => {
	return axios.get(`${API_URL}`, {
		headers: {
			Authorization: TOKEN,
		},
	});
};

export const getMembers = (groupId: number) => {
	return axios.get(`${API_URL}/${groupId}/members`, {
		headers: {
			Authorization: TOKEN,
		},
	});
};

export const createGroup = (name: string, color: string) => {
	return axios.post(
		`${API_URL}`,
		{ name: name, color: color },
		{
			headers: {
				Authorization: TOKEN,
			},
		}
	);
};

export const editGroup = (groupId: number, name: string, color: string) => {
	return axios.put(
		`${API_URL}/${groupId}`,
		{ name: name, color: color },
		{
			headers: {
				Authorization: TOKEN,
			},
		}
	);
};

export const exitGroup = (groupId: number) => {
	return axios.post(
		`${API_URL}/${groupId}/exit`,
		{},
		{
			headers: {
				Authorization: TOKEN,
			},
		}
	);
};

export const deleteGroup = (groupId: number) => {
	return axios.delete(`${API_URL}/${groupId}`, {
		headers: {
			Authorization: TOKEN,
		},
	});
};

export const chagneGroupLeader = (groupId: number, userId: number) => {
	return axios.put(
		`${API_URL}/${groupId}/change-leader`,
		{
			user_id: userId,
		},
		{
			headers: {
				Authorization: TOKEN,
			},
		}
	);
};
