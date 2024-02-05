'use server';

import MovieCard, { MovieProp } from '@/components/MovieCard';

export async function fetchMovies(page: number = 1) {
  const params = new URLSearchParams({
    include_adult: 'false',
    include_video: 'false',
    language: 'en-US',
    sort_by: 'popularity.desc',
    page: String(page),
    api_key: String(process.env.TMDB_API_KEY),
  });

  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?${params}`
  );

  const { results: data } = await response.json();

  return data.map((item: MovieProp, index: number) => (
    <MovieCard key={item.id} movie={item} index={index} />
  ));
}
