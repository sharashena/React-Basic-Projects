import PropTypes from "prop-types";

const List = ({ name, age, image }) => {
  return (
    <article className="person">
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
};

List.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default List;
