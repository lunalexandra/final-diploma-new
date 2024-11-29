import classes from "./findTicketsBtn.module.css";

export const FindTicketsBtn = () => {
    return (
        <button
        type="submit"
        className={classes["find-tickets-btn"]}
      >
        НАЙТИ БИЛЕТЫ
      </button>
    )
}