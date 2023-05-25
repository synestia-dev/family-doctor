import { useState } from "react";
import "./LangSwitcher.scss";
import Arrow from "../../assets/iconComponents/Arrow";
import ua from "../../assets/ua.svg";
import de from "../../assets/de.svg";
import en from "../../assets/en.svg";
const LangSwitcher = () => {
  const [lang, setLang] = useState({ code: "ua", label: "UA", flag: ua });
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (language) => {
    setLang(language);
    setIsOpen(false);
  };

  const languageOptions = [
    { code: "ua", label: "UA", flag: ua },
    { code: "en", label: "EN", flag: en },
    { code: "de", label: "DE", flag: de },
  ];
  const selectedOptionIndex = languageOptions.findIndex(
    (option) => option.code === lang.code
  );
  if (selectedOptionIndex !== -1) {
    const selectedOption = languageOptions.splice(selectedOptionIndex, 1);
    languageOptions.unshift(selectedOption[0]);
  }
  return (
    <div className="langSwitcher">
      <div className="langSwitcher__button" onClick={toggleDropdown}>
        <img src={lang.flag} alt={lang.code} />
        <span className="langSwitcher__label">{lang.label}</span>
        <Arrow />
      </div>
      {isOpen && (
        <ul className="langSwitcher__menu">
          {languageOptions.map((option) => (
            <li
              key={option.code}
              className={`langSwitcher__menu_option`}
              onClick={() => handleLanguageChange(option)}
            >
              <img src={option.flag} alt={option.code} /> {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LangSwitcher;
