import "./ErrorPage.scss";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import errorImg from "../../assets/404.png";
import Button from "../../components/Button/Button";
const ErrorPage = () => {
  return (
    <>
      <Header />
      <section className="error">
        <div className="container">
          <div className="error__inner">
            <img src={errorImg} alt="404" />
            <div>
              <h1>404 Error</h1>
              <h3>Оооой! Лікаря немає поруч</h3>
              <p>
                Ми намагалися, але не змогли знайти сторінку, яку ви шукаєте{" "}
                <br />
                Наступного разу ми зробимо краще
              </p>
            </div>
            <Button to="/" text="Повернутися" color="choose default" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ErrorPage;
