import React from 'react'

interface WeatherPanelProps {
  morning: {
    [key: string]: number
  },
  day: {
    [key: string]: number
  },
  night: {
    [key: string]: number
  },
  dayTime: string
};

export const WeatherPanel: React.FC<WeatherPanelProps> = ({ morning, day, night, dayTime }) => {
  let shortDate = dayTime.split(/(\s+)/)[0];

  const tempArray = [morning.temp, day.temp, night.temp].map(item => Math.round(item));
  const sum = tempArray.reduce((a, c) => a + c, 0);
  const avg = sum / tempArray.length;

  return (
    <div className="weather-panel">
      <h4>Date {shortDate}</h4>
      <div>Morning: {tempArray[0]}</div>
      <div>Afternoon: {tempArray[1]}</div>
      <div>Night: {tempArray[2]}</div>
      <div>Humidity: {day.humidity}%</div>
      <div>Min value: {Math.min(...tempArray)}</div>
      <div>Max value: {Math.max(...tempArray)}</div>
      <div>Mean: {Math.round(avg)}</div>
    </div>
  )
}
