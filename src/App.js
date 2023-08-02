import React from "react"

import FrontPage from "./components/FrontPage"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Submenu from "./components/Submenu"

import './App.css'

function App() {
  return (
    <>
      <Navbar />
      {/*<Sidebar />*/}
      <FrontPage />
      {/*<Submenu />*/}
    </>
  )
}

export default App
