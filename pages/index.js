import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-800 text-center">
          <h2 className="text-5xl font-bold mb-12 pb-4 text-center">
            Search Engines
          </h2>

          <div className="grid lg:grid-cols-3 gap-6 xl:gap-x-12">
            <div className="mb-6 lg:mb-0 ">
              <div className="relative block rounded-lg shadow-lg border-blue-900 border-x-8">
                <div className="flex">
                  <div className="relative bg-no-repeat bg-cover overflow-hidden shadow-lg rounded-lg mx-4 -mt-4">
                    <Image
                      src="/024.webp"
                      alt="img"
                      height="0"
                      width="0"
                      sizes="100vw"
                      className="w-full"
                    />
                    <Link href="/textSearch">
                      <div
                        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                        style={{
                          backgroundCcolor: "rgba(251, 251, 251, 0.15)",
                        }}
                      ></div>
                    </Link>
                  </div>
                </div>
                <div className="p-6 text-black">
                  <h5 className="font-bold text-lg mb-3">WikiPedia</h5>

                  <p className="mb-4 pb-2">
                    A Search Engine made with the WikiPedia API.
                  </p>
                  <Link
                    href="/textSearch"
                    className="inline-block px-20 py-2.5 bg-blue-800 text-white font-medium text-sm leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Search
                  </Link>
                </div>
              </div>
            </div>

            <div className="mb-6 lg:mb-0">
              <div className="relative block  rounded-lg shadow-lg border-blue-900 border-x-8">
                <div className="flex">
                  <div className=" relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4">
                    <Image
                      src="/031.webp"
                      alt="img"
                      height="0"
                      width="0"
                      sizes="100vw"
                      className="w-full"
                    />
                    <Link href="/imageSearch">
                      <div
                        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                        style={{
                          backgroundCcolor: "rgba(251, 251, 251, 0.15)",
                        }}
                      ></div>
                    </Link>
                  </div>
                </div>
                <div className="p-6 text-black">
                  <h5 className="font-bold text-lg mb-3">Image</h5>

                  <p className="mb-4 pb-2">
                    A Search Engine made with the UnSplash API.
                  </p>
                  <Link
                    href="/imageSearch"
                    className="inline-block px-20 py-2.5 bg-blue-800 text-white font-medium text-sm leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Search
                  </Link>
                </div>
              </div>
            </div>

            <div className="mb-0">
              <div className="relative block  rounded-lg shadow-lg border-blue-900 border-x-8">
                <div className="flex">
                  <div className=" relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4">
                    <Image
                      src="/081.webp"
                      alt="img"
                      height="0"
                      width="0"
                      sizes="100vw"
                      className="w-full"
                    />
                    <Link href="/weatherSearch">
                      <div
                        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                        style={{
                          backgroundCcolor: "rgba(251, 251, 251, 0.15)",
                        }}
                      ></div>
                    </Link>
                  </div>
                </div>
                <div className="p-6 text-black">
                  <h5 className="font-bold text-lg mb-3">Weather</h5>

                  <p className="mb-4 pb-2">
                    A Search Engine made with the openWeather API.
                  </p>
                  <Link
                    href="/weatherSearch"
                    className="inline-block px-20 py-2.5 bg-blue-800 text-white font-medium text-sm leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Search
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
