import { getImagePath } from '@/lib/getImagePath';
import { Movie } from '@/types';
import Image from 'next/image';

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="relative flex-shrink-0 cursor-pointer transform hover:scale-105 transition duration-200 ease-out hover:drop-shadow-lg">
      <p className="absolute left-5 bottom-5 z-20">{movie.title}</p>
      <Image
        className="w-fit lg:min-w-[400px] h-56 object-cover object-center shadow-md rounded-lg drop-shadow-xl shadow-gray-900"
        src={getImagePath(movie.backdrop_path || movie.poster_path)}
        alt={movie.title}
        width={1920}
        height={1080}
        priority
      />
    </div>
  );
}
