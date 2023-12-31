import React from 'react';
import './Home.css';
import  Nav  from "../Navbar/Nav";
import Footer from "../Footer/Footer";
import Info from "../Info/Info";
import vector from "../assets/Vector.svg";
import orange from "../assets/orange.svg";
import spain from "../assets/spain.jpg";
import dropbox from "../assets/dropbox_blue 1.svg";
import github from "../assets/GitHub.svg";
import google from "../assets/Google.svg";
import hubspot from "../assets/HubSpot.svg";
import slack from "../assets/Slack.svg";
import stripe from "../assets/Stripe.svg";
import director from "../assets/Director.svg";
import comma from "../assets/doublecomma.svg";
import office from "../assets/office.svg";
import statistic from "../assets/statistics.svg";
import audience from "../assets/audience.svg";
import engage from "../assets/Engage.svg";

let Home = () =>{
    return (
        <div className='qwerty'>
      <Nav />

      <div className='flag-block'>

        <div className='get-touch'>
         
          <p>Get involved in of the world’s fastest growing major economies</p>
          <button>Get in Touch</button>
        </div>

        <div className='flag'>
          <img className="vector" src={vector} alt='vector' />
          <img className='orange' src={orange} alt='orange' />
          <img className='spain' src={spain} alt='spain' />
        </div>

      </div>

        <Info />

      <div className='community-container'>

        <div className='community-block'>

          <div className='community-text'>
            <p className='meet-com'>Meet our fantastic community of loyal fans</p>
            <p className='customers'>Don’t just take our word for it. See what our
              customers have to say.</p>
          </div>


          <div className='frame'>
            <img src={dropbox} alt='logo' />
            <img src={github} alt='logo' />
            <img src={google} alt='logo' />
            <img src={hubspot} alt='logo' />
            <img src={slack} alt='logo' />
            <img src={stripe} alt='logo' />
          </div>

          <div className='story-view'>

            <div className='view-text'>
              <p>View customer stories</p>
            </div>
            <div className='view-btn'>
              <button>Be Partner</button>
            </div>
          </div>
        </div>

      </div>
      
      <div className='director-container'>
        
       <img className='director-block' src={director} alt='director'/>
        

        <div className='direc-info'>
        <img src={comma} alt='comma'/>
        <p className='direc-text'>“Before 2020, we sent a few email blasts with MailChimp 
          here and there, but it wasn’t a focus. Once we shifted away
           from retail-only sales to eCommerce sales,
           driving customer awareness through email became a must-have,
            and our ESP wasn’t cutting it.”</p>
        </div>
      </div>
        
      <div className='statistic-container'>

        <div className='stat-block1'>
          <div className='stat-text'>
            <h4>Get helpful support, fast. Like really fast.</h4>
            <p>Get 24/7 rockstar support, 365 days a year. We are always happy to help!</p>
            <img src={statistic} alt='statistic' />
          </div>

          <img className="office" src={office} alt='office' />
        </div>
        
        <div className='stat-block2'>
        <img src={audience} alt='audience' />

        <div className='audience-text'>
         <img src={engage} alt='engage' />
         <h4>Grow your audience</h4>
         <p>We provide companies of all sizes and stages of
           growth with practical,
           hands-on advice and specific
           local contacts to assist with setting up 
           and growing in the Spain market</p>
        </div>

        </div>
        

        </div>

      <Footer />
    </div>
    )
}
export default Home;