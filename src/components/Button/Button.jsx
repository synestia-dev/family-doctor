/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Button.scss";
const Button = ({ to = "", text, color = "default", icon = null, onClick }) => {
  return (
    <Link to={to} className={`button ${color}`} onClick={onClick}>
      {icon !== null && <img src={icon} alt="icon" />}
      {text}
    </Link>
  );
};

export default Button;
