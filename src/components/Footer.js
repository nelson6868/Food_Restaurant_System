import React from 'react'
import './components.css';
import FooterLogo from '../image/logo.JPG';

import './Style.css';

export default function Footer(){
    return(

     
        <footer>
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__col1">
              <div className="footer__logo">
             
              </div>
              <p className="footer__desc">
              <a href="#home" className="footer__logo"> 
                <img  src={FooterLogo} alt="" />
                </a>
              </p>
              <div className="footer__socials">
              
               
              </div>
            </div>
            
            <div className="footer__col3">
              <h3 className="footer__text__title">
                Support
              </h3>
    
             
              <ul className="footer__text">
                <li>
                  <a href="#">Company</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                    <a href="#">Contact Us</a>
                  </li>
              </ul>
            </div>
            <div className="footer__col4">
              <h3 className="footer__text__title">
                Contact
              </h3>
            
              <ol className="footer__text">
                <li>
                  <a href="#">Service</a>
                </li>
                <li>
                  <a href="#">FAGS</a>
                </li>
                <li>
                  <a href="#">Our Menu</a>
                </li>
              </ol>
            </div>
          </div>
          </div>
      </footer>

      
    );
}
