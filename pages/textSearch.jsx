import Jumbutron from "@/components/Jumbutron";
import Results from "@/components/TextSearch/Results";
import SearchField from "@/components/TextSearch/SearchField";
import Head from "next/head";
import { createContext, useState } from "react";

export const TextContext = createContext();

export default function TextSearch() {
  const [data, setData] = useState([]);

  return (
    <>
      <Head>
        <title>Text Search</title>
      </Head>
      <div style={{ minHeight: "calc(100vh - 3.8rem)" }}>
        <TextContext.Provider value={{ data, setData }}>
          <Jumbutron heading="Wikipedia Article">
            <SearchField />
          </Jumbutron>
          <Results results={data} />
        </TextContext.Provider>
      </div>
    </>
  );
}
