import React from "react";
import { Link } from "react-router-dom";


export default function Header(){
    return(
        <div className="header">
        <header>
            <a href="/home"><img src={process.env.PUBLIC_URL +"/images/TinRooflogo.png"} alt="tinroof logo" width="200px" className="header-logo"/>
            </a>
            <nav className="header-nav">
            <a href="tel:+254791638252">
            <img src={process.env.PUBLIC_URL + "/images/phone.png"} width="20px" alt="phonelogo" />
            </a>
            <a href="mailto:eat@tinroof.cafe">
            <img src={process.env.PUBLIC_URL + "/images/mail.png"} width="30px" alt="maillogo" />
            </a>
            <a href="https://www.facebook.com/TinRoofCafe/">
            <img src={process.env.PUBLIC_URL + "/images/facebooklogo.png"} width="20px" alt="facebooklogo" />
            </a>
            <a href="https://www.instagram.com/tinroof.cafes">
             <img src={process.env.PUBLIC_URL + "/images/instagramlogo.png"} width="20px" alt="instagramlogo" />
            </a>
        </nav>
        </header>
         <nav className="header-links"> 
               <Link to="/home"></Link>
                <Link to="/about">ABOUT US</Link>
                <Link to="/menu">OUR MENU</Link>
                <Link to="/press">IN THE PRESS</Link>  
                <Link to="/contact">CONTACT</Link>
                </nav>
    </div>
    )
}
