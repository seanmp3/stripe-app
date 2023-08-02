import React from "react"
import "../styles/FrontPage.css"
import phoneImg from "../images/phone.svg"
import {useGlobalContext} from "../utilities/context"

const FrontPage = () => {
  const {closeSubmenu} = useGlobalContext()
  return (
    <section className="frontpage" onMouseOver={closeSubmenu}>
      <div className="frontpage-center">
        <article className="frontpage-text">
          <h1>
            Financial <br/>
            infrastructure <br/>
            for the internet
          </h1>
          <p>
            Millions of companies of all sizes-from startups to Fortune 500s-use
            Stripe's software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className="btn">Start Now</button>
          <button className="btn">Contact Sales</button>
        </article>
        <article className="frontpage-imgs">
          <img src={phoneImg} className="phone-img" alt="phone"/>
        </article>
      </div>
    </section>
  )
}

export default FrontPage
