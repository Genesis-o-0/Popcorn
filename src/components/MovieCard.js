import { Link } from "react-router-dom";
const MovieCard = ({
  poster_path,
  title,
  vote_average,
  name,
  original_name,
  id,
}) => {
  return (
    <div className="col position-relative mb-3">
      <p className="position-absolute z-1 end-0 py-1 px-2 bg-danger text-light">
        {parseFloat(vote_average.toFixed(1))}
      </p>
      <div className="card">
        <Link to={`/movies/${id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            className="card-img-top"
            alt="..."
          />
        </Link>
        <div className="card-body">
          <p className="card-title text-center fw-bold" style={{width: '100%',height: '25px' ,overflow: 'hidden', textOverflow:'ellipsis'}}>{title || original_name}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
