import { useState } from "react";

const api = {
  key: process.env.NEXT_PUBLIC_WEATHER_API,
  base: "https://api.openweathermap.org/data/2.5/",
};

export default function WeatherSearch() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => setWeather(result));
  };
  return (
    <div className="app">
      <header className="app-header">
        <h1>Weather App</h1>

        {/* SearchBox */}
        <div>
          <input
            type="text"
            placeholder="Enter city name"
            onChange={(e) => setSearch(e.target.value)}
          />

          <button onClick={searchPressed}>Search</button>
        </div>
        {typeof weather.main !== "undefined" ? (
          <div>
            <p>{weather?.name}</p>
            <p>{weather?.main.temp}</p>
            <p>{weather?.weather[0].main}</p>
            <p>({weather?.weather[0].description})</p>
          </div>
        ) : (
          ""
        )}
      </header>
    </div>
  );
}
