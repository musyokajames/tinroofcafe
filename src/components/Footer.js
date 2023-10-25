import React from 'react';
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <div className='footer'>
        <a href="/home"><img src={process.env.PUBLIC_URL + "/images/TinRooflogo.png"} alt="tinrooflogo" width="200px" className='header-logo'/></a>
        <p className='footer-contact'><Link to ="/contact">BE IN TOUCH</Link></p>
        <a href="www.facebook.com"><img src={process.env.PUBLIC_URL + "/images/facebooklogo.png"} width="20px" alt="facebooklogo"/></a>
        <a href="www.instagram.com"><img src={process.env.PUBLIC_URL + "/images/instagramlogo.png"} width="20px" alt="intagramlogo"/></a>
        <div className='footer-details'>
            <p>KAREN & LANGATA, NAIROBI, KENYA <a href="tel:+254 (0)719 606 621 ">+254 (0)719 606 621 </a><a href="mailto:eat@tinroof.cafe">EAT@TINROOF.CAFE</a></p>
            <p className='footer-hours'>HOURS Mon 08:00 to 17:30 Tue 08:00 to 17:30 Wed 08:00 to 17:30 Thu 08:00 to 17:30 Fri 08:00 to 17:30 Sat 08:00 to 17:30 Sun 08:00 to 17:30</p>
            <p><a href="https://www.tinroof.cafe/faq">FREQUENTLY ASKED QUESTIONS</a></p>
            <p><a href="https://www.instagram.com/tinroof.cafes">#LIFEOUTSIDETHEMALL</a></p>
        </div>
        <div>
            <form className='footer-form'>
                <p>SIGN UP TO OUR CLEAN EATING NEWLSETTER.</p>
                <p>We won't bombard you with spam, it'll be far more delicious than that.</p>
                <input type="email" placeholder='Email Address'></input>
                <button className="footer-btn" type="submit">SIGN UP</button>
            </form>
        </div>
    </div>
  )
}
