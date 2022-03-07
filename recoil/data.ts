import * as crypto from "crypto";
import { atom, selectorFamily } from "recoil";
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
      items: ["aaaa", "bbbbb", "ccccc"],
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

export const specifiedDataState = selectorFamily({
  key: "specifiedDataState",
  get:
    (itemID) =>
    ({ get }) => {
      const data = get(dataState);
      let obj = data.find((o) => o.id === itemID);
      return obj;
    },
  set:
    (itemID: number) =>
    ({ set }, newValue: any) =>
      set(dataState, (prevState) => {
        let data = prevState;
        let index = data.findIndex((x) => x.id === itemID);
        data[index] = newValue;
        return data;
      }),
});
