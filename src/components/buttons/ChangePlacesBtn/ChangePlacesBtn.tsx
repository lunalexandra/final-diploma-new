import classes from "./changePlacesBtn.module.css";
import changeIcon from "/src/assets/images/change.png";

interface ChangePlacesBtnProps {
    onClick: () => void;
}

export const ChangePlacesBtn: React.FC<ChangePlacesBtnProps> = ({ onClick }) => {
    return (
      <button
        type="button"
        aria-label="Сменить направление"
        className={classes["change-btn"]}
        onClick={onClick}
      >
        <img
          src={changeIcon}
          alt="Сменить направление"
          className={classes["change-btn__icon"]}
        />
      </button>
    );
  };
