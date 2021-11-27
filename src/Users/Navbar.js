import React from 'react';
import './Navbar.css'
const NavBar = () =>{
    return(

   
    <nav className='nav'>
            
        <img src='https://avatars.githubusercontent.com/u/49450247?v=4'
            width='50'
            height='50'
            alt='profile'
            className='eikona'
        />
        <h3 className='usern'>Username</h3>
        <a className='ak' href='#'>Search for other user</a>
      
    </nav>
 
    );
}
export default NavBar;
