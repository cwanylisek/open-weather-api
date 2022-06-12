import React, { createContext, Dispatch, SetStateAction, useState } from 'react';

interface WeatherProviderInterface {
  weatherData: string[];
  children: React.ReactNode;
}

interface WeatherContextInterface {
  weather: string[];
  city: {};
  setWeather: Dispatch<SetStateAction<string[]>>;
  setCity: Dispatch<SetStateAction<{city: string, country: string}>>;
}

export const WeatherContext = createContext<WeatherContextInterface>({
  weather: [],
  city: {},
  setWeather: () => {
    //do nothing
  },
  setCity: () => {
    // do noting
  },
});

export const WeatherProvider: React.FC<WeatherProviderInterface> = ({
  weatherData,
  children,
}) => {
  const [weather, setWeather] = useState(weatherData);
  const [city, setCity] = useState({
    city: "",
    country: "",
  })

  const value = { weather, city, setWeather, setCity };
  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  )
}