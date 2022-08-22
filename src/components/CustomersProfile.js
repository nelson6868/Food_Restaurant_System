import React from 'react';
import './Style.css';
import Profile from '../image/Profile.JPG';

export default function CustomersProfile (props){

   return(
    <section className="homesec" id="home">
    <div className="contentsec">
       <h3>What Our</h3>
       <h3>Customers Say</h3>
       <h3>about us</h3>
       <p>Order your meals from us and we will have it</p>
       <p>delivered at your doorstep</p>
       <a href="#home" className="btn">Get Started</a>
    </div>

    <div className="imagesec">
    <img  src={ Profile} alt="" /><br/>
       <span className="content">Ekwom Nelson</span><br/>
       <span className="content">Software Developer</span>
       <p className="content">We have more evidence of such "survivals" from the high Middle Ages </p>
       <p className="content"> than from earlier centuries, simply because more documentation </p>
        <p className="content"> of all kinds is scarce for the early medieval period. Thus, for </p>
        <p className="content"> example, we have more</p>
      
     
     
   
    </div>

 </section>

   );
}