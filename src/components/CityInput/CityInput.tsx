import React, { useState, useEffect, useRef } from "react";
import { RootState } from "../../redux/store";
import {
  setFromCity,
  setToCity,
  clearSuggestions,
  fetchDepartureSuggestions,
  fetchDestinationSuggestions,
} from "../../redux/slices/citySlice";
import { useAppSelector, useAppDispatch } from "../../hooks";
import "./cityInput.css";

interface CityInputProps {
  type: "fromCity" | "toCity"; // Тип ввода (откуда/куда)
  id: string;
}

const CityInput: React.FC<CityInputProps> = ({ type, id }) => {
  const dispatch = useAppDispatch();

  // Выбираем текущее значение и список подсказок из Redux в зависимости от типа инпута
  const value = useAppSelector((state: RootState) =>
    type === "fromCity" ? state.cities.fromCity : state.cities.toCity
  );
  const suggestions = useAppSelector((state: RootState) =>
    type === "fromCity"
      ? state.cities.departureSuggestions
      : state.cities.destinationSuggestions
  );
  const loading = useAppSelector((state: RootState) =>
    type === "fromCity" ? state.cities.loadingFromCity : state.cities.loadingToCity
  );

  // Локальное состояние для управления видимостью подсказок
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Реф для контейнера подсказок
  const suggestionsRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    // Устанавливаем текущее значение
    if (type === "fromCity") {
      dispatch(setFromCity(newValue));
    } else {
      dispatch(setToCity(newValue));
    }

    // Если длина ввода больше 2 символов, загружаем подсказки
    if (newValue.length >= 2) {
      if (type === "fromCity") {
        dispatch(fetchDepartureSuggestions(newValue));
      } else {
        dispatch(fetchDestinationSuggestions(newValue));
      }
      setShowSuggestions(true); // Показываем подсказки
    } else {
      dispatch(clearSuggestions());
      setShowSuggestions(false); // Скрываем подсказки
    }
  };

  const handleSuggestionClick = (city: string) => {
    if (type === "fromCity") {
      dispatch(setFromCity(city));
    } else {
      dispatch(setToCity(city));
    }
    dispatch(clearSuggestions());
    setShowSuggestions(false); // Скрываем подсказки после выбора
  };

  // Обработчик для клика вне подсказок
  const handleClickOutside = (event: MouseEvent) => {
    if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node)) {
      setShowSuggestions(false); // Скрываем подсказки
    }
  };

  // Устанавливаем/удаляем обработчик кликов по документу
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="city-input-container" ref={suggestionsRef}>
      <input
        id={id}
        type="text"
        value={value}
        onChange={handleInputChange}
        className={type === "fromCity" ? "input-from" : "input-to"}
        placeholder={type === "fromCity" ? "Откуда" : "Куда"}
      />
      {loading && <p style={{position: "absolute", color: "#928f94", paddingTop: "4px"}}>Поиск...</p>}
      {showSuggestions && suggestions.length > 0 && (
        <div className="suggestions-container">
          {suggestions.map((city, index) => (
            <div
              key={index}
              className={type === "fromCity" ? "suggestion-item suggestion-item-from" : "suggestion-item suggestion-item-to"}
              onClick={() => handleSuggestionClick(city)}
            >
              {city}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CityInput;
