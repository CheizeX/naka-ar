import { configureStore, combineReducers } from '@reduxjs/toolkit';

import currentThemeReducer from './slices/current-theme/current-theme';

const ui = combineReducers({
  currentThemeReducer,
});

export const store = configureStore({
  reducer: {
    ui,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
