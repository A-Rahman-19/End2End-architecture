import '../Styles/home.css';
import Header from "../Components/header"
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"

function Home() {
    return (
        <>
         <div className="home-lnd-img ">
        <Header/>
        <div className="home-content">
        <h2>End To End</h2>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
</p>
</div>
      </div>

      <div className='content-container'>
        <div className='home-heading'>
            INTERIOR DESIGN & <br/> ARCHITECTURE
        </div>
{/* About section */}
<div className="about-section">
  <div className="about-image"></div>
  <div className="about-content">
    <h2>Who We Are</h2>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
      industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing
      and typesetting industry. 
    </p>
  </div>
</div>


{/* what we do section */}
<div className="what-we-do-section">
  <div className="what-we-do-left">
    <h2>What We Do</h2>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
      industry's standard dummy text ever since the 1500s<br /><br />
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
      industry's standard dummy text ever since the 1500s
    </p>
  </div>
  
  <div className="what-we-do-right">
    <div className="service-card">
      <div className="icon"><img className='servide-card-img' src={img4}/> Fast Building</div>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
    </div>
    <div className="service-card">
      <div className="icon"><img className='servide-card-img' src={img3}/> Smartly Execute</div>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
    </div>
    <div className="service-card">
      <div className="icon"><img className='servide-card-img' src={img1}/> Carefully Planned</div>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
    </div>
    <div className="service-card">
      <div className="icon"><img className='servide-card-img' src={img2}/> Perfect Design</div>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
    </div>
  </div>
</div>

{/* review section */}
   <div className='review'>
            Reviews
        </div>
      </div>
      </>
    );
}

export default Home;