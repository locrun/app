import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModalState = {
  isOpen?: boolean;
};

const initialState: ModalState = {
  isOpen: false,
};

const modalWindowSlice = createSlice({
  name: "modalWindow",
  initialState,
  reducers: {
    setIsOpen(state, action: PayloadAction<ModalState>) {
      state.isOpen = action.payload.isOpen;
    },
  },
});

export const { setIsOpen } = modalWindowSlice.actions;
export default modalWindowSlice.reducer;
