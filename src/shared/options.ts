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
export const checkBoxes = [
  { id: "field-checkbox-group-option-1", label: "1" },
  { id: "field-checkbox-group-option-2", label: "2" },
  { id: "field-checkbox-group-option-3", label: "3" },
];
export const radioOptions = [
  { id: "field-radio-group-option-1", label: "1" },
  { id: "field-radio-group-option-2", label: "2" },
  { id: "field-radio-group-option-3", label: "3" },
];
