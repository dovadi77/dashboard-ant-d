import * as crypto from "crypto";
import { atom } from "recoil";
import { selector } from "recoil";
import type { Item } from "../constants";

export const dataState = atom({
	key: "dataState",
	default: [
		{
			key: "1",
			id: 1,
			name: "Test",
			bank: "BANK ABC",
			owner: "Majiso Fun",
			type: "E-WALLET",
		},
	] as Item[],
});

export const dataLengthState = selector({
	key: "dataLengthState",
	get: ({ get }) => {
		const items = get(dataState);
		return items.length;
	},
});
