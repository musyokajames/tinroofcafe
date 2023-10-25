import React from 'react'

export default function About() {
  return (
    <div className='about'>
      {/* <img className="about-mainimg"src={process.env.PUBLIC_URL + "/images/TRC.jpg"} alt="trc" /> */}
      <div className='aboutmainimg'></div>
      <h3 className='heading'>ABOUT US</h3>
      <img className="leaves"src={process.env.PUBLIC_URL + "/images/leaves2.png"}  alt="leaves2"/>
      <div>
      <div className='img-container'>
      <img src={process.env.PUBLIC_URL + "/images/garden.jpg"} alt="garden" />
      <img src={process.env.PUBLIC_URL + "/images/BulgarSquashFeta-1015-2.jpg"} alt="bulgar"/>
      <img src={process.env.PUBLIC_URL + "/images/PailsSheepskin.jpg"} alt="pailssheepskin"/>
      <img src={process.env.PUBLIC_URL + "/images/child.jpg"}  alt="child"/>
      </div>
      </div>
    <section className='about-section'>
      <h2>"A HAVEN FOR THE HEALTH CONSCIOUS"</h2>
      <p>IT ALL STARTED IN 2013 WHEN...
      We realised that Nairobi was rapidly being taken over by the shopping mall and we were losing precious green spaces to take our kids or meet friends to have lunch in the sunshine. </p>

     <p>
      We opened our first café in Karen to offer the city's residents a peaceful place to relax and refresh away from the humdrum of this fast expanding metropolis. The Tin Roof has now been dubbed "Nairobi's coolest gastro-cafés" but we like to stay humble and simply say we're just good people providing some seriously good food.
      </p>

      <p>
      Our outdoor cafés are open for breakfast and lunch and offer an impressive range of healthy salads, toasted sandwiches, burgers, pizzas and delicious sweets. We have vegan and gluten-free options in every section of our menu but we are always open to new suggestions if you can't find what you're looking for.
      </p>
      <p>
      At the Tin Roof, our philosophy is about fresh, green spaces to sit and enjoy a hearty meal so we make sure we're doing our bit for the environment too. We source locally-grown produce, avoid plastic straws, use 100% recycled takeaway boxes and deck out our cafés with upcycled furniture.
      </p>
      <p>
      We pride ourselves on bucking the trend and keeping our distance from Nairobi's malls. Here, among our quiet enclaves, we have the space to breathe and healthy meals to enjoy.
     </p> 

     <p> We are #lifeoutsidethemall.</p>
      </section>
      <div>
      <div className='img-container'> 
      <img src={process.env.PUBLIC_URL + "/images/coffee.jpg"} alt="coffee"/>
      <img src={process.env.PUBLIC_URL + "/images/croissant.jpeg"} alt="croissant"/>
      <img src={process.env.PUBLIC_URL + "/images/team.jpg"} alt="team" />
      <img src={process.env.PUBLIC_URL + "/images/milkshake.jpg"} alt="milkshake"/>
      </div>
      <button type="button">VISIT US IN LANGATA</button>
      <button type="button">VISIT US IN KAREN</button>
      <div>
      <img className='leaves' src={process.env.PUBLIC_URL + "/images/leaves.png"} alt="leaves"/>
      </div>
      <a href="www.facebook.com"><img src={process.env.PUBLIC_URL + "/images/facebooklogo.png"} width="20px" alt="facebook logo"/></a>
      <a href="www.instagram.com"><img src={process.env.PUBLIC_URL + "/images/instagramlogo.png"} width="20px" alt="intagram logo"/></a>
            
      </div>
    
    </div>
  )
}
