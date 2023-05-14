import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
export default function TextSearch() {
  const [input, setInput] = useState("");
  const [arr, setArr] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const rawSearchString = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${input}&gsrlimit=20&prop=pageimages|extracts&exchars=${100}&exintro&explaintext&exlimit=max&format=json&origin=*`;

    const searchString = encodeURI(rawSearchString);

    try {
      let resultArray = [];
      const response = await fetch(searchString);
      const data = await response.json();
      if (data.hasOwnProperty("query")) {
        resultArray = processWikiResults(data.query.pages);
      }
      setArr(resultArray);
    } catch (e) {
      console.log(e);
    }
  };

  const processWikiResults = (results) => {
    const resultArray = [];
    Object.keys(results).forEach((key) => {
      const id = key;
      const title = results[key].title;
      const text = results[key].extract;
      const img = results[key].hasOwnProperty("thumbnail")
        ? results[key].thumbnail.source
        : null;
      const item = {
        id: id,
        title: title,
        img: img,
        text: text,
      };
      resultArray.push(item);
    });
    return resultArray;
  };

  return (
    <>
      <h2 className="py-4 text-center text-3xl font-bold text-red-600 underline">
        Search App
      </h2>
      <form onSubmit={handleSubmit} className="m-4">
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type..."
        />
        <br />
        <Button>Search</Button>
      </form>

      {arr.map((result) => (
        <div key={result.id} className="border-4 border-slate-800">
          <h3>{result.title}</h3>
          <p>{result.text}</p>
        </div>
      ))}
    </>
  );
}
