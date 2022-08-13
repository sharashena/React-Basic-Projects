import { useParams, Link } from "react-router-dom";
import { useFetch } from "../useFetch";

const imgUrl =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const SingleMovie = () => {
  const { id } = useParams();
  const { loading, error, data: movie } = useFetch(`&i=${id}`);

  if (loading) {
    return <div className="loading"></div>;
  }
  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    );
  }

  const { Poster: img, Title: title, Plot: plot, Year: year } = movie;

  return (
    <section className="single-movie">
      <img src={img === "N/A" ? imgUrl : img} alt={title} />
      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
