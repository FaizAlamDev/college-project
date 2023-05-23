import { WeatherContext } from "@/pages/weatherSearch";
import { useContext } from "react";
import Spinner from "./Spinner";

const Results = ({ weather }) => {
  function getDayName(index) {
    const result = new Date(weather.list[index].dt * 1000).getHours();
    if (Number(result) > 12) {
      return (
        <>
          {Number(result) - 12}
          <span className="text-xs">PM</span>
        </>
      );
    }
    return (
      <>
        {Number(result)}
        <span className="text-xs">AM</span>
      </>
    );
  }

  function displayIcon(condition) {
    const res =
      condition === "Rain" ? (
        <span className="material-symbols-outlined">rainy</span>
      ) : condition === "Clouds" ? (
        <span className="material-symbols-outlined">cloudy</span>
      ) : condition === "Clear" ? (
        <span className="material-symbols-outlined">sunny</span>
      ) : null;

    return res;
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
              <div className=" text-white relative min-w-0 break-words rounded-lg overflow-hidden shadow-sm mb-4 w-[90vw] bg-sky-800 sm:w-[60vw] sm:text-3xl">
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
                      <span className="block my-1">{getDayName(1)}</span>
                      {displayIcon(weather.list[1].weather[0].main)}
                      <span className="block my-1">
                        {Math.round(weather.list[1].main.temp)}&deg;
                      </span>
                    </div>

                    <div className="text-center mb-0 flex items-center justify-center flex-col">
                      <span className="block my-1">{getDayName(2)}</span>
                      {displayIcon(weather.list[2].weather[0].main)}
                      <span className="block my-1">
                        {Math.round(weather.list[2].main.temp)}&deg;
                      </span>
                    </div>

                    <div className="text-center mb-0 flex items-center justify-center flex-col">
                      <span className="block my-1">{getDayName(3)}</span>
                      {displayIcon(weather.list[3].weather[0].main)}
                      <span className="block my-1">
                        {Math.round(weather.list[3].main.temp)}&deg;
                      </span>
                    </div>

                    <div className="text-center mb-0 flex items-center justify-center flex-col">
                      <span className="block my-1">{getDayName(4)}</span>
                      {displayIcon(weather.list[4].weather[0].main)}
                      <span className="block my-1">
                        {Math.round(weather.list[4].main.temp)}&deg;
                      </span>
                    </div>

                    <div className="text-center mb-0 flex items-center justify-center flex-col">
                      <span className="block my-1">{getDayName(5)}</span>
                      {displayIcon(weather.list[5].weather[0].main)}
                      <span className="block my-1">
                        {Math.round(weather.list[5].main.temp)}&deg;
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
