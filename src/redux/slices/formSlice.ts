import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { SelectOption } from "shared/options";

interface FormState {
  phone: string;
  email: string;
  nickname: string;
  name: string;
  surname: string;
  sex: SelectOption | {};
  selectedAdvantages: { name: string }[];
  checkedCheckboxes: number[];
  selectedRadios: number[];
  about: string;
}

export interface FormStateContainer {
  formData: FormState;
}

const initialState: FormStateContainer = {
  formData: {
    phone: "",
    email: "",
    nickname: "",
    name: "",
    surname: "",
    sex: {},
    selectedAdvantages: [],
    checkedCheckboxes: [],
    selectedRadios: [],
    about: "",
  },
};
export const formSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<FormState>) => {
      state.formData = action.payload;
    },
  },
});

export const { setFormData } = formSlice.actions;

export default formSlice.reducer;
