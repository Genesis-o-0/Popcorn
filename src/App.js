import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Celebs from "./components/Celebs";
import Movies from "./components/Movies";
import Blog from "./components/Blog";
import Navbar from "./components/Navbar";
import Pages from "./components/Pages";
import TvShows from "./components/TvShows";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/celebs" Component={Celebs} />
          <Route path="/movies" Component={Movies} />
          <Route path="/blog" Component={Blog} />
          <Route path="/pages" Component={Pages} />
          <Route path="/tvshows" Component={TvShows} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
