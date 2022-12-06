import axios from "axios";

const API_URL = "http://localhost:10101/groups";
const TOKEN =
	"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWNhdGlvbiI6ImFhYWFhIiwiaWF0IjoxNjcwMzIxNjIxLCJleHAiOjE2NzA0MDgwMjF9.cM3HsL_G8cKcJQ3dZjOs6LwOy0HzLql_Uvv1sliwwrQ";

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
