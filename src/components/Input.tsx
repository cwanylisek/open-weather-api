import React, { useContext, useState } from 'react';
import { WeatherContext } from "../context/WeatherContext";

export const Input: React.FC = () => {
  const { region, setRegion } = useContext(WeatherContext);
  const [city, setCity] = useState(region.city);
  const updateRegion = () => {
    setRegion({ city });
  };

  return (
    <div className='input-container'>
      <input
        type="text"
        value={city}
        name="city"
        className='input-city'
        onChange={(e) => setCity(e.target.value)}
      />
      <button className='input-button' onClick={updateRegion}>
        Submit
      </button>
    </div>
  )
}