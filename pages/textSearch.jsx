import Jumbutron from "@/components/Jumbutron";
import Results from "@/components/TextSearch/Results";
import SearchField from "@/components/TextSearch/SearchField";
import { createContext, useState } from "react";

export const TextContext = createContext();

export default function TextSearch() {
  const [data, setData] = useState([]);

  return (
    <TextContext.Provider value={{ data, setData }}>
      <Jumbutron heading="Wikipedia Article">
        <SearchField />
      </Jumbutron>
      <Results results={data} />
    </TextContext.Provider>
  );
}
