import PropTypes from "prop-types";
import style from "./Input.module.css";

const Input = ({ onChange, value }) => {
  return (
    <input
      className={style.input}
      placeholder="Search"
      value={value}
      onChange={onChange}
    />
  );
};

Input.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Input;
