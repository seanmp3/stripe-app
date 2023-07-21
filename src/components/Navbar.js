import React from "react"
import "../styles/Navbar.css"
import logo from "../images/logo.svg"
import {FaBars} from "react-icons/fa"
import {useGlobalContext} from "../utilities/context"

const Navbar = () => {
  const {openSidebar, openSubmenu, closeSubmenu} = useGlobalContext()
  
  const displaySubmenu = e => {
    //
  }

  const handleSubmenu = e => {
    //
  }

  return (
    <nav onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <img src={logo}/>
        <button className="btn fabars-btn" onClick={openSidebar}>
          <FaBars />
        </button>
      </div>
      <ul className="nav-links">
        <li>
          <button className="link-btn" onMouseOver={displaySubmenu}>
            Products
          </button>
        </li>
        <li>
          <button className="link-btn" onMouseOver={displaySubmenu}>
            Solutions
          </button>
        </li>
        <li>
          <button className="link-btn" onMouseOver={displaySubmenu}>
            Developers
          </button>
        </li>
        <li>
          <button className="link-btn" onMouseOver={displaySubmenu}>
            Resources
          </button>
        </li>
        <li>
          <button className="link-btn" onMouseOver={displaySubmenu}>
            Pricing
          </button>
        </li>
      </ul>
      <button className="btn signin-btn">Sign In</button>
    </nav>
  )
}

export default Navbar
