import { useContext } from "react";
import Skeleton from "./Skeleton";
import { ImageContext } from "@/pages/imageSearch";
import Link from "next/link";
import Image from "next/image";

const Images = () => {
  const { result, isLoading, searchImage } = useContext(ImageContext);

  return (
    <>
      <h1 className="text-center mt-6 underline text-2xl">
        {searchImage !== "" ? <div>Results for {searchImage}</div> : ""}
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4">
        {isLoading ? (
          <Skeleton item={10} />
        ) : (
          result.map((data) => (
            <Link
              key={data.id}
              href={data.urls.regular}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="h-72 w-full object-cover rounded-lg shadow-md"
                src={data.urls.small}
                alt={data.alt_description}
                width="0"
                height="0"
              />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Images;
