import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IQuiz, IQUizAnswers } from "../types";

export interface CounterState {
  quiz?: IQuiz;
  quizAnswers?: IQUizAnswers;
}

const initialState: CounterState = {
  // answers: {},
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuiz: (state, action: PayloadAction<IQuiz>) => {
      state.quiz = action.payload;
    },
    setAnswer: (
      state,
      action: PayloadAction<{ key: string; value: string }>
    ) => {
      state.quizAnswers = {
        ...state.quizAnswers,
        [action.payload.key]: action.payload.value,
      };
    },
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { setQuiz, setAnswer } = quizSlice.actions;
// export const { increment, decrement, incrementByAmount } = quizSlice.actions;

export default quizSlice.reducer;
