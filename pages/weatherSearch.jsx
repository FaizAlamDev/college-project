import Jumbutron from "@/components/Jumbutron";
import Results from "@/components/WeatherSearch/Results";
import SearchField from "@/components/WeatherSearch/SearchField";
import Head from "next/head";
import { createContext, useState } from "react";

export const WeatherContext = createContext();

export default function WeatherSearch() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const value = {
    data,
    setData,
    isLoading,
    setIsLoading,
    error,
    setError,
  };

  return (
    <>
      <Head>
        <title>Weather Search</title>
      </Head>
      <div style={{ minHeight: "calc(100vh - 3.8rem)" }}>
        <WeatherContext.Provider value={value}>
          <Jumbutron heading="Weather">
            <SearchField />
          </Jumbutron>
          {error ? (
            <div className="m-auto mt-4 w-1/2">
              <div className="rounded-t bg-red-500 px-4 py-2 text-center text-2xl font-bold text-white">
                Error
              </div>
              <div className="rounded-b border border-t-0 border-red-400 bg-red-100 px-4 py-3 text-center text-red-700">
                <p>City Name Not Found</p>
              </div>
            </div>
          ) : (
            data && <Results weather={data} />
          )}
        </WeatherContext.Provider>
      </div>
    </>
  );
}
