import { useState } from 'react';

export function getTrendMovies() {
  let data;
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
    .then(response => (data = response.results))
    .catch(err => console.error(err));

  return data;
}
