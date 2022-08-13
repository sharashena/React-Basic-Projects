import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Cocktail = ({ id, img, name, glass, alcohol: info }) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={img} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`cocktail/${id}`} className="btn btn-primary btn-details">
          details
        </Link>
      </div>
    </article>
  );
};

Cocktail.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  glass: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};

Cocktail.defaultProps = {
  info: "default info",
};

export default Cocktail;
