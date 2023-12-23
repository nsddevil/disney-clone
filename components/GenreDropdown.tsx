import { Genres } from '@/types';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default async function GenreDropdown() {
  const url = 'https://api.themoviedb.org/3/genre/movie/list?language=ko';
  const options: RequestInit = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
    next: {
      revalidate: 60 * 60 * 24, //24 시간 캐쉬
    },
  };
  const res = await fetch(url, options);
  const data = (await res.json()) as Genres;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center">
        장르
        <ChevronDown className="ml-2" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>장르를 선택하세요</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {data.genres.map((genre) => (
          <DropdownMenuItem key={genre.id} asChild>
            <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
              {genre.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
