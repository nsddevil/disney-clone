import CarouseBannerWrapper from '@/components/CarouseBannerWrapper';
import MoviesCarousel from '@/components/MoviesCarousel';
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from '@/lib/getMovies';

export default async function Home() {
  const upComingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    <main>
      <CarouseBannerWrapper />
      <div className="flex flex-col space-y-2 xl:-mt-48">
        <MoviesCarousel movies={upComingMovies} title="Upcoming" isVertical />
        <MoviesCarousel movies={topRatedMovies} title="Top Rated" />
        <MoviesCarousel movies={popularMovies} title="Popular" />
      </div>
    </main>
  );
}
