import { useContext } from "react";
import Skeleton from "./Skeleton";
import { ImageContext } from "@/pages/imageSearch";
import Link from "next/link";
import Image from "next/image";

const Images = () => {
  const { result, isLoading, searchImage } = useContext(ImageContext);

  return (
    <>
      <h1 className="mt-6 text-center text-2xl underline">
        {searchImage !== "" ? <div>Results for {searchImage}</div> : ""}
      </h1>
      <div className="mx-auto my-10 grid max-w-7xl gap-4 px-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
                className="h-72 w-full rounded-lg object-cover shadow-md"
                src={data.urls.small}
                alt={data.alt_description}
                width="300"
                height="300"
              />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Images;
