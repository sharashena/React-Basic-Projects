import PropTypes from "prop-types";
import moment from "moment";

const Article = ({ title, snippet, date, length }) => {
  return (
    <article className="post">
      <h2>{title}</h2>
      <div className="post-info">
        <span>{moment(date).format("dddd Do, YYYY")}</span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </article>
  );
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  snippet: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
  length: PropTypes.number.isRequired,
};

export default Article;
