import Image from 'next/image';
import Link from 'next/link';
import { ThemeToggler } from './ThemeToggler';
import SearchInput from './SearchInput';
import GenreDropdown from './GenreDropdown';

export default function Header() {
  return (
    <header className="fixed top-0 flex w-full p-5 items-center  justify-between bg-gradient-to-t from-gray-200/0 to-gray-900 z-[70]">
      <Link href="/">
        <Image
          src="/disney-logo.png"
          alt="logo"
          width={120}
          height={100}
          priority
          className="w-auto h-auto dark:invert"
        />
      </Link>
      <div className="flex space-x-2">
        <GenreDropdown />
        <SearchInput />
        <ThemeToggler />
      </div>
    </header>
  );
}
