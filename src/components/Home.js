import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
import useAPICall from "../API/useAPICall";
import LoadingSpinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";
import MovieCard from "./MovieCard";
import { useState } from "react";

const Home = () => {
  const [selected, setSelected] = useState(null);
  const [isClearable, setIsClearable] = useState(true);

  const options = [
    { value: "tv", label: "TV Shows" },
    { value: "movie", label: "Movies" },
    { value: "person", label: "Celebrity" },
  ];

  const handleChange = (e) => {
    if (e) {
      setSelected({ ...e });
    } else {
      setSelected(null);
    }
  };

  const { data, loading, error } = useAPICall(
    "https://api.themoviedb.org/3/trending/all/day?api_key=14bdd69ce887376edfafb09f23f78fe9"
  );
  return (
    <>
      <div className="bg-body-tertiary py-5">
        <div className="container py-3">
          <div className="row">
            <div className="col-sm-12 col-md-8 col-lg-10 d-flex mb-3">
              <button className=" border-0 bg-transparent me-3 fs-4 ">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
              <input
                placeholder="Find movies TV Shows documentary and more..."
                type="text"
                className="form-control border-0 outline-0"
              />
            </div>
            <div className="col-12 col-md-4 col-lg-2 d-flex justify-content-end ">
              <Select
                isClearable={isClearable}
                options={options}
                value={selected}
                onChange={handleChange}
                className="col-12"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row my-5  ">
          <h2 className="fw-medium display-5 pb-4">Latest Movies & Tv Shows</h2>

          {error && <ErrorMessage />}
          {loading && <LoadingSpinner />}

          {data.results?.map((movie) => {
            if (selected) {
              if (selected.value === movie.media_type) {
                return (
                  <div className="col-sm-12 col-md-6 col-lg-3 " key={movie.id}>
                    <MovieCard {...movie} />
                  </div>
                );
              }
            } else {
              return (
                <div className="col-sm-12 col-md-6 col-lg-3" key={movie.id}>
                  <MovieCard {...movie} />
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
