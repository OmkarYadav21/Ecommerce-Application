import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import './About.css'
import bg from '../../components/banners/images/1.jpg'
import Feature from '../../components/feature/Features'
const About = () => {
  return (
    <>
    <Navbar/>
    <div className='about-us'>
      <div className="mask-black">
            <h1>#know us</h1>
            <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, quibusdam.</h4>
      </div>
    </div>
    <div class="about-card">
    <img src={bg} alt="Card Image"/>
    <div class="about-content">
      <div class="about-title">Who we are ?</div>
    <div class="about-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate repudiandae eligendi est consectetur et at praesentium, consequuntur sequi, assumenda rerum fugit sapiente provident asperiores quaerat veritatis dolorem maxime officiis ab? Consectetur iste hic illum totam perferendis quas eveniet beatae accusantium doloribus labore! Debitis, esse! Voluptas dolorem sint rerum maiores necessitatibus dolores minima officia molestiae in quo facilis, excepturi aliquam tempore eos nam impedit quaerat facere hic illo ea libero? Corporis vero molestias earum magnam! Culpa id dolorem reiciendis eaque repellat blanditiis cumque dolores laboriosam ducimus sed quos aspernatur odio in accusamus corporis, modi laudantium architecto rem eligendi saepe nihil magnam?</div>
    </div>
    </div>
    <Feature/>
    <Footer/>
    </>
  )
}

export default About
