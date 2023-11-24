import React, { useState } from "react"

const Header = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <header>
      <div className="flex wrapper">
        <div>NOT_A_BUBBLE.COM</div>
        <ul className="flex header_list flex_gap_min">
          <li>ABOUT</li>
          <li>SALE</li>
          <li>CONTACTS</li>
        </ul>

        <div className="mobile" onClick={() => setOpen(true)}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {isOpen && (
          <div className="modal">
            <ul>
              <li>ABOUT</li>
              <li>SALE</li>
              <li>CONTACTS</li>
            </ul>

            <div onClick={() => setOpen(false)}>X</div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
