import axios from "axios";

const API_URL = "http://localhost:8080/auth";

export const sendAuthCodeEmail = (email: string) => {
	return axios.post(`${API_URL}/send-code`, { email });
};

export const sendAuthCodeAtFindPassword = (email: string) => {
	return axios.post(`${API_URL}/find-send-code`, { email });
};

export const signUp = (identification: string, password: string, name: string, email: string) => {
	axios.post(`${API_URL}/signup`, {
		identification,
		password,
		name,
		email,
	});
};

export const login = (identification: string, password: string) => {
	return axios.post(
		`${API_URL}/login`,
		{
			identification,
			password,
		},
		{ withCredentials: true }
	);
};

export const findId = (name: string, email: string) => {
	return axios.post(`${API_URL}/find-id`, { name, email });
};
