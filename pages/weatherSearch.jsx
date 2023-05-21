import Jumbutron from "@/components/Jumbutron";
import Results from "@/components/WeatherSearch/Results";
import SearchField from "@/components/WeatherSearch/SearchField";
import { createContext, useState } from "react";

export const WeatherContext = createContext();

export default function WeatherSearch() {
  const [data, setData] = useState();
  const [error, setError] = useState("");

  return (
    <WeatherContext.Provider value={{ data, setData, error, setError }}>
      <Jumbutron heading="Weather">
        <SearchField />
      </Jumbutron>
      {error ? (
        <div className="w-1/2 mt-4 m-auto">
          <div className="bg-red-500 text-2xl text-white font-bold rounded-t px-4 py-2 text-center">
            Error
          </div>
          <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700 text-center">
            <p>City Name Not Found</p>
          </div>
        </div>
      ) : (
        data && <Results weather={data} />
      )}
    </WeatherContext.Provider>
  );
}
