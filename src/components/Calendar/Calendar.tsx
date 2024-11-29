import { useState } from "react";
import DatePicker from "react-datepicker";
import { ru } from "date-fns/locale";
//import { format } from "date-fns";
import calendar from "../../assets/images/calendar.png";
import "react-datepicker/dist/react-datepicker.css";
import "./calendar.css";

interface CalendarProps {
  id: string;
  classname: string;
}

interface CustomHeaderProps {
  date: Date;
  decreaseMonth: () => void;
  increaseMonth: () => void;
}

export const Calendar: React.FC<CalendarProps> = ({ id, classname }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setStartDate(date);
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

// const formatDate = (date: Date | null): string => {
//   if (!date) return "";
//   return format(date, "dd/MM/yyyy");
// };
