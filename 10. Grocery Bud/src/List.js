import { FaEdit, FaTrash } from "react-icons/fa";
import PropTypes from "prop-types";

const List = ({ id, name, removeItem, editItem }) => {
  return (
    <article className="grocery-item">
      <p className="title">{name}</p>
      <div className="btn-container">
        <button className="edit-btn" type="button" onClick={() => editItem(id)}>
          <FaEdit />
        </button>
        <button
          className="delete-btn"
          type="button"
          onClick={() => removeItem(id)}
        >
          <FaTrash />
        </button>
      </div>
    </article>
  );
};

List.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
};

export default List;
