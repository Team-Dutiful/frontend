import { instance as axios } from "../config";

export const login = async (identification: string, password: string) => {
	return await axios
		.post(`/auth/login`, {
			identification,
			password,
		})
		.then((res) => res.data.body)
		.catch((error) => {
			console.error(error);
			return error;
		});
};

export const sendSignUpMail = async (email: string) => {
	return await axios
		.post(`/auth/send-code`, { email })
		.then((res) => res.data.body.authNum)
		.catch((error) => {
			console.error(error);
			return error;
		});
};

export const sendFindPasswordMail = async (email: string) => {
	return await axios
		.post(`/auth/find-send-code`, { email })
		.then((res) => res.data.body.authNum)
		.catch((error) => {
			console.error(error);
			return error;
		});
};

export const changePasswordByEmail = async (email: string, password: string) => {
	return await axios
		.post(`/auth/change-pwd-from-email`, { email, password })
		.then((res) => res.data.body)
		.catch((error) => {
			console.error(error);
			return error;
		});
};

export const signUp = async (identification: string, password: string, name: string, email: string) => {
	return await axios
		.post(`/auth/signup`, {
			identification,
			password,
			name,
			email,
		})
		.then((res) => res.data.body)
		.catch((error) => error);
};

export const findId = async (name: string, email: string) => {
	return await axios
		.post(`/auth/find-id`, { name, email })
		.then((res) => res.data.body.identification)
		.catch((error) => {
			console.error(error);
			return error;
		});
};
