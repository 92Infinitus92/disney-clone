import Image from "next/image";
import Link from "next/link";
import { ThemeToggler } from "./ThemeToggler";
import GenreDropdown from "./GenreDropdown";
import SearchInput from "./SearchInput";

function Header() {
  return (
    <header className="fixed w-full z-20 top-0 items-center justify-between flex p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
      <Link href="/" className="mr-10">
        <Image
          src={"/disney_logo.svg"}
          alt="logo"
          width={120}
          height={100}
          className="cursor-pointer invert dark:invert-0"
        />
      </Link>

      <div className="flex space-x-2">
        {/* Genre Dropdown */}
        <GenreDropdown />
        {/* SearchInput */}
        <SearchInput />
        {/* ThemeSwitcher */}
        <ThemeToggler />
      </div>
    </header>
  );
}
export default Header;
