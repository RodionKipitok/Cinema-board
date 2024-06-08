import { NavLink, Outlet } from 'react-router-dom';
import { AppBar, Toolbar, Link, Container } from '@mui/material';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import '../components/Layout.css';

const Layuot = () => {
  return (
    <>
      <AppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar>
            <LocalMoviesIcon fontSize="large" sx={{ pt: '2px' }} />
            <NavLink className="headLink" to="/">
              Home
            </NavLink>
            <NavLink className="headLink" to="/search/search-movies">
              Movies
            </NavLink>
          </Toolbar>
        </Container>
      </AppBar>

      <Outlet />
    </>
  );
};

export default Layuot;

{
  /* <Container>
  <Toolbar>
    <div>
      <Typography variant="h4" component="span">
        Korzhik cinema
      </Typography>
      <LocalMoviesIcon fontSize="large" sx={{ pt: '2px' }} />
    </div>
    <NavLink className="headLink" to="/">
      Home
    </NavLink>
    <NavLink className="headLink" to="/search/search-movies">
      Movies
    </NavLink>
  </Toolbar>
</Container>; */
}
