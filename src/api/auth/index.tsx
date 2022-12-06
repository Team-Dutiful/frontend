import axios from "axios";

const API_URL = "http://localhost:8080/auth";

export const sendAuthCodeEmail = (email: string) => {
	return axios.post(`${API_URL}/send-code`, { email });
};

export const signUp = (identification: string, password: string, name: string, email: string) => {
	return axios.post(`${API_URL}/signup`, {
		identification,
		password,
		name,
		email,
	});
};
