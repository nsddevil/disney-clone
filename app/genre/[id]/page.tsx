import MoviesCarousel from '@/components/MoviesCarousel';
import { getDiscoverMovies } from '@/lib/getMovies';

interface GenrePageProps {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
}

export default async function GenrePage({
  params: { id },
  searchParams: { genre },
}: GenrePageProps) {
  const genreMovies = await getDiscoverMovies(id, genre);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col gap-y-4 mt-28 lg:mt-40">
        <h1 className="text-2xl font-bold">Results for {genre}</h1>
        {genreMovies.length < 1 && <p>no data..</p>}
        <MoviesCarousel title="Movies" movies={genreMovies} isVertical />
      </div>
    </div>
  );
}
