import { Link } from "react-router-dom";
import noImage from "../assets/images/SM-placeholder.png";
import "./MovieCard.css";
const MovieCard = ({
  poster_path,
  title,
  vote_average,
  name,
  original_name,
  id,
}) => {
  return (
    <div className="col position-relative pb-4 card-container">
      <p className="position-absolute z-1 end-0 py-1 px-2 bg-danger text-light">
        {parseFloat(vote_average?.toFixed(1) || "")}
      </p>
      <div className="card shadow">
        <div className="card-image">
          <Link to={`/movies/${id}`}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : noImage
              }
              className="card-img-top"
              alt="Movie poster"
            />
          </Link>
        </div>
        <div className="card-body">
          <p
            className="card-title text-center fw-bold text-black"
            style={{
              width: "100%",
              height: "25px",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title || original_name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
