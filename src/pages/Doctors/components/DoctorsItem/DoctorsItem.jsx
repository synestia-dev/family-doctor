import "./DoctorsItem.scss";
const DoctorsItem = () => {
  return (
    <div className="person">
      <div className="person__image" />
      <div className="person__info">
        <h4 className="person__title">Іващенко Владислав Валерійович</h4>
        <p className="person__text">головний лікар напрямку Стоматологія</p>
      </div>
    </div>
  );
};

export default DoctorsItem;
