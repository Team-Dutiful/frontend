import { atom } from "recoil";

export type userType = {
	user_id: number;
	identification: string;
	name: string;
	email: string;
};

export const userState = atom<userType | null>({
	key: "userState",
	default: null,
});
