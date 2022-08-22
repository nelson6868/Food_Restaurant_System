import React from 'react'
import logo from '../image/logo1.JPG';
import './Style.css';

export default function Header (props){

   return(
     

<header>
<img className='logo' src={logo} alt="" />
 
<div id="menu-bar" class="fas fa-bars"></div>
<nav className="navbar">
   <a href="#home">Home</a>
    <a href="#home">Menu</a>
    <a href="#home">Meal Plans</a>
    <a href="#home"><i class="fas fa-search"></i></a>
    <a href="#home"><i class="fas fa-cart"></i></a>
    <a href="#home">Sign Up</a>
   
</nav>

<a href="#/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a href="#home" className="btn">Create Account</a>
</header> 







   );
}





