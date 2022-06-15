import React from "react";
import "./App.css";
import { WeatherProvider } from "./context/WeatherContext";
import { WeatherContainer } from "./components/WeatherContainer";

const App = () => {
  return (
    <div className="App">
      <WeatherProvider>
        <WeatherContainer />
      </WeatherProvider>
    </div>
  );
};

export default App;
