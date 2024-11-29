import { configureStore } from "@reduxjs/toolkit";
import  citiesReducer  from "../slices/citySlice";

export const store = configureStore({
  reducer: {
    cities: citiesReducer,
    //users: usersReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;