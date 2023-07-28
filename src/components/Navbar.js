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
        <div className="nav-header">
          <img src={logo}/>
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
        </div>
        <div className="btn-container">
          {/*Contact Button*/}
          <button className="btn signin-btn">
            Sign In
            {/*Arrow Svg*/}
          </button>
          <button className="btn fabars-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
