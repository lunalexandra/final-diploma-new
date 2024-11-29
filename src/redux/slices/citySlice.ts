import {
  buildCreateSlice,
  asyncThunkCreator,
  PayloadAction,
} from "@reduxjs/toolkit";

// Тип состояния для городов
interface CitiesState {
  fromCity: string; // Город отправления
  toCity: string; // Город назначения
  departureSuggestions: string[];
  destinationSuggestions: string[]; // Подсказки городов
  loadingFromCity: boolean;
  loadingToCity: boolean;// Состояние загрузки
  error: string | null; // Ошибка, если запрос завершился неудачей
}

// Начальное состояние
const initialState: CitiesState = {
  fromCity: "",
  toCity: "",
  departureSuggestions: [],
  destinationSuggestions: [],
  loadingFromCity: false,
  loadingToCity: false,
  error: null,
};

const createSliceWithThunk = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

// Срез для городов
const citiesSlice = createSliceWithThunk({
  name: "cities",
  initialState,
  selectors: {
    CitiesState: (state) => state,
  },
  reducers: (create) => ({
    setFromCity: create.reducer((state, action: PayloadAction<string>) => {
      state.fromCity = action.payload;
    }),
    setToCity: create.reducer((state, action: PayloadAction<string>) => {
      state.toCity = action.payload;
    }),
    clearSuggestions: create.reducer((state) => {
      state.departureSuggestions = [];
    }),
    destinationSuggestions: create.reducer((state) => {
      state.destinationSuggestions = [];
    }),
    swapCities: create.reducer((state) => {
      const temp = state.fromCity;
      state.fromCity = state.toCity;
      state.toCity = temp;
    }),
    
    fetchDepartureSuggestions: create.asyncThunk<string[],string,{ rejectValue: string }>(
      async (name, { rejectWithValue }) => {
        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/routes/cities?name=${name}`);

          if (!response.ok) {
            return rejectWithValue("Не удалось загрузить данные о городах.");
          }
          const data = await response.json();
          console.log("111")
    return data.map((city: { name: string }) => city.name);
        } catch (error) {
          console.log(error)
          return rejectWithValue("Произошла ошибка при загрузке данных.");
        }
      },
      {
        pending: (state) => {
          state.loadingFromCity = true;
          state.error = "";
        },
        fulfilled: (state, action) => {
          state.departureSuggestions = action.payload;
          state.error = "";
        },
        rejected: (state, action) => {
          state.error = action.payload as string;
        },
        settled: (state) => {
          state.loadingFromCity = false;
        },
      }
    ),

    fetchDestinationSuggestions: create.asyncThunk<string[],string,{ rejectValue: string }>(
      async (name, { rejectWithValue }) => {
        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/routes/cities?name=${name}`);

          if (!response.ok) {
            return rejectWithValue("Не удалось загрузить данные о городах.");
          }
          const data = await response.json();
          console.log("111")
    return data.map((city: { name: string }) => city.name);
        } catch (error) {
          console.log(error)
          return rejectWithValue("Произошла ошибка при загрузке данных.");
        }
      },
      {
        pending: (state) => {
          state.loadingToCity = true;
          state.error = "";
        },
        fulfilled: (state, action) => {
          state.destinationSuggestions = action.payload;
          state.error = "";
        },
        rejected: (state, action) => {
          state.error = action.payload as string;
        },
        settled: (state) => {
          state.loadingToCity = false;
        },
      }
    )
  }),

});

export const { setFromCity, setToCity, clearSuggestions, fetchDepartureSuggestions, fetchDestinationSuggestions, swapCities } = citiesSlice.actions;
export default citiesSlice.reducer;