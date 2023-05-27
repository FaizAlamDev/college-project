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
        <div className="flex w-full justify-center p-4">
          <div className="flex flex-wrap">
            <div className="w-full px-2">
              <div className=" relative mb-4 w-[90vw] min-w-0 overflow-hidden break-words rounded-lg bg-sky-800 text-white shadow-sm sm:w-[60vw] sm:text-3xl">
                <div className="relative px-6 py-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <h5 className="mb-1 text-2xl font-medium">
                        {weather.city.name}, {weather.city.country}
                      </h5>
                      <h6 className="mb-0">
                        {weather.list[0].main.temp}&deg;C
                      </h6>
                      <small>{weather.list[0].weather[0].main}</small>
                    </div>
                    <div className="text-right">
                      <h3 className="mb-0 text-4xl font-bold">
                        <span>
                          {Math.round(weather.list[0].main.temp)}&deg;C
                        </span>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="relative px-6 py-3">
                  <div className="flex items-center justify-between text-center">
                    <div className="mb-0 flex flex-col items-center justify-center text-center">
                      <span className="my-1 block">{getDayName(1)}</span>
                      {displayIcon(weather.list[1].weather[0].main)}
                      <span className="my-1 block">
                        {Math.round(weather.list[1].main.temp)}&deg;
                      </span>
                    </div>

                    <div className="mb-0 flex flex-col items-center justify-center text-center">
                      <span className="my-1 block">{getDayName(2)}</span>
                      {displayIcon(weather.list[2].weather[0].main)}
                      <span className="my-1 block">
                        {Math.round(weather.list[2].main.temp)}&deg;
                      </span>
                    </div>

                    <div className="mb-0 flex flex-col items-center justify-center text-center">
                      <span className="my-1 block">{getDayName(3)}</span>
                      {displayIcon(weather.list[3].weather[0].main)}
                      <span className="my-1 block">
                        {Math.round(weather.list[3].main.temp)}&deg;
                      </span>
                    </div>

                    <div className="mb-0 flex flex-col items-center justify-center text-center">
                      <span className="my-1 block">{getDayName(4)}</span>
                      {displayIcon(weather.list[4].weather[0].main)}
                      <span className="my-1 block">
                        {Math.round(weather.list[4].main.temp)}&deg;
                      </span>
                    </div>

                    <div className="mb-0 flex flex-col items-center justify-center text-center">
                      <span className="my-1 block">{getDayName(5)}</span>
                      {displayIcon(weather.list[5].weather[0].main)}
                      <span className="my-1 block">
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
