import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <nav>
            <div className='nav_bar_image_container'>
                <img src="https://cdn.shortpixel.ai/spai/ret_img/https://www.apptio.com/wp-content/uploads/apptio-logo-svg.svg" alt=""/>
            </div>
            <div className='nav_bar_link_container'>
                <NavLink to="">Solutions</NavLink>
                <NavLink to="">Products</NavLink>
                <NavLink to="">Resources</NavLink>
                <NavLink to="">Company</NavLink>
                <NavLink to="">Get Started</NavLink>
                <NavLink to=""><i class="fa-solid fa-magnifying-glass"></i>Search</NavLink>
            </div>
        </nav>
    </div>
  )
}

export default NavBar