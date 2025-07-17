import { http } from '../libs/api-service.ts';
import { ROUTES } from '../constants';
import type { Movie } from '../types/movie.ts';

interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const BEARER_KEY = import.meta.env.VITE_BEARER_KEY;

export const fetchMovie = async (
  query: string,
  page: string = '1'
): Promise<MoviesResponse> => {
  const urlSearchParams = new URLSearchParams({ query, page });

  const { data } = await http.get<MoviesResponse>(
    `${ROUTES.searchMovie}?${urlSearchParams.toString()}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${BEARER_KEY}`,
      },
    }
  );

  return data;
};
