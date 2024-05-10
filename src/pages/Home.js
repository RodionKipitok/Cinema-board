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

function HomePage() {
  const [listMovies, setListMovies] = useState([]);
  console.log(listMovies);
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
    <Container sx={{ mt: '1rem', mb: '1rem' }}>
      <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {listMovies.map(movie => (
          <Grid key={movie.id} item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={`https://image.tmdb.org/t/p/w342${movie.backdrop_path}`}
                title="post movie"
              />
              <CardContent>
                <Link to={`${movie.id}`}>{movie.original_title}</Link>
                <Typography variant="p" component="p">
                  {movie.release_date}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default HomePage;

{
  /* <li key={movie.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={`https://image.tmdb.org/t/p/w342${movie.backdrop_path}`}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <Link to={`${movie.id}`}>{movie.original_title}</Link>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {movie.release_date}
                </Typography>
              </CardContent>
            </Card>
          </li> */
}

{
  /* <ul>
{listMovies.map(movie => (
  <Box sx={{ width: '100%' }}>
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <Grid item xs={6}>
        <p>1</p>
      </Grid>
    </Grid>
  </Box>
))}
</ul> */
}
