import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Celebs from "./components/Celebs";
import Movies from "./components/Movies";
import Blog from "./components/Blog";
import NavbarComp from "./components/Navbar";
import Pages from "./components/Pages";
import TvShows from "./components/TvShows";
import "./index.css";
import MovieDetails from "./components/MovieDetails";
import NotFound from "./components/NotFound";
import SearchResult from "./components/SearchResult";

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComp />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/celebs" Component={Celebs} />
          <Route path="/movies" Component={Movies} />
          <Route path="/blog" Component={Blog} />
          <Route path="/pages" Component={Pages} />
          <Route path="/tvshows" Component={TvShows} />
          <Route path="/movies/:id" Component={MovieDetails} />
          <Route path="/search/:query" Component={SearchResult} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
