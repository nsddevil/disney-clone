import MoviesCarousel from '@/components/MoviesCarousel';
import { getSearchedMovies } from '@/lib/getMovies';
import { notFound } from 'next/navigation';

interface SearchPageProps {
  params: {
    term: string;
  };
}

export default async function SearchPage({
  params: { term },
}: SearchPageProps) {
  if (!term) notFound();
  const termToUse = decodeURI(term);
  const searchMovies = await getSearchedMovies(termToUse);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col gap-y-4 mt-28 lg:mt-40">
        <h1 className="text-2xl font-bold">Results for</h1>
        {searchMovies.length < 1 && <p>no data..</p>}
        <MoviesCarousel title="Movies" movies={searchMovies} isVertical />
      </div>
    </div>
  );
}
