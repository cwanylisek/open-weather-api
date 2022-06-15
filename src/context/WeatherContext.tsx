import React, { createContext, Dispatch, SetStateAction, useState, useEffect } from 'react';
import { WeatherData } from '../types';
import { fetchWeather } from '../utils/fetchData';

interface WeatherProviderInterface {
  children: React.ReactNode;
}

export interface Region {
  city: string;
}

interface WeatherContextInterface {
  weather?: WeatherData;
  region: Region;
  setWeather: Dispatch<SetStateAction<WeatherData | undefined>>;
  setRegion: Dispatch<SetStateAction<Region>>;
}

export const WeatherContext = createContext<WeatherContextInterface>({
  region: {
    city: "",
  },
  setWeather: () => {
    //do nothing
  },
  setRegion: () => {
    // do noting
  },
});

export const WeatherProvider: React.FC<WeatherProviderInterface> = ({
  children,
}) => {
  const [region, setRegion] = useState({
    city: "London",
  });
  const [weather, setWeather] = useState<WeatherData>();
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeather(region)
      .then(data => {
        setWeather(data);
      })
      .catch(error => setError(error.message));
  }, [region])

  const value = { weather, region, error, setWeather, setRegion };
  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  )
}