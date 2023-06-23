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
    setPercentProgressBar: (state, action: PayloadAction<Progress>) => {
      state.percent = action.payload.percent;
    },
  },
});

export const { setPercentProgressBar } = progressSlice.actions;

export default progressSlice.reducer;
