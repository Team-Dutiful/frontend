// import axios from "axios";
import { instance as axios } from "../config";

export const getGroups = async () => {
	return await axios
		.get("/groups")
		.then((res) => res.data)
		.catch((error) => error.response);
};

export const getMembers = async (groupId: number) => {
	return await axios
		.get(`/groups/${groupId}/members`)
		.then((res) => res.data)
		.catch((error) => error.response);
};

export const createGroup = async (name: string, color: string) => {
	return await axios
		.post("/groups", { name: name, color: color })
		.then((res) => res.data)
		.catch((error) => error.response);
};

export const editGroup = async (groupId: number, name: string, color: string) => {
	return await axios
		.put(`/groups/${groupId}`, { name: name, color: color })
		.then((res) => res.data)
		.catch((error) => error.response);
};

export const exitGroup = async (groupId: number) => {
	return await axios
		.post(`/groups/${groupId}/exit`)
		.then((res) => res.data)
		.catch((error) => error.response);
};

export const deleteGroup = async (groupId: number) => {
	return await axios
		.delete(`/groups/${groupId}`)
		.then((res) => res.data)
		.catch((error) => error.response);
};

export const changeGroupLeader = async (groupId: number, memberId: number) => {
	return await axios
		.put(`/groups/${groupId}/change-leader`, {
			user_id: memberId,
		})
		.then((res) => res.data)
		.catch((error) => error.response);
};

export const inviteMember = async (groupId: number, email: string) => {
	return await axios
		.post(`/groups/${groupId}/invite`, {
			email: email,
		})
		.then((res) => res.data)
		.catch((error) => error.response);
};

export const banMember = async (groupId: number, memberId: number) => {
	return await axios
		.post(`/groups/${groupId}/ban`, {
			user_id: memberId,
		})
		.then((res) => res.data)
		.catch((error) => error.response);
};
