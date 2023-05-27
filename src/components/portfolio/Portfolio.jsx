import React from 'react'
import './portfolio.css'
import pic1 from '../../assets/1.jpg'
import pic2 from '../../assets/2.jpg'
import pic3 from '../../assets/3.jpg'
import pic4 from '../../assets/4.jpg'

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div class="container portfolio__container">
        <div className="finished">
          <article class="portfolio__item">
            <div class="portfolio__item__image">
              <img src={pic1} alt=" one" class="portImage"/>
            </div>
            <h3> Testla Home page </h3>
            <div class="portfolio__item__cta">
              <a href="https://github.com" class="btn" target="_blank" rel="noreferrer">Github</a>
              <a href="https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design" class="btn btn-primary" target="blank" rel="noreferrer">Live Demo</a>
            </div>
          </article>
          <article class="portfolio__item">
            <div class="portfolio__item__image">
              <img src={pic2} alt=" one" class="portImage"/>
            </div>
            <h3> Jordan Home page </h3>
            <div class="portfolio__item__cta">
              <a href="https://github.com" class="btn" target="_blank" rel="noreferrer">Github</a>
              <a href="https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design" class="btn btn-primary" target="blank" rel="noreferrer">Live Demo</a>
            </div>
          </article>
        </div>
        <div className="coming__soon">
          <h2>Coming Soon</h2>
          <section>
            <article class="portfolio__item">
              <div class="portfolio__item__image">
                <img src={pic3} alt=" one" class="portImage"/>
              </div>
              <h3> Cisco Home page<br/>Responsive </h3>
              <div class="portfolio__item__cta">
                <a href="https://github.com" class="btn" target="_blank" rel="noreferrer">Github</a>
                <a href="https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design" class="btn btn-primary" target="blank" rel="noreferrer">Live Demo</a>
              </div>
            </article>
            <article class="portfolio__item">
              <div class="portfolio__item__image">
                <img src={pic4} alt=" one" class="portImage"/>
              </div>
              <h3> Lamborghini Home page<br/>Responsive </h3>
              <div class="portfolio__item__cta">
                <a href="https://github.com" class="btn" target="_blank" rel="noreferrer">Github</a>
                <a href="https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design" class="btn btn-primary" target="blank" rel="noreferrer">Live Demo</a>
              </div>
            </article>
          </section>
        </div>
      </div>
    </section>
  )
}

export default Portfolio