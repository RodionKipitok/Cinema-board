import { useState, useEffect } from 'react';
import { useSearchParams, NavLink } from 'react-router-dom';
import { Container, TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import '../pages/SearchMovies.css';

function SearchMovies() {
  const [movies, setMovies] = useState([]);
  console.log(movies);
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);

  const postQuery = searchParams.get('post') || '';

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTE3MzI1MTIwZDBjMTg2MWVlOWY1Y2E5OTU5M2UyNyIsInN1YiI6IjY1YTUyMDc0MDU4MjI0MDEyOWZkZWI3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.02VK07NSdM1DVG9zE8VFFZ__KEaYfqoTTfKCjcVdyXg',
      },
    };

    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${postQuery}
      &include_adult=false&language=en-US&page=1`,
      options
    )
      .then(response => response.json())
      .then(response => setMovies(response.results))
      .catch(err => console.error(err));
  }, [postQuery]);

  const hendleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    console.log(e);
    const query = form.search.value;
    console.log(query);
    setSearchParams({ post: query });
  };

  return (
    <>
      <Container sx={{ mt: '1rem', mb: '1rem' }}>
        <NavLink className="goHome" to="/">
          Go Home
        </NavLink>
        <h2>Search Movie</h2>
        <form autoComplete="off" onSubmit={hendleSubmit}>
          <TextField
            label="search"
            name="search"
            id="filled-basic"
            variant="filled"
            size="small"
          />
          <Button
            style={{ marginLeft: 10 }}
            type="submit"
            variant="contained"
            size="large"
            endIcon={<SearchIcon />}
          >
            Search
          </Button>
        </form>
        <main style={{ marginTop: '1rem' }}>
          <article>
            <ul className="wrapperSearch">
              {movies.map(movie => (
                <li className="list-item" key={movie.id}>
                  <img
                    className="imgSearch"
                    src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                    alt=""
                  />
                  <div className="titleMovie">
                    <h1>{movie.title}</h1>
                    <p>Overview</p>
                    <p className="description">{movie.overview}</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </main>
      </Container>
    </>
  );
}

export default SearchMovies;
