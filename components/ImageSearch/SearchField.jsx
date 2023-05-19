import { ImageContext } from "@/pages/imageSearch";
import { useContext, useState } from "react";

const SearchField = () => {
  const [searchValue, setSearchValue] = useState("");

  const { setResult, setIsLoading, setError, setSearchImage } =
    useContext(ImageContext);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!searchValue) return;
      setIsLoading(true);
      const response = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${searchValue}&client_id=${process.env.NEXT_PUBLIC_ACCESS_KEY}`
      );
      const data = await response.json();
      setResult(data.results);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
    setSearchImage(searchValue);
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
