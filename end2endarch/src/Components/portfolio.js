import "../Styles/portfolio.css";
import Header from "../Components/header"

function Portfolio() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-lnd-img">
        <Header/>
        <div className="portfolio-heading">
    OUR GALLERY
  </div>
      </div>
      <div className="portfolio">
        <div className="portfolio-images"></div>
        <div className="portfolio-images"></div>
        <div className="portfolio-images"></div>
        <div className="portfolio-images"></div>
      </div>
    </div>
  );
}

export default Portfolio;
