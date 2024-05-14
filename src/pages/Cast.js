import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardMedia, Grid, Container } from '@mui/material';
import '../pages/Cast.css';

function Cast() {
  const [casts, setCast] = useState([]);
  console.log(casts);
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

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
      options
    )
      .then(response => response.json())
      .then(response => setCast(response.cast))
      .catch(err => console.error(err));
  }, [casts, id]);

  return (
    <Container sx={{ mt: '1rem', mb: '1rem' }}>
      <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {casts.map(cast => (
          <Grid key={cast.id} item xs={3}>
            <Card sx={{ maxWidth: 250 }}>
              {cast.profile_path === null ? (
                <CardMedia
                  style={{ height: 375 }}
                  component="img"
                  image="https://st.depositphotos.com/1654249/1263/i/950/depositphotos_12630302-stock-photo-3d-man-showing-thumbs-up.jpg"
                  alt=""
                />
              ) : (
                <CardMedia
                  component="img"
                  image={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
                  alt=""
                />
              )}
              <CardContent>
                <span>Name</span>
                <p>{cast.original_name}</p>
                <span>Character</span>
                {cast.character === '' ? (
                  <p>Not information</p>
                ) : (
                  <p>{cast.character}</p>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Cast;

// https://image.tmdb.org/t/p/w342/7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg
