import {useState, useEffect} from 'react';
import axios from 'axios';
export default function useMoviesData() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [comments, setComments] = useState([]);
  const [pending, setPending] = useState(true);
  const [error, setError] = useState();

  const fetchbyGenre = genres => {
    let filteredMovieArray = [];

    genres.forEach(gnr => {
      let filteredArr = movies.filter(function (movie) {
        return movie.genre.includes(gnr);
      });

      filteredMovieArray.push(...filteredArr);
    });

    //remove duplicate one-liner
    let filteredWithoutDuplicate = filteredMovieArray.filter(
      (v, i, a) => a.findIndex(t => t.id === v.id) === i,
    );

    return filteredWithoutDuplicate;
  };

  const filterCommentsByMovieId = id => {
    let movieComments = comments.filter(comment => {
      return comment.movieId === id;
    });
    return movieComments;
  };

  async function fetchMovies() {
    try {
      let movieRes = await axios.get('http://10.0.3.2:3000/movies');
      let genreRes = await axios.get('http://10.0.3.2:3000/genres');
      let commentRes = await axios.get('http://10.0.3.2:3000/comments');
      setMovies(movieRes.data);
      setGenres(genreRes.data);
      setComments(commentRes.data);
    } catch (err) {
      setError(err);
    } finally {
      setPending(false);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return {
    fetchbyGenre,
    filterCommentsByMovieId,
    movies,
    genres,
    comments,
    pending,
    error,
  };
}
