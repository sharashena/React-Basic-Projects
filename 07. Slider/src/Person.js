import PropTypes from "prop-types";
import { FaQuoteRight } from "react-icons/fa";

const Person = ({
  id,
  image,
  name,
  title,
  quote,
  personIndex,
  index,
  people,
}) => {
  let position = "nextSlide";
  if (personIndex === index) {
    position = "activeSlide";
  }
  if (
    personIndex === index - 1 ||
    (index === 0 && personIndex === people.length - 1)
  ) {
    position = "lastSlide";
  }
  return (
    <article key={id} className={position}>
      <img src={image} alt={name} className="person-img" />
      <h4>{name}</h4>
      <p className="title">{title}</p>
      <p className="text">{quote}</p>
      <FaQuoteRight className="icon" />
    </article>
  );
};

Person.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  personIndex: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  people: PropTypes.array.isRequired,
};

export default Person;
