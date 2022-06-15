import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { Input } from "./Input";
import { WeatherPanel } from "./WeatherPanel";
import { List } from '../types';

export const WeatherContainer: React.FC = () => {
  const { weather } = useContext(WeatherContext);

  const morning = weather ? weather.list.filter((item: List) => item.dt_txt.includes("06:00:00")) : [];
  const day = weather ? weather.list.filter((item: List) => item.dt_txt.includes("15:00:00")) : [];
  const night = weather ? weather.list.filter((item: List) => item.dt_txt.includes("00:00:00")) : [];

  const combinedWeather = morning.map((item: List, index: number) => {
    return {
      morning: { dt: item.dt, ...item.main },
      day: day[index].main,
      night: night[index].main,
      dayTime: item.dt_txt
    }
  });

  return (
    <div>
      <Input />
      <div className="weather-row">
        {weather ? combinedWeather.map(item => {
          const { morning, day, night, dayTime } = item;
          return (
            <WeatherPanel morning={morning} day={day} night={night} dayTime={dayTime} key={morning.dt} />
          )
        }) : null}
      </div>
    </div>
  );
};
