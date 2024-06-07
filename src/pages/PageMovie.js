import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';
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
          <article style={{ display: 'flex' }}>
            <div className="wrapper">
              <img
                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                alt=""
                className="imgPageMovie"
              />

              <Box>
                <Typography className="heading" variant="h2" component="h2">
                  {movie.original_title}
                </Typography>
                <Typography className="itemList" variant="p" component="p">
                  Overview
                </Typography>
                <Typography className="itemList" variant="p" component="p">
                  {movie.overview}
                </Typography>
              </Box>
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
