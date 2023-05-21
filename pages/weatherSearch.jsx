import Jumbutron from "@/components/Jumbutron";
import Results from "@/components/WeatherSearch/Results";
import SearchField from "@/components/WeatherSearch/SearchField";
import { createContext, useState } from "react";

const api = {
  key: process.env.NEXT_PUBLIC_WEATHER_API,
  base: "https://api.openweathermap.org/data/2.5/",
};

export const WeatherContext = createContext();

export default function WeatherSearch() {
  const [data, setData] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => setWeather(result));
  };

  return (
    <WeatherContext.Provider value={{ data, setData }}>
      <Jumbutron heading="Weather">
        <SearchField />
      </Jumbutron>
      <Results data={data} />
    </WeatherContext.Provider>
  );
}
