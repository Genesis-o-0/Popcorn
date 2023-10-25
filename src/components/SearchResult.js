import { useParams } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import LoadingSpinner from "./Spinner";
import MovieCard from "./MovieCard";
import useAPICall from "../API/useAPICall";

const SearchResult = () => {
  const query = useParams();
  const { data, loading, error } = useAPICall(
    `https://api.themoviedb.org/3/search/multi?api_key=14bdd69ce887376edfafb09f23f78fe9&query=${query.query}`
  );
  return (
    <div className="container">
      <div className="row my-5  ">
        {error && <ErrorMessage />}
        {loading && <LoadingSpinner />}

        {data.results?.map((movie) => {
          return (
            <div className="col-sm-12 col-md-6 col-lg-3" key={movie.id}>
              <MovieCard {...movie} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResult;
