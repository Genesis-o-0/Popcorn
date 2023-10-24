import { useParams } from "react-router-dom";
import useAPICall from "../API/useAPICall";
const MovieDetails = () => {
  const params = useParams();
  console.log(params.id);
  const { data, loading, error } = useAPICall(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=14bdd69ce887376edfafb09f23f78fe9`
  );

  return <h1>Movie Details</h1>;
};

export default MovieDetails;
