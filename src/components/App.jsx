import { Routes, Route } from 'react-router-dom';
import SearchMovies from 'pages/SearchMovies';
import HomePage from 'pages/Home';
import PageMovie from 'pages/PageMovie';
import Cast from 'pages/Cast';
import Review from 'pages/Reviews';
import Layuot from './Layout';
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layuot />}>
          <Route index element={<HomePage />} />
          <Route path="/search/search-movies" element={<SearchMovies />} />
          <Route path="/:id" element={<PageMovie />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Review />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
