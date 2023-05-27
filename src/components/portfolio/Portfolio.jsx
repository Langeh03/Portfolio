import React from 'react'
import './portfolio.css'
import pic1 from '../../assets/1.png'
import pic2 from '../../assets/2.png'
import pic3 from '../../assets/3.png'
import pic4 from '../../assets/4.png'
import pic5 from '../../assets/5.png'
import pic6 from '../../assets/6.png'
import pic7 from '../../assets/7.png'
import pic8 from '../../assets/8.png'
import pic9 from '../../assets/9.png'

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div class="container portfolio__container">
        <article class="portfolio__item">
          <div class="portfolio__item__image">
            <img src={pic1} alt=" one" class="portImage"/>
          </div>
          <h3> Project 1 </h3>
          <div class="portfolio__item__cta">
            <a href="https://github.com" class="btn" target="_blank" rel="noreferrer">Github</a>
            <a href="https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design" class="btn btn-primary" target="blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article class="portfolio__item">
          <div class="portfolio__item__image">
            <img src={pic2} alt=" one" class="portImage"/>
          </div>
          <h3> Project 2 </h3>
          <div class="portfolio__item__cta">
            <a href="https://github.com" class="btn" target="_blank" rel="noreferrer">Github</a>
            <a href="https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design" class="btn btn-primary" target="blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article class="portfolio__item">
          <div class="portfolio__item__image">
            <img src={pic3} alt=" one" class="portImage"/>
          </div>
          <h3> Project 3 </h3>
          <div class="portfolio__item__cta">
            <a href="https://github.com" class="btn" target="_blank" rel="noreferrer">Github</a>
            <a href="https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design" class="btn btn-primary" target="blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article class="portfolio__item">
          <div class="portfolio__item__image">
            <img src={pic4} alt=" one" class="portImage"/>
          </div>
          <h3> Project 4 </h3>
          <div class="portfolio__item__cta">
            <a href="https://github.com" class="btn" target="_blank" rel="noreferrer">Github</a>
            <a href="https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design" class="btn btn-primary" target="blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article class="portfolio__item">
          <div class="portfolio__item__image">
            <img src={pic5} alt=" one" class="portImage"/>
          </div>
          <h3> Project 5 </h3>
          <div class="portfolio__item__cta">
            <a href="https://github.com" class="btn" target="_blank" rel="noreferrer">Github</a>
            <a href="https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design" class="btn btn-primary" target="blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article class="portfolio__item">
          <div class="portfolio__item__image">
            <img src={pic6} alt=" one" class="portImage"/>
          </div>
          <h3> Project 6 </h3>
          <div class="portfolio__item__cta">
            <a href="https://github.com" class="btn" target="_blank" rel="noreferrer">Github</a>
            <a href="https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design" class="btn btn-primary" target="blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article class="portfolio__item">
          <div class="portfolio__item__image">
            <img src={pic7} alt=" one" class="portImage"/>
          </div>
          <h3> Project 7 </h3>
          <div class="portfolio__item__cta">
            <a href="https://github.com" class="btn" target="_blank" rel="noreferrer">Github</a>
            <a href="https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design" class="btn btn-primary" target="blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article class="portfolio__item">
          <div class="portfolio__item__image">
            <img src={pic8} alt=" one" class="portImage"/>
          </div>
          <h3> Project 8 </h3>
          <div class="portfolio__item__cta">
            <a href="https://github.com" class="btn" target="_blank" rel="noreferrer">Github</a>
            <a href="https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design" class="btn btn-primary" target="blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article class="portfolio__item">
          <div class="portfolio__item__image">
            <img src={pic9} alt=" one" class="portImage"/>
          </div>
          <h3> Project 9 </h3>
          <div class="portfolio__item__cta">
            <a href="https://github.com" class="btn" target="_blank" rel="noreferrer">Github</a>
            <a href="https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design" class="btn btn-primary" target="blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio