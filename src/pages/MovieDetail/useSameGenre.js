import {useState, useEffect} from 'react';
import useMoviesData from '../Movies/useMoviesData';

export default function useSameGenre({genres}) {
  const [moviesByGenre, setMoviesByGenre] = useState([]);
  const [sameGenreLoading, setSameGenreLoading] = useState(true);

  const {movies,fetchbyGenre} = useMoviesData();

  useEffect(() => {
    if (movies.length === 0) {
      return;
    }

    let filteredArr =fetchbyGenre(genres)
    setMoviesByGenre(filteredArr);
    setSameGenreLoading(false);
  }, [movies]);

  return {
    moviesByGenre,
    sameGenreLoading,
  };
}
