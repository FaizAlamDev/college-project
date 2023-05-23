import { WeatherContext } from "@/pages/weatherSearch";
import { useContext, useState } from "react";

const api = {
  key: process.env.NEXT_PUBLIC_WEATHER_API,
  base: "https://api.openweathermap.org/data/2.5/",
};

const SearchField = () => {
  const [searchValue, setSearchValue] = useState("");
  const { setData, setIsLoading, setError } = useContext(WeatherContext);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!searchValue) return;
      setIsLoading(true);
      fetch(
        `${api.base}forecast?q=${searchValue}&units=metric&APPID=${api.key}`
      )
        .then((res) => {
          if (!res.ok) {
            setError(res.statusText);
            setTimeout(() => {
              setError("");
            }, 3000);
          } else {
            return res.json();
          }
        })
        .then((res) => setData(res));
    } catch (err) {
      setError(err.message);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };

  return (
    <div>
      <form className="flex" onSubmit={handleSubmit}>
        <input
          className="bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl ml-2"
          type="search"
          placeholder="Enter City Name"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          type="submit"
          disabled={!searchValue}
          className="bg-blue-600 px-6 py-2.5 text-white rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400 mr-2"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchField;
