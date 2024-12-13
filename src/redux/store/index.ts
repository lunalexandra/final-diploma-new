import { configureStore } from "@reduxjs/toolkit";
import  citiesReducer  from "../slices/citySlice";
import datesReducer  from "../slices/dateSlice";
import filterReduser from "../slices/filterSlice";

export const store = configureStore({
  reducer: {
    cities: citiesReducer,
    dates: datesReducer,
    filters: filterReduser,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;