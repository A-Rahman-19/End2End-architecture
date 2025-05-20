import "../Styles/portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-lnd-img">
        <img
          src={require("../assets/portfolio.png")}
          alt="Portfolio landing image"
          className="portfolio-img"
        />
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
