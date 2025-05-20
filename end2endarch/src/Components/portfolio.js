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
        <div className="portfolio-images">
                <img
        src={require("../assets/portfolio4.jpg")}
        alt="project"
        className="project-images"
      />
        </div>
        <div className="portfolio-images">
          <img
        src={require("../assets/portfolio2.jpg")}
        alt="project"
        className="project-image"
      />
        </div>
        <div className="portfolio-images">
          <img
        src={require("../assets/portfolio1.jpg")}
        alt="project"
        className="project-image"
      />
        </div>
        <div className="portfolio-images">
          <img
        src={require("../assets/portfolio3.jpg")}
        alt="project"
        className="project-image"
      />
        </div>
           <div className="portfolio-images">
          <img
        src={require("../assets/portfolio3.jpg")}
        alt="project"
        className="project-image"
      />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
