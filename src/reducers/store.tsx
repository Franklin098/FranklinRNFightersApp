import {configureStore} from '@reduxjs/toolkit';
import fightersReducer from './fighters/fighters';

export const store = configureStore({
  reducer: {
    fighters: fightersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
