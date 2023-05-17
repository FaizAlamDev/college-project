import Link from "next/link";

export default function Home() {
  return (
    <div className="m-5 flex flex-col p-3 ">
      <Link href="/textSearch">Text</Link>
      <Link href="/imageSearch">Image</Link>
      <Link href="/weatherSearch">Weather</Link>
    </div>
  );
}
