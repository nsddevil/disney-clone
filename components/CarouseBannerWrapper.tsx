import { getDiscoverMovies } from '@/lib/getMovies';
import CarouseBanner from './CarouseBanner';

interface CarouseBannerWrapperProps {
  id?: string;
  keywords?: string;
}

export default async function CarouseBannerWrapper({
  id,
  keywords,
}: CarouseBannerWrapperProps) {
  const movies = await getDiscoverMovies(id, keywords);
  return (
    <div className="lg:mb-[200px]">
      <CarouseBanner movies={movies} />
    </div>
  );
}
