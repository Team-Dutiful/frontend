import { instance as axios } from "../config";

export const sendAuthCodeEmail = (email: string) => {
	return axios.post(`/auth/send-code`, { email });
};

export const sendAuthCodeAtFindPassword = (email: string) => {
	return axios.post(`/auth/find-send-code`, { email });
};

export const changePasswordByEmail = (email: string, password: string) => {
	return axios.post(`/auth/change-pwd-from-email`, { email, password });
};

export const signUp = (identification: string, password: string, name: string, email: string) => {
	return axios.post(`/auth/signup`, {
		identification,
		password,
		name,
		email,
	});
};

export const login = (identification: string, password: string) => {
	return axios.post(
		`/auth/login`,
		{
			identification,
			password,
		},
		{ withCredentials: true }
	);
};

export const findId = (name: string, email: string) => {
	return axios.post(`/auth/find-id`, { name, email });
};
