import { Movie } from '@/types';
import MovieCard from './MovieCard';
import { cn } from '@/lib/utils';

interface MoviesCarouselProps {
  title?: string;
  movies: Movie[];
  isVertical?: boolean;
}

export default function MoviesCarousel({
  title,
  movies,
  isVertical,
}: MoviesCarouselProps) {
  return (
    <div className="z-50">
      <h2 className="font-bold text-xl">{title}</h2>
      <div
        className={cn(
          'flex gap-x-4 p-5 lg:px-10 overflow-scroll scrollbar-hide',
          isVertical && 'flex-col space-x-0 space-y-12'
        )}
      >
        {isVertical
          ? movies.map((movie) => (
              <div
                key={movie.id}
                className="flex flex-col items-center gap-6 lg:flex-row"
              >
                <MovieCard movie={movie} />
                <div className="max-w-2xl">
                  <h3 className="font-bold">
                    {movie.title} ({movie.release_date})
                  </h3>
                  <hr className="my-4" />
                  <p className="text-sm leading-6">{movie.overview}</p>
                </div>
              </div>
            ))
          : movies?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
}
