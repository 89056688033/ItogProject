import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  devTools: true,
});

export type TState = ReturnType<typeof store.getState>;
