import Image from "next/image";
import Link from "next/link";

const Results = ({ results }) => {
  return (
    <div className="flex flex-col justify-start w-[90vw] m-auto px-4 py-2 text-3xl md:w-[55vw]">
      {results.map((result) => (
        <div
          key={result.id}
          className="w-full flex flex-col justify-start px-0 py-4 border-b-2 border-gray-800"
        >
          <Link
            href={`https://en.wikipedia.org/?curid=${result.id}`}
            target="_blank"
            className="text-3xl leading-7 mb-2 hover:underline text-blue-950"
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
            <p className="text-lg max-h-24 overflow-hidden text-ellipsis md:leading-5 w-2/3">
              {result.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Results;
