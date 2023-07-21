import React from "react"
import phoneImg from "../images/phone.svg"
import {useGlobalContext} from "../utilities/context"

const FrontPage = () => {
  const data = useGlobalContext()
  console.log(data)
  return <h2></h2>
}

export default FrontPage
