import Image from "next/image";
import Link from "next/link";

const Results = ({ results }) => {
  return (
    <div className="m-auto flex w-[90vw] flex-col justify-start px-4 py-2 text-3xl md:w-[55vw]">
      {results.map((result) => (
        <div
          key={result.id}
          className="flex w-full flex-col justify-start border-b-2 border-gray-800 px-0 py-4"
        >
          <Link
            href={`https://en.wikipedia.org/?curid=${result.id}`}
            target="_blank"
            className="mb-2 text-3xl leading-7 text-blue-950 hover:underline"
          >
            {result.title}
          </Link>
          <div className="flex w-full">
            {result.img ? (
              <Image
                src={result.img}
                alt="Result Image"
                width="50"
                height="55"
                className="mr-2 max-h-20 w-1/3 md:w-24"
              />
            ) : null}
            <p className="max-h-24 w-2/3 overflow-hidden text-ellipsis text-base sm:text-lg md:leading-5">
              {result.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Results;
