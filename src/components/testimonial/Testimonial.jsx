import React from 'react'
import './testimonial.css'
import testi1 from '../../assets/testi1.jpg'
import testi2 from '../../assets/testi2.jpg'
import testi3 from '../../assets/testi3.jpg'

export const Testimonial = () => {
  return (
    <section id="experience">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>
      <div class="container testimonials__container">
        <div class="swiper-wrapper">
          <div class="swiper-slide testimonial">
            <div class="client__avatar">
              <img src={testi1} alt="client avatar"/>
            </div>
            <h5 class="client__name"> Client 1 </h5>
            <small class="client__review"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus est, consequatur illum ullam numquam voluptate necessitatibus sequi quidem obcaecati! Veritatis repellendus provident neque. Porro, id illum iure soluta vel alias, maiores tempora doloremque vitae neque maxime at, facilis ipsum molestiae dicta quasi harum optio atque deserunt quis amet consectetur perspiciatis. 
            </small>
          </div>
          <div class="swiper-slide testimonial">
            <div class="client__avatar">
              <img src={testi2} alt="client avatar"/>
            </div>
            <h5 class="client__name"> Client 2 </h5>
            <small class="client__review"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus est, consequatur illum ullam numquam voluptate necessitatibus sequi quidem obcaecati! Veritatis repellendus provident neque. Porro, id illum iure soluta vel alias, maiores tempora doloremque vitae neque maxime at, facilis ipsum molestiae dicta quasi harum optio atque deserunt quis amet consectetur perspiciatis. 
            </small>
          </div>
          <div class="swiper-slide testimonial">
            <div class="client__avatar">
              <img src={testi3} alt="client avatar"/>
            </div>
            <h5 class="client__name"> Client 3 </h5>
            <small class="client__review"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus est, consequatur illum ullam numquam voluptate necessitatibus sequi quidem obcaecati! Veritatis repellendus provident neque. Porro, id illum iure soluta vel alias, maiores tempora doloremque vitae neque maxime at, facilis ipsum molestiae dicta quasi harum optio atque deserunt quis amet consectetur perspiciatis. 
            </small>
          </div>
          <div class="swiper-slide testimonial">
            <div class="client__avatar">
              <img src={testi2} alt="client avatar"/>
            </div>
            <h5 class="client__name"> Client 4 </h5>
            <small class="client__review"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus est, consequatur illum ullam numquam voluptate necessitatibus sequi quidem obcaecati! Veritatis repellendus provident neque. Porro, id illum iure soluta vel alias, maiores tempora doloremque vitae neque maxime at, facilis ipsum molestiae dicta quasi harum optio atque deserunt quis amet consectetur perspiciatis. 
            </small>
          </div>
          <div class="swiper-slide testimonial">
            <div class="client__avatar">
              <img src={testi1} alt="client avatar"/>
            </div>
            <h5 class="client__name"> Client 1 </h5>
            <small class="client__review"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus est, consequatur illum ullam numquam voluptate necessitatibus sequi quidem obcaecati! Veritatis repellendus provident neque. Porro, id illum iure soluta vel alias, maiores tempora doloremque vitae neque maxime at, facilis ipsum molestiae dicta quasi harum optio atque deserunt quis amet consectetur perspiciatis. 
            </small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial