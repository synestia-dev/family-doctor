import "./Menu.scss";
import LangSwitcher from "../../LangSwitcher/LangSwitcher";

import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import Button from "../../Button/Button.jsx";

import Geo from "../../../assets/iconComponents/Geo.jsx";
const Menu = () => {
  const { t } = useTranslation();
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <nav className="menu">
        <div className="container">
          <div className="menu__inner">
            <ul className="menu__list">
              <li>
                <Link
                  to="/directions"
                  className={
                    location.pathname === "/directions" ? `location` : ``
                  }
                >
                  Напрямки
                </Link>
              </li>
              <li>
                <Link
                  to="/doctors"
                  className={location.pathname === "/doctors" ? `location` : ``}
                >
                  Лікарі
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={location.pathname === "/about" ? `location` : ``}
                >
                  Про нас
                </Link>
              </li>
              <li>
                <Link
                  to="/for-companies"
                  className={
                    location.pathname === "/for-companies" ? `location` : ``
                  }
                >
                  Для компаній
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className={location.pathname === "/news" ? `location` : ``}
                >
                  Новини
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={location.pathname === "/contact" ? `location` : ``}
                >
                  Контакти
                </Link>
              </li>
            </ul>
            <div>
              <LangSwitcher />
              <div className="menu__geo">
                <Geo color="#444444" />
                <p>
                  м. Запоріжжя, <br /> вул. Лікарняна, 18.
                </p>
              </div>

              <Button text="Запис на прием" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;
