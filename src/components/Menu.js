import React from 'react'

export default function Menu() {
  return (
    <div className='menu'>
      <a href="https://www.tinroof.cafe/s/Food-Drinks-23.pdf"><img src={process.env.PUBLIC_URL + "../images/samplemenu.png"}></img></a>
      <a href="https://www.tinroof.cafe/s/Food-Drinks-23.pdf"><button type="button">CLICK HERE</button></a>
    </div>
  )
}
