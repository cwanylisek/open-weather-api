import { Region } from "../context/WeatherContext";
import { WeatherData } from "../types";

const APIKEY = "1e6cead52739de7e4cc339c90eb9c30a";
export const fetchWeather = async (region: Region) => {
  const { city } = region;

  const data: WeatherData = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${APIKEY}&units=metric`
  )
    .then((res) => res.json())
    .then((data) => data);

  return data;

};
