import '../Styles/header.css';

function Header() {
  return (
    <div className="nav">
      <img
        src={require("../assets/End2Endlogo.png")}
        alt="Company logo"
        className="header-logo"
      />
      <ul className="nav-as">
        <li><a href="/" className="as skills-a">Home</a></li>
        <li><a href="/architecture" className="as contact-a">Architecture</a></li>
        <li><a href="/interior-design" className="as contact-a">Interior Design</a></li>
        <li><a href="/portfolio" className="as contact-a">Portfolio</a></li>
      </ul>
    </div>
  );
}

export default Header;
