import React from 'react'
import floating from '../image/floating-foodimg.JPG';
import './Style.css';

export default function Sub_Meanu(props){

   return(
    <section className="home" id="home">
     <div className="content">
        <h3>Delicious Meals at</h3>
        <h3>Your Convenience</h3>
        <p>Order your meals from us and we will have it</p>
        <p>delivered at your doorstep</p>
        <a href="#home" className="btn">Get Started</a>
     </div>

     <div className="image">
       
        <img className='logo' src={floating} alt="" />
     </div>

  </section>
  

   );
}