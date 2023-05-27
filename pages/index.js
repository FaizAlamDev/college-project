import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Search Engines</title>
      </Head>
      <div className="container mx-auto mt-12 px-6">
        <section className="mb-32 text-center text-gray-800">
          <h2 className="mb-12 pb-4 text-center text-5xl font-bold">
            Search Engines
          </h2>

          <div className="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
            <div className="mb-6 lg:mb-0 ">
              <div className="relative block rounded-lg border-x-8 border-blue-900 shadow-lg">
                <div className="flex">
                  <div className="relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg">
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
                        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                        style={{
                          backgroundCcolor: "rgba(251, 251, 251, 0.15)",
                        }}
                      ></div>
                    </Link>
                  </div>
                </div>
                <div className="p-6 text-black">
                  <h5 className="mb-3 text-lg font-bold">WikiPedia</h5>

                  <p className="mb-4 pb-2">
                    A Search Engine made with the WikiPedia API.
                  </p>
                  <Link
                    href="/textSearch"
                    className="inline-block rounded-full bg-blue-800 px-20 py-2.5 text-sm font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                  >
                    Search
                  </Link>
                </div>
              </div>
            </div>

            <div className="mb-6 lg:mb-0">
              <div className="relative block  rounded-lg border-x-8 border-blue-900 shadow-lg">
                <div className="flex">
                  <div className=" relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg">
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
                        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                        style={{
                          backgroundCcolor: "rgba(251, 251, 251, 0.15)",
                        }}
                      ></div>
                    </Link>
                  </div>
                </div>
                <div className="p-6 text-black">
                  <h5 className="mb-3 text-lg font-bold">Image</h5>

                  <p className="mb-4 pb-2">
                    A Search Engine made with the UnSplash API.
                  </p>
                  <Link
                    href="/imageSearch"
                    className="inline-block rounded-full bg-blue-800 px-20 py-2.5 text-sm font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                  >
                    Search
                  </Link>
                </div>
              </div>
            </div>

            <div className="mb-0">
              <div className="relative block  rounded-lg border-x-8 border-blue-900 shadow-lg">
                <div className="flex">
                  <div className=" relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg">
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
                        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                        style={{
                          backgroundCcolor: "rgba(251, 251, 251, 0.15)",
                        }}
                      ></div>
                    </Link>
                  </div>
                </div>
                <div className="p-6 text-black">
                  <h5 className="mb-3 text-lg font-bold">Weather</h5>

                  <p className="mb-4 pb-2">
                    A Search Engine made with the openWeather API.
                  </p>
                  <Link
                    href="/weatherSearch"
                    className="inline-block rounded-full bg-blue-800 px-20 py-2.5 text-sm font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
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
