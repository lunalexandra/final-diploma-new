import { Calendar } from "../Calendar";
import Icon from "../Icon/Icon";
import Slider from "../Slider/Slider";
import  LastTickets from "../LastTickets/LastTickets";
import TimeSliderCard from "../TimeSliderCard/TimeSliderCard";
import compartmentIcon from "../../assets/images/wagons/compartment.png";
import couchetteCarIcon from "../../assets/images/wagons/couchette-car.png";
import coachIcon from "../../assets/images/wagons/coach.png";
import loungeCarIcon from "../../assets/images/wagons/lux.png";
import WiFiIcon from "../../assets/images/wagons/wi-fi.png";
import expressIcon from "../../assets/images/wagons/express.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import classes from "./filter.module.css";

export const Filter = () => { 

  return (
    <>
      <div className={classes["filter__container"]}>
        <div className={classes["filter__dates"]}>
          <label htmlFor="">Дата поездки</label>
          <Calendar
            id={"filter-date-from"}
            type="dateFrom"
            classname={"filter__dates-from"}
          />
          <label htmlFor="">Дата возвращения</label>
          <Calendar
            id={"filter-date-to"}
            type="dateTo"
            classname={"filter__dates-to"}
          />
        </div>
        <div className={classes["filter__wagons"]}>
          <div className={classes["wagons__item"]}>
            <div className={classes["wagons__img"]}>
              <Icon
                normalSrc={compartmentIcon}
                alt={"compartmentIcon"}
                classname={classes["wagons__icon"]}
              />
            </div>
            <ToggleSwitch filterType={"compartment"} label={"Купе"} />
          </div>

          <div className={classes["wagons__item"]}>
            <div className={classes["wagons__img"]}>
              <Icon
                normalSrc={couchetteCarIcon}
                alt={"couchetteCarIcon"}
                classname={classes["wagons__icon"]}
              />
            </div>
            <ToggleSwitch filterType={"couchetteCar"} label={"Плацкарт"} />
          </div>

          <div className={classes["wagons__item"]}>
            <div className={classes["wagons__img"]}>
              <Icon
                normalSrc={coachIcon}
                alt={"coachIcon"}
                classname={classes["wagons__icon"]}
              />{" "}
            </div>
            <ToggleSwitch filterType={"coach"} label={"Сидячий"} />
          </div>

          <div className={classes["wagons__item"]}>
            <div className={classes["wagons__img"]}>
              <Icon
                normalSrc={loungeCarIcon}
                alt={"loungeCarIcon"}
                classname={classes["wagons__icon"]}
              />{" "}
            </div>
            <ToggleSwitch filterType={"loungeCar"} label={"Люкс"} />
          </div>

          <div className={classes["wagons__item"]}>
            <div className={classes["wagons__img"]}>
              <Icon
                normalSrc={WiFiIcon}
                alt={"WiFiIcon"}
                classname={classes["wagons"]}
              />{" "}
            </div>
            <ToggleSwitch filterType={"wiFi"} label={"Wi-Fi"} />
          </div>

          <div className={classes["wagons__item"]}>
            <div className={classes["wagons__img"]}>
              <Icon
                normalSrc={expressIcon}
                alt={"expressIcon"}
                classname={classes["wagons__icon"]}
              />
            </div>
            <ToggleSwitch filterType={"express"} label={"Экспресс"} />
          </div>
        </div>
        <div className={classes["filter__cost"]}>
          <h3 className={classes["filter__titles"]}>Стоимость</h3>
          <p className={classes["filter__from-to-titles"]}>
            <span>от</span>
            <span>до</span>
          </p>
          <div className={classes["slider-box"]}>
            <Slider type="price" min={1000} max={15000} step={100} />
          </div>
        </div>
        <TimeSliderCard title={"Туда"} />
        <TimeSliderCard title={"Обратно"} />
      </div>

      <div className={classes["last-tickets"]}>
        <h3 className={classes["last-tickets__titles"]}>ПОСЛЕДНИЕ БИЛЕТЫ</h3>
      <LastTickets />
      </div>
    </>
  );
};
