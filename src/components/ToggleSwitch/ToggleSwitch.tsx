import { useAppDispatch, useAppSelector } from "../../hooks";
import { RootState } from "../../redux/store";
import { toggleFilter } from "../../redux/slices/filterSlice";
import "./toggleSwitch.css";

interface ToggleSwitchProps {
  filterType: keyof RootState["filters"]["filter"];
  label: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ filterType, label }) => {
  const dispatch = useAppDispatch();
  const isChecked = useAppSelector((state) => state.filters.filter[filterType]);

  const handleChange = () => {
    dispatch(toggleFilter({ filterType }));
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
