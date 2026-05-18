import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // TODO: state.value를 1 증가시키는 코드를 작성해보세요
    },
    decrement: (state) => {
      // TODO: state.value를 1 감소시키는 코드를 작성해보세요
    },
    reset: (state) => {
      // TODO: state.value를 0으로 초기화하는 코드를 작성해보세요
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;