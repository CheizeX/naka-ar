/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

interface IUserByIdFirstNameSlice {
  currentTheme: Theme;
}

const initialState: IUserByIdFirstNameSlice = {
  currentTheme: Theme.LIGHT,
};

export const currentTheme = createSlice({
  name: 'currentTheme',
  initialState,
  reducers: {
    setCurrentTheme: (state, action: PayloadAction<Theme>) => {
      state.currentTheme = action.payload;
    },
  },
});

export const { setCurrentTheme } = currentTheme.actions;
export default currentTheme.reducer;
