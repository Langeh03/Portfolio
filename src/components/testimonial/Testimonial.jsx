import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/pagination'
import './testimonial.css'

export const Testimonial = () => {
  const[data, setData] = useState([]);

    useEffect(() => {
      axios
        .get("https://erin-tasty-donkey.cyclic.app/api/testimonial")
        .then((response) => {
          const formattedData = response.data.data.map((item) => ({
            id: item._id,
            avatar: item.avatar,
            name: item.name,
            review: item.review,
          }));
          setData(formattedData);
        })
        .catch((error) => {
          console.log("error fetching portfolio data:", error);
        });
    }, []);
  return (
    
    <section id="experience">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>
      <div class="container testimonials__container">
        <div class="swiper-wrapper">
          {
            data.map(({ id, avatar, name, review }) => (
              <div key={id} class="swiper-slide testimonial">
              <div class="client__avatar">
                <img src={avatar} alt="client avatar"/>
              </div>
              <h5 class="client__name"> {name}</h5>
              <small class="client__review"> {review} 
              </small>
            </div>
         ))} 
        </div>
      </div>
    </section>
  )
}

export default Testimonial