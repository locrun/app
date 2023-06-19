export interface SelectOption {
  value: "man" | "woman";
  label: string;
}

export const options: SelectOption[] = [
  { value: "man", label: "man" },
  { value: "woman", label: "woman" },
];
