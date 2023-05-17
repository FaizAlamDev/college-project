import Images from "@/components/Images";
import Jumbutron from "@/components/Jumbutron";
import SearchField from "@/components/SearchField";
import useAxios from "@/hooks/useAxios";
import { createContext, useState } from "react";

export const ImageContext = createContext();

export default function ImageSearch() {
  const [searchImage, setSearchImage] = useState("");

  const { response, isLoading, error, fetchData } = useAxios(
    `search/photos?page=1&query=cats&client_id=${process.env.NEXT_PUBLIC_ACCESS_KEY}`
  );

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage,
  };

  return (
    <ImageContext.Provider value={value}>
      <Jumbutron>
        <SearchField />
      </Jumbutron>
      <Images />
    </ImageContext.Provider>
  );
}
