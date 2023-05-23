import { TextContext } from "@/pages/textSearch";
import { useContext, useState } from "react";

const SearchField = () => {
  const [searchValue, setSearchValue] = useState("");
  const { setData } = useContext(TextContext);

  const processWikiResults = (results) => {
    const resultArray = [];
    Object.keys(results).forEach((key) => {
      const id = key;
      const title = results[key].title;
      const text = results[key].extract;
      const img = results[key].hasOwnProperty("thumbnail")
        ? results[key].thumbnail.source
        : null;
      resultArray.push({ id, title, img, text });
    });
    return resultArray;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!searchValue) return;
    const response = await fetch(
      encodeURI(
        `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${searchValue}&gsrlimit=12&prop=pageimages|extracts&exchars=${100}&exintro&explaintext&exlimit=max&format=json&origin=*`
      )
    );

    const data = await response.json();
    let resultArray = [];
    if (data.hasOwnProperty("query")) {
      resultArray = processWikiResults(data.query.pages);
    }
    setData(resultArray);
  };

  return (
    <div>
      <form className="flex" onSubmit={handleSubmit}>
        <input
          className="bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl ml-2"
          type="search"
          placeholder="Search..."
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
