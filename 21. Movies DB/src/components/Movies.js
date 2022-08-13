import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

const imgUrl =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = () => {
  const { movies, loading } = useGlobalContext();
  if (loading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="movies">
      {movies.map(movie => {
        const { Title: title, Year: year, imdbID: id, Poster: img } = movie;
        return (
          <Link to={`/movie/${id}`} key={id} className="movie">
            <article>
              <img src={img === "N/A" ? imgUrl : img} alt={title} />
              <div className="movie-info">
                <h4 className="title">{title}</h4>
                <p>{year}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
