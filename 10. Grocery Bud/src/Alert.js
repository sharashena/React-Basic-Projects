import { useEffect } from "react";
import PropTypes from "prop-types";

const Alert = ({ msg, type, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 2000);
    return () => clearTimeout(timeout);
  }, [list]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

Alert.propTypes = {
  msg: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  removeAlert: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
};

export default Alert;
