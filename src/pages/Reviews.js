import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {  Container } from '@mui/material';

function Review(params) {
  const [review, setReview] = useState([]);
  console.log(review);
  const { id } = useParams();
  console.log(id);
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
      `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
      options
    )
      .then(response => response.json())
      .then(response => setReview(response.results))
      .catch(err => console.error(err));
  }, [review, id]);

  return (
    <Container>
      <ul>
        {review.map(item => (
          <li key={item.id}>
            <h4>{item.author}</h4>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Review;
