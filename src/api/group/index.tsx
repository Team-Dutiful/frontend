import axios from "axios";

const API_URL = "http://localhost:10101/groups";

export const getGroups = () => {
	axios
		.get(`${API_URL}`, {
			withCredentials: true,
		})
		.then((res) => {
			console.log(res.data.body.groups);
			return res.data.body.groups;
		})
		.catch((err) => {
			return err;
		});
};

export const getMembers = (groupId: number): any => {
	axios
		.get(`${API_URL}/${groupId}/members`)
		.then((res) => {
			console.log(res.data);
			return res.data.body.group_members;
		})
		.catch((err) => {
			return err;
		});
};

export const createGroup = (name: string, color: string): any => {
	axios
		.post(`${API_URL}`, { name: name, color: color })
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			return err;
		});
};

export const editGroup = (groupId: number, name: string, color: string) => {
	return axios.put(`${API_URL}/${groupId}`, { name: name, color: color });
};

export const exitGroup = (groupId: number) => {
	return axios
		.post(`${API_URL}/${groupId}/exit`, {})
		.then(() => {
			alert("그룹 나가기 성공.");
		})
		.catch((err) => alert("그룹 나가기 실패!" + err));
};

export const deleteGroup = (groupId: number) => {
	return axios.delete(`${API_URL}/${groupId}`, {});
};

export const chagneGroupLeader = (groupId: number, userId: number) => {
	return axios.put(`${API_URL}/${groupId}/change-leader`, {
		user_id: userId,
	});
};
