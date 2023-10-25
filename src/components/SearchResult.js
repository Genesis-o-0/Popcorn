import { Link, useParams } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import LoadingSpinner from "./Spinner";
import MovieCard from "./MovieCard";
import useAPICall from "../API/useAPICall";

const SearchResult = () => {
  const query = useParams();
  const { data, loading, error } = useAPICall(
    `https://api.themoviedb.org/3/search/multi?api_key=14bdd69ce887376edfafb09f23f78fe9&query=${query.query}`
  );

  return data.results?.length > 1 ? (
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
  ) : (
    <div>
      <h1 className="text-danger fw-bold text-center pt-5">No results found</h1>
      <div className="text-center pt-5">
        <Link to="/" type="button" className="btn btn-primary  mx-auto">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default SearchResult;
