import Architecture1 from "../assets/Architecture1.jpg";
import Architecture2 from "../assets/Architecture2.jpg";
import Architecture3 from "../assets/Architecture3.jpg";
import Architecture4 from "../assets/Architecture4.jpg";
import Architecture5 from "../assets/Architecture5.jpg";
import Architecture6 from "../assets/Architecture6.jpg";
import Architecture7 from "../assets/Architecture7.jpg";
import "../Styles/i nteriorDesign.css";

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

        <div className="section">
          <div className="text-block">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
              Lorem Ipsum.
            </p>
          </div>
          <div className="image-block">
            <img src={Architecture2} alt="Logo" className="responsive-img" />
          </div>
        </div>
        <div className="section reverse">
          <div className="text-block">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
              Lorem Ipsum.
            </p>
          </div>
          <div className="image-block">
            <img src={Architecture3} alt="Logo" className="responsive-img" />
          </div>
        </div>
        <div className="section">
          <div className="text-block">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
              Lorem Ipsum.
            </p>
          </div>
          <div className="image-block">
            <img src={Architecture4} alt="Logo" className="responsive-img" />
          </div>
        </div>
        <div className="section reverse">
          <div className="text-block">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
              Lorem Ipsum.
            </p>
          </div>
          <div className="image-block">
            <img src={Architecture5} alt="Logo" className="responsive-img" />
          </div>
        </div>
        <div className="section">
          <div className="text-block">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
              Lorem Ipsum.
            </p>
          </div>
          <div className="image-block">
            <img src={Architecture6} alt="Logo" className="responsive-img" />
          </div>
        </div>
        <div className="section reverse">
          <div className="text-block">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
              Lorem Ipsum.
            </p>
          </div>
          <div className="image-block">
            <img src={Architecture7} alt="Logo" className="responsive-img" />
          </div>
        </div>
      </div>
      <div className="picture1"></div>
    </>
  );
}
export default InteriorDesign;
