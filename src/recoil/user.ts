import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export type userType = {
	user_id: number;
	identification: string;
	name: string;
	email: string;
};

export const userState = atom<userType | null>({
	key: "userState",
	default: null,
	effects_UNSTABLE: [persistAtom],
});
