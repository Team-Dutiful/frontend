import axios from "axios";

export const sendAuthCodeEmail = (email: string) => {
	console.log(email);
	return axios.post("http://localhost:8080/auth/send-code", { email });
};

export const signUp = (identification: string, password: string, name: string, email: string) => {
	console.log(identification, password, name, email);
	return axios.post("http://localhost:8080/auth/signup", {
		identification,
		password,
		name,
		email,
	});
};
