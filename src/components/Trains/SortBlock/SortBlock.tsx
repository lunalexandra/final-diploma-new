import { useAppDispatch, useAppSelector } from "../../../hooks";
import { setLimit, setSort } from "../../../redux/slices/sortSlice";
import { RootState } from "../../../redux/store";
import classes from "./sortBlock.module.css";
import { useState } from "react"; // Импортируем useState для состояния

interface SortBlockProps {
  count: number; // Измените тип на Props
}

const SortBlock: React.FC<SortBlockProps> = ({ count }) => {
  const dispatch = useAppDispatch();
  const { limit, sort } = useAppSelector((state: RootState) => state.sort);

  // Состояние для отслеживания видимости меню сортировки
  const [isSortMenuVisible, setIsSortMenuVisible] = useState(false);

  // Обработчик для изменения лимита
  const handleLimitChange = (newLimit: number) => {
    console.log("Новое значение лимита:", newLimit);
    dispatch(setLimit(newLimit));
  };

  // Обработчик для изменения сортировки
  const handleSortChange = (newSort: "date" | "min-price" | "duration") => {
    dispatch(setSort(newSort));
    console.log(newSort)
    setIsSortMenuVisible(false); // Скрываем меню после выбора
  };

  return (
    <div className={classes.container}>
      <div className={classes.found}>Найдено {count}</div>
      <div
        className={classes.sort}
        onMouseEnter={() => setIsSortMenuVisible(true)} // Показать меню при наведении
        onMouseLeave={() => setIsSortMenuVisible(false)} // Скрыть меню при уходе мыши
      >
        сортировать по: 
        {/* Если меню видно, показываем список */}
        {isSortMenuVisible ? (
          <div className={classes.dropdown}>
            <div
              onClick={() => handleSortChange("date")}
              className={classes.option}
            >
              по времени
            </div>
            <div
              onClick={() => handleSortChange("min-price")}
              className={classes.option}
            >
             по стоимости
            </div>
            <div
              onClick={() => handleSortChange("duration")}
              className={classes.option}
            >
             по длительности
            </div>
          </div>
        ): (<div className={classes["dropdown-hidden"]}>
          <div
            className={classes.selected}
          >
            {sort === "date" ? "по времени" : sort === "min-price" ? "по стоимости" : "по длительности"}
          </div>
        </div>)}
      </div>
      <div className={classes.show}>
        Показывать по:
        <span
          onClick={() => handleLimitChange(5)}
          className={limit === 5 ? classes.active : ""}
        >
          5
        </span>
        <span
          onClick={() => handleLimitChange(10)}
          className={limit === 10 ? classes.active : ""}
        >
          10
        </span>
        <span
          onClick={() => handleLimitChange(20)}
          className={limit === 20 ? classes.active : ""}
        >
          20
        </span>
      </div>
    </div>
  );
};

export { SortBlock };
