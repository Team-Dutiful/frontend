import axios from "axios";

const API_URL = "http://localhost:8080/groups";
const TOKEN =
	"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWNhdGlvbiI6ImFhYWFhIiwiaWF0IjoxNjcwMzIxNjIxLCJleHAiOjE2NzA0MDgwMjF9.cM3HsL_G8cKcJQ3dZjOs6LwOy0HzLql_Uvv1sliwwrQ";

export const getGroups = () => {
	return axios.get(`${API_URL}`, {
		headers: {
			Authorization: TOKEN,
		},
	});
};
