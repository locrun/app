export enum Gender {
  MAN = "man",
  WOMAN = "woman",
}

export interface SelectOption {
  value: Gender | string;
  label: string;
}

export const options: SelectOption[] = [
  { value: Gender.MAN, label: "man" },
  { value: Gender.WOMAN, label: "woman" },
];
