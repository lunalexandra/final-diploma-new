import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  filter: {
    compartment: boolean;
    coach: boolean;
    loungeCar: boolean;
    couchetteCar: boolean;
    wiFi: boolean;
    express: boolean;
  };
  price_from: number; // Цена от
  price_to: number; // Цена до
  start_departure_hour_from: number; // Час отбытия от
  start_departure_hour_to: number; // Час отбытия до
  start_arrival_hour_from: number; // Час прибытия от
  start_arrival_hour_to: number; // Час прибытия до
  end_departure_hour_from: number; // Час отбытия назад от
  end_departure_hour_to: number; // Час отбытия назад до
  end_arrival_hour_from: number; // Час прибытия назад от
  end_arrival_hour_to: number; // Час прибытия назад до
}

const initialState: FilterState = {
  filter: {
    compartment: false,
    coach: false,
    loungeCar: false,
    couchetteCar: false,
    wiFi: false,
    express: false,
  },
  price_from: 2000, // Начальное значение цены от
  price_to: 5000, // Начальное значение цены до
  start_departure_hour_from: 0, // Начальный час отбытия от
  start_departure_hour_to: 24, // Начальный час отбытия до
  start_arrival_hour_from: 0, // Начальный час прибытия от
  start_arrival_hour_to: 24, // Начальный час прибытия до
  end_departure_hour_from: 0, // Начальный час отбытия назад от
  end_departure_hour_to: 24, // Начальный час отбытия назад до
  end_arrival_hour_from: 0, // Начальный час прибытия назад от
  end_arrival_hour_to: 24, // Начальный час прибытия назад до
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    toggleFilter: (state, action: PayloadAction<{ filterType: keyof FilterState['filter'] }>) => {
      const { filterType } = action.payload;
      state.filter[filterType] = !state.filter[filterType];
    },
    updatePriceRange: (state, action: PayloadAction<{ from: number; to: number }>) => {
      state.price_from = action.payload.from; // Обновляем цену от
      state.price_to = action.payload.to; // Обновляем цену до
    },
    updateStartDepartureHour: (state, action: PayloadAction<{ from: number; to: number }>) => {
      state.start_departure_hour_from = action.payload.from; // Обновляем час отбытия от
      state.start_departure_hour_to = action.payload.to; // Обновляем час отбытия до
    },
    updateStartArrivalHour: (state, action: PayloadAction<{ from: number; to: number }>) => {
      state.start_arrival_hour_from = action.payload.from; // Обновляем час прибытия от
      state.start_arrival_hour_to = action.payload.to; // Обновляем час прибытия до
    },
    updateEndDepartureHour: (state, action: PayloadAction<{ from: number; to: number }>) => {
      state.end_departure_hour_from = action.payload.from; // Обновляем час отбытия назад от
      state.end_departure_hour_to = action.payload.to; // Обновляем час отбытия назад до
    },
    updateEndArrivalHour: (state, action: PayloadAction<{ from: number; to: number }>) => {
      state.end_arrival_hour_from = action.payload.from; // Обновляем час прибытия назад от
      state.end_arrival_hour_to = action.payload.to; // Обновляем час прибытия назад до
    },
  },
});

export const {
  toggleFilter,
  updatePriceRange,
  updateStartDepartureHour,
  updateStartArrivalHour,
  updateEndDepartureHour,
  updateEndArrivalHour,
} = filtersSlice.actions;

export default filtersSlice.reducer;
