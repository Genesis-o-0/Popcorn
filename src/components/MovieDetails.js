import { useParams } from "react-router-dom";
import useAPICall from "../API/useAPICall";
import noImage from "../assets/images/SM-placeholder.png";
import "./MovieDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faHeart } from "@fortawesome/free-solid-svg-icons";
import LoadingSpinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";
const MovieDetails = () => {
  const params = useParams();
  const { data, loading, error } = useAPICall(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=14bdd69ce887376edfafb09f23f78fe9`
  );

  function toHoursAndMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return { hours, minutes };
  }
  return (
    <div className="details">
      {error && <ErrorMessage />}
      {loading && <LoadingSpinner />}
      {Object.keys(data).length !== 0 && (
        <div className="card text-bg-dark border-0">
          <div className=" overlay p-0 p-md-2"></div>
          <img
            src={
              "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/" +
              data.backdrop_path
            }
            alt=""
            width="100%"
            className="d-none d-md-block"
            style={{ height: "100vh", objectFit: "cover" }}
          />
          <div className="card-img-overlay" style={{ zIndex: "3" }}>
            <div
              className="card mb-3 mx-auto"
              style={{
                background: "transparent",
                border: "none",
              }}
            >
              <div className="row g-0 justify-content-center">
                <div className="col-md-4">
                  <img
                    src={
                      data.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
                        : noImage
                    }
                    className="img-fluid rounded"
                    alt="..."
                  />
                </div>
                <div className="col-md-8 ps-3">
                  <div className="card-body">
                    <p className="card-text fw-bold">
                      {data.release_date?.split("-")[0] || "N/A"}
                    </p>
                    <h3 className="card-title fw-bold pb-2">
                      {data.title || data.original_name}
                    </h3>
                    <p className="card-text">{data.overview || "N/A"}</p>
                    <div>
                      <a
                        href={`https://www.imdb.com/title/${data.imdb_id}`}
                        className="  text-decoration-none"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={faCirclePlay} className="me-2" />
                        <span>Watch trailer</span>
                      </a>
                      <small className="fs-2 mx-1">|</small>
                      <small>
                        {data.runtime
                          ? toHoursAndMinutes(data.runtime).hours +
                            " Hours and " +
                            toHoursAndMinutes(data.runtime).minutes +
                            " Minutes"
                          : "N/A"}
                      </small>
                      <span className="fs-1 me-2"> .</span>
                      <span>
                        {data.genres
                          ? data.genres.map((genre, index) => {
                              return <small key={index}>{genre.name}, </small>;
                            })
                          : "N/A"}
                      </span>
                      <span className="fs-1 me-2"> .</span>
                      <small>
                        {data.release_date
                          ? new Date(data.release_date).toLocaleDateString(
                              "en-US",
                              { year: "numeric", month: "long", day: "numeric" }
                            )
                          : "N/A"}
                      </small>
                    </div>
                    <div className="pt-4 d-flex flex-column flex-md-row row-gap-4 justify-content-between align-items-center">
                      <div>
                        <span className="fw-bold">
                          {data.vote_average
                            ? parseFloat(data.vote_average?.toFixed(1))
                            : "N/A"}{" "}
                          <sub>IMDB</sub>
                        </span>
                        <small className="fs-2 mx-4">|</small>
                        <span>
                          <span className="text-body-light">status: </span>
                          <span className="text-body-light fw-bold">
                            {data.status}
                          </span>
                        </span>
                      </div>
                      <div>
                        <button type="button" className="btn btn-dark me-3">
                          +
                        </button>
                        <button type="button" className="btn btn-light">
                          <FontAwesomeIcon icon={faHeart} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
