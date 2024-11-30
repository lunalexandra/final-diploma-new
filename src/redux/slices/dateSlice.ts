import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Интерфейс для состояния
interface DateState {
  dateFrom: string; // дата отправления
  dateTo: string;   // дата прибытия
}

// Начальное состояние
const initialState: DateState = {
  dateFrom: "",
  dateTo: "",
};

// Создание среза
const datesSlice = createSlice({
  name: "dates",
  initialState,
  reducers: {
    // Установка даты отправления
    setDateFrom: (state, action: PayloadAction<string>) => {
      state.dateFrom = action.payload;
    },
    // Установка даты прибытия
    setDateTo: (state, action: PayloadAction<string>) => {
      state.dateTo = action.payload;
    },
  },
});

// Экспорт действий и редюсера
export const { setDateFrom, setDateTo } = datesSlice.actions;
export default datesSlice.reducer;