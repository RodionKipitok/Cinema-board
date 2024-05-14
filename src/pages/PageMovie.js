import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { Card, CardContent, Container } from '@mui/material';
import { HideButton } from 'components/HideButton';
import '../pages/PageMovie.css';

function PageMovie() {
  const [hideInformation, setHideInformation] = useState(false);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTE3MzI1MTIwZDBjMTg2MWVlOWY1Y2E5OTU5M2UyNyIsInN1YiI6IjY1YTUyMDc0MDU4MjI0MDEyOWZkZWI3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.02VK07NSdM1DVG9zE8VFFZ__KEaYfqoTTfKCjcVdyXg',
      },
    };

    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then(response => response.json())
      .then(response => setMovie(response))
      .catch(err => console.error(err));
  }, [id]);

  return (
    <>
      <Container>
        <NavLink className="goHome" to="/">
          Go Home
        </NavLink>
        <main>
          <article>
            <div className="wrapper">
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                  alt=""
                  className="imgPageMovie"
                />
              </div>
              <h1 className="heading">{movie.original_title}</h1>
              <ul className="title">
                <li className="itemList">
                  <p>User Score</p>
                </li>
                <li className="itemList">
                  <p>Overview</p>
                </li>
                <li className="itemList">
                  <p>{movie.overview}</p>
                </li>
                <li className="itemList">
                  <p>Genres</p>
                </li>
              </ul>
            </div>
          </article>
          <section className="Additional-inform">
            <p className="titleAdditionalInfo">Additional information</p>
            <ul>
              <li>
                <NavLink
                  className="link"
                  to="cast"
                  onClick={() => setHideInformation(!hideInformation)}
                >
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="link"
                  to="reviews"
                  onClick={() => setHideInformation(!hideInformation)}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
          </section>
        </main>
      </Container>
      {hideInformation && (
        <div>
          <Outlet />
          <HideButton
            setHideInformation={setHideInformation}
            hideInformation={hideInformation}
          />
        </div>
      )}
    </>
  );
}

export default PageMovie;
