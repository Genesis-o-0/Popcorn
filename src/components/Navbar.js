import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/pages">pages</Link>
      <Link to="/movies">movies</Link>
      <Link to="/tvshows">tvshows</Link>
      <Link to="/celebs">celebs</Link>
      <Link to="/blog">blog</Link>
    </div>
  );
};

export default Navbar;
