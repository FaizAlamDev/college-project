import { WeatherContext } from "@/pages/weatherSearch";
import { useContext } from "react";
import Skeleton from "../ImageSearch/Skeleton";
import Spinner from "./Spinner";

const Results = ({ weather }) => {
  function getDayName(index) {
    return new Date(weather.list[index].dt * 1000)
      .toLocaleString("en-us", { weekday: "long" })
      .substring(0, 3)
      .toUpperCase();
  }

  function displayIcon(condition) {
    switch (condition) {
      case "Rain": {
        return <span class="material-symbols-outlined">rainy</span>;
      }
      case "Clouds": {
        return <span class="material-symbols-outlined">cloudy</span>;
      }
      case "Clear": {
        return <span class="material-symbols-outlined">sunny</span>;
      }
    }
  }

  const { isLoading } = useContext(WeatherContext);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="w-full p-4 flex justify-center">
          <div className="flex flex-wrap">
            <div className="w-full px-2">
              <div className=" text-white relative min-w-0 break-words rounded-lg overflow-hidden shadow-sm mb-4 w-[90vw] bg-gray-600 sm:w-[60vw]">
                <div className="px-6 py-6 relative">
                  <div className="flex mb-4 justify-between items-center">
                    <div>
                      <h5 className="mb-1 font-medium text-2xl">
                        {weather.city.name}, {weather.city.country}
                      </h5>
                      <h6 className="mb-0">
                        {weather.list[0].main.temp}&deg;C
                      </h6>
                      <small>{weather.list[0].weather[0].main}</small>
                    </div>
                    <div className="text-right">
                      <h3 className="font-bold text-4xl mb-0">
                        <span>
                          {Math.round(weather.list[0].main.temp)}&deg;C
                        </span>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="px-6 py-3 relative">
                  <div className="text-center justify-between items-center flex">
                    <div className="text-center mb-0 flex items-center justify-center flex-col">
                      <span className="block my-1">{getDayName(8)}</span>
                      {displayIcon(weather.list[8].weather[0].main)}
                      <span className="block my-1">
                        {Math.round(weather.list[8].main.temp)}&deg;
                      </span>
                    </div>

                    <div className="text-center mb-0 flex items-center justify-center flex-col">
                      <span className="block my-1">{getDayName(16)}</span>
                      {displayIcon(weather.list[16].weather[0].main)}
                      <span className="block my-1">
                        {Math.round(weather.list[24].main.temp)}&deg;
                      </span>
                    </div>

                    <div className="text-center mb-0 flex items-center justify-center flex-col">
                      <span className="block my-1">{getDayName(24)}</span>
                      {displayIcon(weather.list[24].weather[0].main)}
                      <span className="block my-1">
                        {Math.round(weather.list[24].main.temp)}&deg;
                      </span>
                    </div>

                    <div className="text-center mb-0 flex items-center justify-center flex-col">
                      <span className="block my-1">{getDayName(32)}</span>
                      {displayIcon(weather.list[32].weather[0].main)}
                      <span className="block my-1">
                        {Math.round(weather.list[32].main.temp)}&deg;
                      </span>
                    </div>

                    <div className="text-center mb-0 flex items-center justify-center flex-col">
                      <span className="block my-1">{getDayName(39)}</span>
                      {displayIcon(weather.list[39].weather[0].main)}
                      <span className="block my-1">
                        {Math.round(weather.list[39].main.temp)}&deg;
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Results;
