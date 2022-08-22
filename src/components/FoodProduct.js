import React from 'react'
import Product1 from '../image/ca1.jpg';
import Product2 from '../image/Ca2.JPG';
import Product3 from '../image/ca3.jpg';
import Product4 from '../image/ca4.jpg';
import Product5 from '../image/ca5.JPG';
import Product6 from '../image/Ca6.JPG';
import './Style.css';


export default function FoodProduct (props){

   return(
    <section className="speciality" id="speciality">
    <h1 className="heading">Our <span>speciality</span></h1>
    <div className="box-container">

        <div className="box">
          
            <div className="content">
               
                <img  src={Product1} alt="" />
                <h3>Jollof Rice and Chicken</h3>
                <p>Friend Potota,yam chips with egg source or any type of your choice</p>

            </div>

        </div>

         <div className="box">
           
            <div className="content">
              
                <img  src={Product2} alt="" />
                <h3>Jollof Rice and Chicken</h3>
                <p>Friend Potota,yam chips with egg source or any type of your choice</p>

            </div>

        </div>
            

         <div className="box">
           
            <div className="content">
              
                <img  src={Product3} alt="" />
                <h3>tasty  Egusi Soup</h3>
                <p>Lorem welcom welcom weloce</p>

            </div>

        </div>

        <div className="box">
          
            <div className="content">
               
                <img  src={Product4} alt="" />
                <h3>Jollof Rice and Chicken</h3>
                <p>Friend Potota,yam chips with egg source or any type of your choice</p>


            </div>

        </div>

         <div classNam="box">
           
            <div className="content">
           
                <img  src={Product5} alt="" />
                <h3>Jollof Rice and Chicken</h3>
                <p>Friend Potota,yam chips with egg source or any type of your choice</p>

            </div>

          

          </div>
          
      

         <div className="box">
           
            <div className="content">
              
                <img  src={Product6} alt="" />
                <h3>Jollof Rice and Chicken</h3>
                <p>Friend Potota,yam chips with egg source or any type of your choice</p>


            </div>

        </div>

       

        </div>

    <div className="centerBtn">
    <a href="#home" className="btn">Get Started</a>

      </div>
  </section>
  


  

   );
}