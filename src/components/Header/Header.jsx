import "./Header.scss";
import Preheader from "./Preheader/Preheader";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import Button from '../Button/Button';
const Header = () => {
  return (
    <>
      <Preheader />
      <div className="header">
        <div className="container">
          <nav className="header__inner">
            <div className="header__logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <ul className="header__menu">
              <li>
                <Link to="/directions">Напрямки</Link>
              </li>
              <li>
                <Link to="/doctors">Лікарі</Link>
              </li>
              <li>
                <Link to="/about">Про нас</Link>
              </li>
              <li>
                <Link to="/for-companies">Для компаній</Link>
              </li>
              <li>
                <Link to="/news">Новини</Link>
              </li>
              <li>
                <Link to="/contacts">Контакти</Link>
              </li>
              <li>
                <Link to="/directions">Фотогалерея</Link>
              </li>
            </ul>
            <Button to="/" text="Запис на прийом"/>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
