import Link from "next/link";
import Search from "../search";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full relative z-50 px-6 py-4">
      <Link href="/">
        <h1 className="text-center text-2xl font-bold text-red-600">
          Flowcamp
        </h1>
      </Link>
      <Search />
    </nav>
  );
}
