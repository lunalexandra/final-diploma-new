import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchOptions } from "../../types/SearchOptions";

const initialState: SearchOptions = {
  date_start: "",
  date_end: "",
};

// Создание среза
const datesSlice = createSlice({
  name: "dates",
  initialState,
  reducers: {
    // Установка даты отправления
    setDateFrom: (state, action: PayloadAction<string>) => {
      state.date_start = action.payload;
      console.log(`Срез дата туда${state.date_start}`)
    },
    // Установка даты прибытия
    setDateTo: (state, action: PayloadAction<string>) => {
      state.date_end = action.payload;
      console.log(`Срез дата оттуда${state.date_end}`)
    },
  },
});

// Экспорт действий и редюсера
export const { setDateFrom, setDateTo } = datesSlice.actions;
export default datesSlice.reducer;