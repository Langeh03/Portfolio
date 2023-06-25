import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './portfolio.css'
import pic1 from '../../assets/1.jpg'
import pic2 from '../../assets/2.jpg'
import pic3 from '../../assets/3.jpg'
import pic4 from '../../assets/4.jpg'

export const Portfolio = () => {
  const[data, setData] = useState([]);
  useEffect(() => {
    axios
    .get("https://erin-tasty-donkey.cyclic.app/api/portfolio")
      .then(res=> {
        const formmatedData = res.data.data.map(item => ({
          id:item._id,
          image:item.image,
          title:item.title,
          github:item.github,
          demo:item.demo,
        }))
        console.log(`Here i am: ${formmatedData}`);
        setData(formmatedData);
      }).catch(error=> {
        console.log("Error fteching the portfolio data", error)
      });
  },[])
  const[data1, setData1] = useState([]);
  useEffect(() => {
    axios
    .get("https://erin-tasty-donkey.cyclic.app/api/comingSoon")
      .then(res=> {
        const formmatedData = res.data.data.map(item => ({
          id:item._id,
          image:item.image,
          title:item.title,
        }))
        console.log(`Here i am: ${formmatedData}`);
        setData1(formmatedData);
      }).catch(error=> {
        console.log("Error fteching the portfolio data", error)
      });
  },[])
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div class="container portfolio__container">
        <div className="finished">
        {
              data.map(({ id, image, title, github, demo }) => (
              <article key={id} className="portfolio__item">
              <div className="portfolio__item__image">
              <img src={image} alt="one" />
              </div> 
              <h3>{title}</h3> 
              <div className="portfolio__item__cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
              </article>
              ))
            }
        </div>
        <div className="coming__soon">
          <h2>Coming Soon</h2>
          <section>
          {
              data1.map(({ id, image, title}) => (
              <article key={id} className="portfolio__item">
              <div className="portfolio__item__image">
              <img src={image} alt="one" />
              </div> 
              <h3>{title}</h3>
              </article>
              ))
            }
          </section>
        </div>
      </div>
    </section>
  )
}

export default Portfolio