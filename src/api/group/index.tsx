import axios from "axios";

const API_URL = "http://localhost:10101/groups";
const TOKEN =
	"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWNhdGlvbiI6ImFhYWFhIiwiaWF0IjoxNjcwNDk0MTg1LCJleHAiOjE2NzA1ODA1ODV9.p66xUVXHwdD_TUNd5hIe9u2CMnQZc80gqA27S7Eje6E";

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
	return axios.post(
		`${API_URL}/${groupId}`,
		{ name: name, color: color },
		{
			headers: {
				Authorization: TOKEN,
			},
		}
	);
};
