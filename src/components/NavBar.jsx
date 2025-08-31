import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import './NavBar.css'

 const NavBar = () => {
  const [menu, setMenu] = useState(false);
    useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) { // Add the 'shrink' class after scrolling 50px
        navbar.classList.add('shrink');
      } else { // Remove the 'shrink' class when at the top
        navbar.classList.remove('shrink');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    
<nav className='navbar'>
  <div className="nav-links">
    <p className='menuitems'><Link to='/'>Home</Link></p>
    <p className='menuitems'><HashLink smooth to='/#aboutsection'>About</HashLink></p>
    <p className='menuitems'><HashLink smooth to='/#productlist'>Products</HashLink></p>
    <p>
      <Link to = '/Cart'><img className='menuitems' src="/images/cart.svg" alt="Cart"/></Link>
    </p>
  </div>
<p className='hamburger' onClick={() => setMenu(!menu)}>&#9783;</p>

{menu && (
  <div 
    className='menu-overlay' 
    onClick={() => setMenu(false)} // click outside to close
  >
    <div 
      className='menu-content' 
      onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside menu
      >

      <p onClick={() => setMenu(false)}>
        <Link to='/'>Home</Link>
        </p>
      <p onClick={() => setMenu(false)}>
        <HashLink smooth to='/#aboutsection'>About</HashLink>
        </p>
      <p onClick={() => setMenu(false)}>
        <HashLink smooth to='/#productlist'>Products</HashLink>
        </p>
      <p onClick={() => setMenu(false)}>
        <Link to='/Cart'><img src="/images/cart.svg" alt="Cart" className="cart-icon" /></Link>
        </p>
    </div>
  </div>
)}
</nav>
   
  )
}
export default NavBar;
