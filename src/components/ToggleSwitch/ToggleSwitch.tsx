import { useAppDispatch, useAppSelector } from "../../hooks";
import { toggleFilter } from "../../redux/slices/filterSlice";
import "./toggleSwitch.css";

// Изменим тип filterType на строку
interface ToggleSwitchProps {
  filterType: | "have_first_class"
  | "have_second_class"
  | "have_third_class"
  | "have_fourth_class"
  | "have_wifi"
  | "have_express"; // Используем ключи из SearchOptions
  label: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ filterType, label }) => {
  const dispatch = useAppDispatch();
  
  // Здесь мы обращаемся к фильтру через ключ filterType
  const isChecked = useAppSelector((state) => {
    const filterValue = state.filters[filterType];
    return typeof filterValue === 'boolean' ? filterValue : false; // Значение по умолчанию false
  });

  const handleChange = () => {
    dispatch(toggleFilter(filterType)); // Передаем только filterType как строку
  };

  return (
    <div className="toggle-switch-container">
      <div className="toggle-switch__title">
        {label}
      </div>
      <label className="toggle-switch">
        <input
          id={label}
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
        />
        <span className="toggle-switch__slider"></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
