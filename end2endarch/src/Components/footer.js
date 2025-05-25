import "../Styles/footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="inner-container1">
        <img
          src={require("../assets/End2Endlogo.png")}
          alt="Company logo"
          className="footer-logo"
        />
        <div className="policies">
          <a className="">Terms & conditions</a>
          <a className="">Privacy policies</a>
        </div>
      </div>
      <div className="inner-container2">
        <div className="informations">
          <div className="contact">
            <h2>Contact us</h2>
            <p>Phone number: 7708821267</p>
          </div>
          <div className="contact">
            <h2>Location</h2>
            <p>
              28 logamuthu mariamman kovil street, muthialpet,
              <br /> Puducherry 605003
            </p>
          </div>
          <div className="contact">
            <h2>Eamil Address</h2>
            <a href="mailto:info@end2endarch.com" className="email">
              {" "}
              info@end2endarch.in{" "}
            </a>
          </div>
        </div>
        <div className="informations">
          <div className="contact">
            <h2>Follow us on:</h2>
            <div className="socials">
              <a
                href="https://www.instagram.com/end2end_architecture/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../assets/insta.png")}
                  alt="Instagram"
                  className="social-icon"
                />
              </a>
              <a
                href="https://www.facebook.com/end2end.architecture"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../assets/facebook.png")}
                  alt="Facebook"
                  className="social-icon" 
                />
              </a>
              <a
                href="https://www.facebook.com/end2end.architecture"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../assets/whatsapp.png")}
                  alt="Whatapp"
                  className="social-icon"
                />
              </a>
            </div>
            <p className="copyright">
              © End to End Architecture | All Rights Reserved | Developed and managed by <a className="brandore" target="_blank" style={{textDecoration: "none",color:"white"}} href="https://brandore.in/"> Brandore </a> 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
