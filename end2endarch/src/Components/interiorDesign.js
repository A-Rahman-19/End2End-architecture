import Architecture1 from "../assets/Architecture1.jpg";
import Architecture2 from "../assets/Architecture2.jpg";
import Architecture3 from "../assets/Architecture3.jpg";
import Architecture4 from "../assets/Architecture4.jpg";
import Architecture5 from "../assets/Architecture5.jpg";
import Architecture6 from "../assets/Architecture6.jpg";
import Architecture7 from "../assets/Architecture7.jpg";
import "../Styles/interiorDesign.css";

import Header from "./header";

function InteriorDesign() {
  return (
    <>
      <div className="z-layout">
      <div className="interior-lnd-img ">
        <Header />
        <div className="home-content">
          <h2>Interior Design and architecture</h2>
          <p>
           Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
          </p>
        </div>
      </div>

       
        <div className="architecture-container">
             <div className="architecture-text">
               <p>
                 Lorem Ipsum is simply dummy text of the printing and typesetting
                 industry. Lorem Ipsum has been the industry's standard dummy text
                 ever since the 1500s, Lorem Ipsum is simply dummy text of the
                 printing and typesetting industry. Lorem Ipsum has been the
                 industry's standard dummy text ever since the 1500s. Lorem Ipsum is
                 simply dummy text of the printing and typesetting industry. Lorem
                 Ipsum has been the industry's standard dummy text ever since the
                 1500s, Lorem Ipsum is simply dummy text of the printing and
                 typesetting industry. Lorem Ipsum has been the industry's standard
                 dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of
                 the printing and typesetting industry. Lorem Ipsum has been the
                 industry's standard dummy text ever since the 1500s.
               </p>
             </div>
             <div className="architecture-grid">
               {[Architecture1, Architecture2, Architecture3, Architecture4, Architecture5, Architecture6].map((img, index) => (
                 <div className="architecture-item" key={index}>
                   <img src={img} alt="Architecture" />
                   <div className="architecture-overlay">
                     <h3>Interior Design</h3>
                   </div>
                 </div>
               ))}
             </div>
           </div>
      </div>
      <div className="picture1"></div>
    </>
  );
}
export default InteriorDesign;
