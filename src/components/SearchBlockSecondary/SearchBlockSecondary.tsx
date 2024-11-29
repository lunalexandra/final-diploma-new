import classes from "./searchBlockSecondary.module.css";
import { Calendar } from "../../components";
//import { ChangePlacesBtn } from "../../components";
import { FindTicketsBtn } from "../../components";

export const SearchBlockSecondary = () => {
  return (
    <>
      <form className={classes["search-secondary__form"]}>
        <div className={classes["search-secondary__direction-box"]}>
          <label
            htmlFor="direction-secondary"
            className={classes["search-secondary__form-label"]}
          >
            Направление
          </label>
          <div className={classes["search-secondary__form-direction"]}>
            <input
              type="text"
              id="direction-secondary"
              className={classes["search-secondary__form-to"]}
              placeholder="Откуда"
            />
            {/* <ChangePlacesBtn /> */}
            <input
              id="back"
              type="text"
              className={classes["search-secondary__form-back"]}
              placeholder="Куда"
            />
          </div>
        </div>

        <div className={classes["search-secondary__dates"]}>
          <label
            htmlFor="start-date-secondary"
            className={classes["search-secondary__form-label"]}
          >
            Дата
          </label>
          <div className={classes["search-secondary__date"]}>
            <Calendar
              id={"start-date-secondary"}
              classname={"headline-block__form-start"}
            />
            <Calendar
              id={"return-date-secondary"}
              classname={"headline-block__form-return"}
            />
          </div>
        </div>
        <div className={classes["search-secondary__btn-box"]}>
          <FindTicketsBtn />
        </div>
      </form>
    </>
  );
};
