import React from 'react';
import FoodMenu1 from '../image/Ca7.JPG';
import FoodMenu2 from '../image/Ca8e.JPG';
import FoodMenu3 from '../image/Ca9.JPG';

import './Style.css';



 export default function FoodMenu (props){

 return(
    <div>
           
           <section className="popular" id="popular">
        <h1 className="heading"> Blog<span>Our Latest</span>News</h1>
        <p  className="headingtext">Have you ever browsed food blogs like mine and wondered</p>
        <p  className="headingtext">how tostart a food blog of your very own?</p>
        <div className="box-container">
            <div className="box">
               
              
                <img  src={FoodMenu1} alt="" />
                
                <h1 className="headingDesign"><span>Design  </span>01 october 2019</h1>
                <div className="box">
                    <h3 className="content">Better Then Takeout kung pao Chicken</h3>
                    <i className="content">This spicy,tangy, and sweet better than takout</i><br/>
                    <i className="content">This spicy,tangy, and sweet better than takout</i>
                    <h2  style={{color:"red", marginRight: "5rem"}}>READ MORE</h2>
                  

                </div>
           
            </div>
          
                <div className="box">
                  
                <img  src={FoodMenu2} alt="" />
                    <h1 className="headingDesign"><span>Design  </span>01 october 2019</h1>
                    <div class="box">
                        <h3 className="content">Better Then Takeout kung pao Chicken</h3>
                        <i className="content">This spicy,tangy, and sweet better than takout</i><br/>
                        <i className="content">This spicy,tangy, and sweet better than takout</i>
                        <h2  style={{color:"red", marginRight: "5rem"}}>READ MORE</h2>
    
                    </div>
                 
                </div>

           
                <div className="box">
                  
                <img  src={FoodMenu3} alt="" />
                    <h1 className="headingDesign"><span>Design  </span>01 october 2019</h1>
                    <div className="box">
                        <h3 className="content">Better Then Takeout kung pao Chicken</h3>
                        <i className="content">This spicy,tangy, and sweet better than takout</i><br/>
                        <i className="content">This spicy,tangy, and sweet better than takout</i><br/>
                          <h2  style={{color:"red", marginRight: "5rem"}}>READ MORE</h2>
                          
                          
                    </div>
                   
                </div>
               
        </div>
    </section>
    </div>
    

   
   );
}