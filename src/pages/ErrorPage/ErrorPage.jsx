import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./ErrorPage.scss";
const ErrorPage = () => {
  return (
    <>
      <Header />
      <section className="error">
        <div className="container">Error 404</div>
      </section>
      <Footer />
    </>
  );
};

export default ErrorPage;
