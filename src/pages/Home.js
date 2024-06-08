import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  Grid,
  Container,
} from '@mui/material';
import '../pages/Home.css';

function HomePage() {
  const [listMovies, setListMovies] = useState([]);

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
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      options
    )
      .then(response => response.json())
      .then(response => setListMovies(response.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <h1 className="trend">Trend</h1>
      <Container sx={{ mt: '1rem', mb: '1rem' }}>
        <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {listMovies.map(movie => (
            <Grid key={movie.id} item xs={4}>
              <Link to={`${movie.id}`}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={`https://image.tmdb.org/t/p/w342${movie.backdrop_path}`}
                    title="post movie"
                  />
                  <CardContent>
                    <Typography variant="p" component="p">
                      {movie.original_title}
                    </Typography>
                    <Typography variant="p" component="p">
                      {movie.release_date}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default HomePage;
