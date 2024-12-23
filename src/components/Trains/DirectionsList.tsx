import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  fetchDirections,
  clearDirections,
} from "../../redux/slices/directionsSlice";
import { RootState } from "../../redux/store";
import { TrainInfo } from "../../types/TrainInfo";
import { TrainCard } from "./trainCard/TrainCard";
import  {SortBlock}  from "./SortBlock/SortBlock";
import classes from "./trains.module.css";

const DirectionsList: React.FC = () => {
  const dispatch = useAppDispatch();

  // Получаем данные из состояния Redux
  const { directions, total_count, loading, error } = useAppSelector(
    (state: RootState) => state.directions
  );
  const { fromCity, toCity } = useAppSelector(
    (state: RootState) => state.cities
  );

  const { date_end, date_start } = useAppSelector(
    (state: RootState) => state.dates
  );

  const {
    have_first_class,
    have_second_class,
    have_third_class,
    have_fourth_class,
    have_wifi,
    have_express,
    price_from,
    price_to,
    start_departure_hour_from,
    start_departure_hour_to,
    start_arrival_hour_from,
    start_arrival_hour_to,
    end_departure_hour_from,
    end_departure_hour_to,
    end_arrival_hour_from,
    end_arrival_hour_to,
  } = useAppSelector((state: RootState) => state.filters);

  const { sort, limit } = useAppSelector((state: RootState) => state.sort)

  // Локальное состояние для массива карточек
  const [cardArray, setCardArray] = useState<TrainInfo[]>([]);

  useEffect(() => {
    // Запрашиваем направления, когда компонент монтируется
    if (fromCity && toCity) {
      dispatch(fetchDirections("")); // Вызываем без аргументов
      console.log(
        `Названия городов в направлениях: ${fromCity._id}, ${toCity._id}`
      );
    } else {
      console.error("Города не выбраны.");
    }

    // Очищаем список при размонтировании компонента
    return () => {
      dispatch(clearDirections());
    };
  }, [
    dispatch,
    fromCity,
    toCity,
    date_end,
    date_start,
    have_first_class,
    have_second_class,
    have_third_class,
    have_fourth_class,
    have_wifi,
    have_express,
    price_from,
    price_to,
    start_departure_hour_from,
    start_departure_hour_to,
    start_arrival_hour_from,
    start_arrival_hour_to,
    end_departure_hour_from,
    end_departure_hour_to,
    end_arrival_hour_from,
    end_arrival_hour_to,
    sort,
    limit
  ]); 

  useEffect(() => {
    // Обновляем локальное состояние при изменении данных directions
    if (directions.length > 0) {
      setCardArray(directions); // Обновляем состояние с новыми направлениями
    }
  }, [directions]); // Добавляем directions в зависимости

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    console.log(error);
  }

  return (
    <div>
      <SortBlock count={total_count} />
      {total_count === 0 ? (
        <p></p>
      ) : (
        <div className={classes.list}>
          {cardArray.map((direction: TrainInfo, index) => (
            <TrainCard
              key={`${fromCity.name}-${toCity.name}-${index}`}
              trainNumber={direction.departure.train.name}
              departureCityFrom={direction.departure.from.city.name}
              departureCityTo={direction.departure.to.city.name}
              departureFromTime={direction.departure.from.datetime}
              departureStationFrom={
                direction.departure.from.railway_station_name
              }
              departureDuration={direction.departure.duration}
              departureToTime={direction.departure.to.datetime}
              departureStationTo={direction.departure.to.railway_station_name}
              arrivalCityFrom={direction.arrival?.from.city.name}
              arrivalCityTo={direction.arrival?.to.city.name}
              arrivalFromTime={direction.arrival?.from.datetime}
              arrivalStationFrom={direction.arrival?.from.railway_station_name}
              arrivalDuration={direction.arrival?.duration}
              arrivalToTime={direction.arrival?.to.datetime}
              arrivalStationTo={direction.arrival?.to.railway_station_name}
              seats_info={direction.available_seats_info}
              price_info={direction.departure.price_info}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DirectionsList;
