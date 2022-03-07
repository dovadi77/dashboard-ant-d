export type Item = {
  key: string;
  id: number;
  name: string;
  bank: string;
  owner: string;
  type: string;
  items?: string[];
};

export type FormHeaders = {
  title: string;
  key: string;
  type: "text" | "number" | "email" | "radio" | "dropdown";
  multipleChoice?: string[];
}[];

export type FormValues = {
  [key: string]: any;
};
