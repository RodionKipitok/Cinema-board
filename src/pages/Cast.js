import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardMedia, Grid } from '@mui/material';
import '../pages/Cast.css';

function Cast() {
  const [casts, setCast] = useState([]);

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
    <ul>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {casts.map(cast => (
          <li key={cast.id}>
            <Grid item sx={3}>
              <Card sx={{ maxWidth: 150 }}>
                <CardMedia>
                  {cast.profile_path === null ? (
                    <img
                      className="imgCast"
                      src="https://cdn-icons-png.flaticon.com/512/4908/4908415.png"
                      alt=""
                    />
                  ) : (
                    <img
                      className="imgCast"
                      src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
                      alt=""
                    />
                  )}
                </CardMedia>
                <CardContent>
                  <p>{cast.original_name}</p>
                </CardContent>
              </Card>
            </Grid>
          </li>
        ))}
      </Grid>
    </ul>
  );
}

export default Cast;

// https://image.tmdb.org/t/p/w342/7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg
