'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Movie } from '@/types';
import Image from 'next/image';
import { getImagePath } from '@/lib/getImagePath';

interface CarouseBannerProps {
  movies: Movie[];
}

export default function CarouseBanner({ movies }: CarouseBannerProps) {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Autoplay, Pagination]}
        autoplay={{
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
      >
        {movies?.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="relative">
              <Image
                className=""
                src={getImagePath(movie.backdrop_path, true)}
                alt={movie.title}
                width={1920}
                height={1080}
                priority
              />
              <div className="hidden lg:block absolute left-0 top-[40%] max-w-[50%] space-y-4 z-30">
                <h1 className="font-bold text-4xl">{movie.title}</h1>
                <p className="line-clamp-3">{movie.overview}</p>
              </div>
              <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
