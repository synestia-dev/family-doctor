/* eslint-disable react/prop-types */

import { useTranslation } from "react-i18next";
import "./DoctorsItem.scss";

const DoctorsItem = ({ itemData }) => {
  const positionText = itemData.head
    ? "завідувач відділення, " + itemData.position
    : itemData.position + (itemData.childrens ? ", дитячий" : "");

  const { t } = useTranslation();

  return (
    <div className="person">
      <div
        className="person__image"
        style={{
          backgroundImage: `url(${
            itemData.photo.data
              ? itemData.photo.data[0].attributes.url
              : "https://familydoctor.fra1.digitaloceanspaces.com/a79fc36534d9eae235c6078d6fd29f09.png"
          })`,
        }}
      ></div>
      <div className="person__info">
        <h4 className="person__title">
          {t(itemData.surname)} {t(itemData.name)} {t(itemData.patronymic)}
        </h4>
        <p className="person__text">{t(positionText)}</p>
      </div>
    </div>
  );
};
export default DoctorsItem;
