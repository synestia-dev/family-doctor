import "./Header.scss";
import Preheader from "./Preheader/Preheader";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import LangSwitcher from "../LangSwitcher/LangSwitcher";

import { useTranslation } from 'react-i18next';
const Header = () => {
  const { t } = useTranslation();
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
            <div className="header__menu">
              <ul className="header__menu_list">
                <li>
                  <Link to="/directions">{t("Напрямки")}</Link>
                </li>
                <li>
                  <Link to="/doctors">{t('Лікарі')}</Link>
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
              <div className="separator"></div>
              <LangSwitcher />
            </div>
            <Button to="/" text="Запис на прийом" color="choose default"/>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
