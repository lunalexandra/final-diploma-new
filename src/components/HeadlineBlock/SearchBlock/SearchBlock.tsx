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
            <CityInput id={"direction"} type={"fromCity"} />
            <ChangePlacesBtn onClick={handleChangePlaces} />
            <CityInput id={"back"} type={"toCity"} />
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
              classname={"headline-block__form-start"}
            />
            <Calendar
              id={"return-date"}
              classname={"headline-block__form-return"}
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

// <form className={classes["search-secondary__form"]}>
// <div className={classes["search-secondary__direction-box"]}>
//   <label
//     htmlFor="direction-secondary"
//     className={classes["search-secondary__form-label"]}
//   >
//     Направление
//   </label>
//   <div className={classes["search-secondary__form-direction"]}>
//     <input
//       type="text"
//       id="direction-secondary"
//       className={classes["search-secondary__form-to"]}
//       placeholder="Откуда"
//     />
//     <ChangePlacesBtn />
//     <input
//       id="back"
//       type="text"
//       className={classes["search-secondary__form-back"]}
//       placeholder="Куда"
//     />
//   </div>
// </div>

// <div className={classes["search-secondary__dates"]}>
//   <label
//     htmlFor="start-date-secondary"
//     className={classes["search-secondary__form-label"]}
//   >
//     Дата
//   </label>
//   <div className={classes["search-secondary__date"]}>
//     <Calendar
//       id={"start-date-secondary"}
//       classname={"headline-block__form-start"}
//     />
//     <Calendar
//       id={"return-date-secondary"}
//       classname={"headline-block__form-return"}
//     />
//   </div>
// </div>
// <div className={classes["search-secondary__btn-box"]}>
//   <FindTicketsBtn />
// </div>
// </form>
