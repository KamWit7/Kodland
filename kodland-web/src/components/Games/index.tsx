import React from "react"
import photo from "./../../assets/photo.jpg"
import bgGrid from "./../../assets/bgGrid.png"

const Games = () => {
  return (
    <section className="wrapper">
      <div
        className="game"
        style={{
          backgroundImage: `url(${bgGrid})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repet",
          backgroundPosition: "center center",
        }}
      >
        <div>
          <h2>Rules of the game</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            perspiciatis, earum possimus commodi iste optio, magnam fugit ad
            eveniet aut sit corrupti! Dolorum quis culpa quos inventore magnam
            autem cumque.
          </p>
        </div>
        <img src={photo} alt="photo" />
      </div>
    </section>
  )
}

export default Games
