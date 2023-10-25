import React from 'react'

function Home() {
  return (
    <div>
      <div className='salad'></div>
      <div className='home-welcome'>
      <img src={process.env.PUBLIC_URL + "/images/leaves.png"} alt="leaves" className='leaves'/>
      <h2>WELCOME TO TIN ROOF CAFÉS</h2>
      <h5>FRESH FOOD IN FRESH AIR</h5>
      <p>Our boutique, outdoor cafés offer a healthy range of salads, sandwiches and smoothies. We like life away from malls because we prefer quiet, green spaces.</p>
      <p>THIS IS <a href="https://www.instagram.com/tinroof.cafes/">#LIFEOUTSIDETHEMALL</a></p>
      <a href="https://www.tripadvisor.co.uk/Restaurant_Review-g294207-d5561344-Reviews-Tin_Roof_Cafe-Nairobi.html"><img src={process.env.PUBLIC_URL + "/images/tripadvisor-logo.png"} alt="tripadvisorlogo" width="200px" /></a>
      <br></br>
      <a href="https://www.facebook.com"><img src={process.env.PUBLIC_URL + "/images/facebooklogo.png"} width="20px" alt="facebooklogo"/></a>
      <a href="https://www.instagram.com"><img src={process.env.PUBLIC_URL + "/images/instagramlogo.png"} width="20px" alt="instagramlogo"/></a>
      </div>
      <section className='home-container'>
        <div className='home-section'>
        <img src={process.env.PUBLIC_URL + "/images/Karen.jpg"} alt="Karen"/>
        <h4>TIN ROOF CAFÉ KAREN</h4>
        <p>An oasis of lush surroundings in the centre of Karen's hub, escape to our gardens and relax under our care while we serve you delicious and healthy treats. With locally roasted coffee, the freshest of ingredients and smiles all round, this is the perfect spot to unwind in Nairobi's busiest suburb.</p>
        <button type="button">VISIT US IN KAREN</button>
        </div>
        <div className='home-section'>
        <img src={process.env.PUBLIC_URL + "/images/Langata.jpg"} alt="Langata"/>
        <h4>TIN ROOF CAFÉ LANGATA</h4>
        <p>Located in the heart of Langata at the Langata Link shops, meet up with friends and family on our outdoor terrace and enjoy a laid-back meal crafted with fresh produce and a passion for food. With a kids' playground, charming setting and team of friendly staff, this is a popular choice for all.</p>
        <button type="button">VISIT US IN LANGATA</button>
        </div>
      </section>
      {/* <img src={process.env.PUBLIC_URL + "/images/Roses.jpeg"} width="1000px" alt="Roses"/> */}
      <div className='roses'></div>
      <div className="experiences">
      <img src={process.env.PUBLIC_URL + "/images/leaves.png"} width="100px" alt="leaves" className='leaves2'/>
      <h3>THE TIN ROOF CAFÉ EXPERIENCE</h3>
      <p>Join our food revolution that offers you a peaceful, outdoor space to eat deliciously healthy meals and snacks.

      From superfood salads, juicy burgers, fresh wraps & sandwiches, there is a variety of mouth-watering goodness to try. Here's a little taster...</p>
      <img src={process.env.PUBLIC_URL + "/images/samplemenu.png"} width="100px" alt="samplemenu" className='samplemenu'/>
      </div>
      <div className='btns'>
        <a href="https://www.tinroof.cafe/s/Food-Drinks-23.pdf"><button type="button">VIEW OUR FULL MENU</button></a>
      <button type="button">CONTACT US TO BOOK</button>
      </div>
      <div className='home-images'><img src={process.env.PUBLIC_URL + "/images/burger.jpg"} width="200px" alt="burger"/>
      <img src={process.env.PUBLIC_URL + "/images/kidsonswing.jpg"} width="200px" alt="kidsonsnow"/>
      <img src={process.env.PUBLIC_URL + "/images/chickens.jpg"} width="200px" alt="chickens"/>
      </div>
      
    </div>
  )
}

export default Home