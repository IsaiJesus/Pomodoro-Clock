import { Link } from "react-router-dom";
import "../App.css";

const NotFound = () => {
  return (
    <main className="container">
      <h1 className="title-404">Ooops!</h1>
      <h2 className="subtitle-404">Page not found</h2>
      <img className="img-404" src="/images/notFound.png" alt="404"/>
      <p className="instruction-home">This page doesn't exist or was removed. We suggest you back home page.</p>
      <Link to="/" className="btn">Go Home Page</Link>
    </main>
  );
};

export default NotFound;
