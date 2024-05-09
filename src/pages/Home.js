import { Link } from 'react-router-dom';
import { getTrendMovies } from 'service/api';
function HomePage() {
  const trendMovies = getTrendMovies();
  return (
    <ul>
      {trendMovies.map(movie => (
        <li key={movie.id}>
          <Link to={`${movie.id}`}>{movie.original_title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default HomePage;
