import { WeatherContext } from "@/pages/weatherSearch";
import { useContext, useState } from "react";

const api = {
  key: process.env.NEXT_PUBLIC_WEATHER_API,
  base: "https://api.openweathermap.org/data/2.5/",
};

const SearchField = () => {
  const [searchValue, setSearchValue] = useState("");
  const { data, setData, error, setError } = useContext(WeatherContext);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!searchValue) return;
      fetch(`${api.base}weather?q=${searchValue}&units=metric&APPID=${api.key}`)
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
    }
  };

  return (
    <div>
      <form className="flex" onSubmit={handleSubmit}>
        <input
          className="bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl "
          type="search"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          type="submit"
          disabled={!searchValue}
          className="bg-blue-600 px-6 py-2.5 text-white rounded-tr rounded-br focus:rind-2 focus:rind-blue-300 disabled:bg-gray-400"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchField;
