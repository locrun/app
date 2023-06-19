import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Progress {
  percent: number;
}

const initialState: Progress = {
  percent: 0,
};
export const progressSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    setPercent: (state, action: PayloadAction<Progress>) => {
      state.percent = action.payload.percent;
    },
  },
});

export const { setPercent } = progressSlice.actions;

export default progressSlice.reducer;
