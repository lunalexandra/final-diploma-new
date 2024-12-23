import { useAppDispatch } from "../../../hooks";
import { swapCities } from "../../../redux/slices/citySlice";
import { Calendar } from "../../Calendar";
import { ChangePlacesBtn } from "../../buttons/ChangePlacesBtn";
import { FindTicketsBtn } from "../../buttons/FindTicketsBtn";
import CityInput from "../../CityInput/CityInput";
import classes from "../SearchBlock/searchBlock.module.css";

interface SearchBlockProps {
  style?: React.CSSProperties;
  styleBtn?: React.CSSProperties; // Определяем пропс style как необязательный
}

export const SearchBlock: React.FC<SearchBlockProps> = ({style, styleBtn}) => {
  const dispatch = useAppDispatch();

  const handleChangePlaces = () => {
    dispatch(swapCities()); // Вызываем action для обмена полей
  };

  return (
    <div className={classes["headline-block__search-block"]}>
      <form className={classes["headline-block__form"]} style={style}>
        <div className={classes["headline-block__direction-box"]}>
          <label
            htmlFor="direction"
            className={classes["headline-block__form-label"]}
          >
            Направление
          </label>
          <div className={classes["headline-block__form-direction"]}>
            <CityInput idForLabel={"direction"} type={"fromCity"} />
            <ChangePlacesBtn onClick={handleChangePlaces} />
            <CityInput idForLabel={"back"} type={"toCity"} />
          </div>
        </div>
        <div className={classes["headline-block__dates"]}>
          <label
            htmlFor="start-date"
            className={classes["headline-block__form-label"]}
          >
            Дата
          </label>
          <div className={classes["headline-block__form-date"]}>
            <Calendar
              id={"start-date"}
              type={"date_start"}
              classname={"headline-block__form-start"}
              classnameImg={"custom-button"}
            />
            <Calendar
              id={"return-date"}
              type={"date_end"}
              classname={"headline-block__form-return"}
              classnameImg={"custom-button"}
            />
          </div>
        </div>
        <div className={classes["headline-block__btn-box"]} style={styleBtn}>
          <FindTicketsBtn />
        </div>
      </form>
    </div>
  );
};
