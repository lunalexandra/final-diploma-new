import { useState } from "react";
import { RootState } from "../../redux/store";
import DatePicker from "react-datepicker";
import { ru } from "date-fns/locale";
import calendar from "../../assets/images/calendar.png";
import { setDateFrom, setDateTo } from "../../redux/slices/dateSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import "react-datepicker/dist/react-datepicker.css";
import "./calendar.css";

interface CalendarProps {
  id: string;
  classname?: string;
  type: "dateFrom" | "dateTo";
}

interface CustomHeaderProps {
  date: Date;
  decreaseMonth: () => void;
  increaseMonth: () => void;
}

export const Calendar: React.FC<CalendarProps> = ({ id, classname, type }) => {

  const dispatch = useAppDispatch();

  const value = useAppSelector((state: RootState) =>
    type === "dateFrom" ? state.dates.dateFrom : state.dates.dateTo
  );

  const [startDate, setStartDate] = useState<Date | null>(
    value ? new Date(value) : null
  );

  const handleDateChange = (date: Date | null) => {
    if (date) {
      const formattedDate = date.toISOString().split("T")[0];
      if (type === "dateFrom") {
        dispatch(setDateFrom(formattedDate)); // Сохраняем дату отправления
      } else {
        dispatch(setDateTo(formattedDate)); // Сохраняем дату прибытия
      }
    }
    setStartDate(date); // Обновляем локальное состояние
    console.log(`${type}: ${date ? date.toISOString().split("T")[0] : null}`);
  };

  const renderCustomHeader = ({
    date,
    decreaseMonth,
    increaseMonth,
  }: CustomHeaderProps) => {
    const month = date.toLocaleString("ru-RU", { month: "long" });

    return (
      <div className="react-datepicker__current-month">
        <button
          className="decrease-month-arrow"
          onClick={(e) => {
            e.preventDefault();
            decreaseMonth();
          }}
        >
          {"◀"}
        </button>
        <span>{month}</span> {/* Отображаем только месяц */}
        <button
          className="increase-month-arrow"
          onClick={(e) => {
            e.preventDefault();
            increaseMonth();
          }}
        >
          {"▶"}
        </button>
      </div>
    );
  };

  return (
    <div className="calendar">
      {/* Сам календарь */}
      <DatePicker
        id={id}
        locale={ru}
        selected={startDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        placeholderText="ДД/ММ/ГГ"
        className={classname}
        popperPlacement="bottom-start"
        renderCustomHeader={renderCustomHeader}
      />
      {/* Кнопка для открытия календаря */}
      <button
        type="button"
        onClick={() => document.getElementById(id)?.focus()}
        className="custom-button"
      >
        <img src={calendar} alt="calendar" className="custom-button-img" />
      </button>
    </div>
  );
};
