import React from 'react'

export default function Press() {
  return (
    <div>
      <div className="press-img"></div>
      <div className='press-intro'>
      <h3>TIN ROOF IN THE PRESS</h3>
      <p>DON'T BELIEVE WHAT WE'RE TELLING YOU?
          HAVE A LITTLE LOOK AT WHAT OTHERS ARE SAYING ABOUT US.</p>
        <img src={process.env.PUBLIC_URL + "/images/leaves.png"} alt="leaves" className='leaves2' /> 
        </div>
        <section className='press-links'>
          <h3>Click the Pictures Below.</h3>
          <a href="https://www.lonelyplanet.com/articles/nairobi-best-cafes"><img src={process.env.PUBLIC_URL + "../images/tinroofpress.jpg"}></img></a>
          <a href="http://oshinity.com/2017/05/23/tin-roof-cafe/"><img src={process.env.PUBLIC_URL + "../images/tinroofpress2.jpg"}></img></a>
          <a href="https://www.yummy.co.ke/business-daily-hot-desk-cafes-working/"><img src={process.env.PUBLIC_URL + "../images/tinroofpress3.jpg"}></img></a>
          <a href="https://www.yummy.co.ke/chef-profile-serve-right/"><img src={process.env.PUBLIC_URL + "../images/tinroofpress4.jpg"}></img></a>

          
          </section> 
    </div>
  )
}
