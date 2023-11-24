import React from "react"
import Header from "../Header"
import bg2 from "./../../assets/background2.png"

const HomePage = () => {
  return (
    <section
      className="home_page_section"
      style={{
        backgroundImage: `url(${bg2})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repet",
        backgroundPosition: "center center",
      }}
    >
      <Header />
      <div className="wrapper home_page bg_red">
        <h1>POP IT!</h1>
        <p>Best Antistress Toy is the Endless toy bubble wrap!</p>
        <div className="home_page_btn">BUY</div>
      </div>
    </section>
  )
}

export default HomePage
