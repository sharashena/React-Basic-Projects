import PropTypes from "prop-types";

const Categories = ({ allCategories, filterCategories }) => {
  return (
    <div className="btn-container">
      {allCategories.map((category, index) => {
        return (
          <button
            key={index}
            className="filter-btn"
            onClick={() => filterCategories(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

Categories.propTypes = {
  allCategories: PropTypes.array.isRequired,
  filterCategories: PropTypes.func.isRequired,
};

export default Categories;
