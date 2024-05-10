import { NavLink, Outlet } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import '../components/Layout.css';

const Layuot = () => {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar className="toolBar">
          <div>
            <Typography variant="h4" component="span">
              Korzhik cinema
            </Typography>
            <LocalMoviesIcon fontSize="large" sx={{ pt: '2px' }} />
          </div>
          <nav>
            <NavLink className="headLink" to="/">
              Home
            </NavLink>
            <NavLink className="headLink" to="/search/search-movies">
              Movies
            </NavLink>
          </nav>
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  );
};

export default Layuot;
