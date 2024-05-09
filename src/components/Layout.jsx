import { NavLink, Outlet } from 'react-router-dom';
import '../components/Layout.css';

const Layuot = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink className="head" to="/">
            Home
          </NavLink>
          <NavLink className="head" to="/search/search-movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Layuot;
