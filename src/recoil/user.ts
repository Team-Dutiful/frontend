import { atom } from "recoil";

export type userType = {
	identification: string;
	name: string;
	email: string;
};

export const userState = atom<userType | null>({
	key: "userState",
	default: null,
});
