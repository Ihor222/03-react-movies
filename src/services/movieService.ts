import { http } from '../libs/api-service.ts';
import {ROUTES } from '../constants';
import type { Movie } from '../types/movie.ts';

interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

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
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjE5OTZmYmNlNzFlYjI5Y2Q0MDhlMjQ3ODlhNDQyMCIsIm5iZiI6MTc1MjU4NzYwOC43MTksInN1YiI6IjY4NzY1ZDU4ODQ1OWU5NGE4MmE3YjE1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e88HARb-tOxlt9j1f4g-Xw9un_SduYbvlgvVFiJ1ypc`, 
      },
    }
  );

  return data;
};
