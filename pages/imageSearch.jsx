import Images from "@/components/ImageSearch/Images";
import Jumbutron from "@/components/Jumbutron";
import SearchField from "@/components/ImageSearch/SearchField";
import { createContext, useState } from "react";
import Head from "next/head";

export const ImageContext = createContext();

export default function ImageSearch() {
  const [searchImage, setSearchImage] = useState("");
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const value = {
    searchImage,
    setSearchImage,
    result,
    setResult,
    isLoading,
    setIsLoading,
    error,
    setError,
  };

  return (
    <>
      <Head>
        <title>Image Search</title>
      </Head>
      <div style={{ minHeight: "calc(100vh - 3.8rem)" }}>
        <ImageContext.Provider value={value}>
          <Jumbutron heading="Image">
            <SearchField />
          </Jumbutron>
          <Images />
        </ImageContext.Provider>
      </div>
    </>
  );
}
