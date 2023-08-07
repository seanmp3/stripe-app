import React from "react"
import "../styles/Sidebar.css"
import {FaTimes} from "react-icons/fa"
import {useGlobalContext} from "../utilities/context"
import sublinks from "../data"

const Sidebar = () => {
  const {isSidebarOpen, closeSidebar} = useGlobalContext()
  return (
    <div className={`${
      isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
    }`}>
      <aside className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {/*<article> Products sidebar
            <h4>{sublinks[0].page}</h4>
            <div className="sidebar-sublinks">
              {sublinks[0].links.map((link, index) => {
                const {url, icon, label} = link
                return (
                  <a key={index} href={url}>
                    {icon}
                    {label}
                  </a>
                )
              })}
            </div>
          </article>*/}
          {sublinks.map((item, index) => { 
            {/* will add in slice method to sublink, as first sublink has different format of data than the rest */}
            const {links, page} = item
            return (
              <article>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link, index) => {
                    const {url, icon, label} = link
                    return (
                      <a key={index} href={url}>
                        {icon}
                        {label}
                      </a>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </aside>
    </div>
  )
}

export default Sidebar
