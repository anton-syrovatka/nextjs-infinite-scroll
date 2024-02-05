import Image from 'next/image';

import { MotionDiv } from './MotionDiv';

export interface MovieProp {
  id: string;
  title: string;
  poster_path: string;
  language: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
  release_date: string;
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const baseUrl = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';

interface Prop {
  movie: MovieProp;
  index: number;
}

function MovieCard({ movie, index }: Prop) {
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * 0.25,
        ease: 'easeInOut',
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
      className="max-w-sm rounded relative w-full"
    >
      <div className="relative w-full h-[37vh]">
        <Image
          src={`${baseUrl}${movie.poster_path}`}
          alt={movie.title}
          fill
          className="rounded-xl"
        />
      </div>
      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
            {movie.title}
          </h2>
          <div className="py-1 px-2 bg-[#161921] rounded-sm">
            <p className="text-white text-sm font-bold capitalize">
              {movie.language}
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./episodes.svg"
              alt="episodes"
              width={20}
              height={20}
              className="object-contain"
            />
            <p className="text-base text-white font-bold">{movie.vote_count}</p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./star.svg"
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="text-base font-bold text-[#FFAD49]">
              {movie.vote_average}
            </p>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}

export default MovieCard;
