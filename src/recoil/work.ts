import { atom } from "recoil";

export const workIdState = atom<number>({
	key: "workIdState",
	default: 1,
});
