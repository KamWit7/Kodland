import React from "react"
import round from "./../../assets/round.png"
import square from "./../../assets/square.png"
import amongus from "./../../assets/amongus.png"

const Products = () => {
  return (
    <section className="bg_lightgreen products">
      <div className="wrapper">
        <h2>Chose Your Pop-it!</h2>
        <ul className="about_flex">
          <li>
            <img src={square} alt="square" />
            <p>Square</p>
            <div className="buy_btn">Buy</div>
          </li>
          <li>
            <img src={amongus} alt="amongus" />
            <p>Among us</p>
            <div className="buy_btn">Buy</div>
          </li>
          <li>
            <img src={round} alt="round" />
            <p>Round</p>
            <div className="buy_btn">Buy</div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Products
