import React from 'react'
import './services.css'
import {FaConnectdevelop} from 'react-icons/fa'
import {SiSpeedtest} from 'react-icons/si'
import {SiTorbrowser} from 'react-icons/si'
import {HiPresentationChartLine} from 'react-icons/hi'

export const Services = () => {
  return (
    <section id="services">
      <h5>What i offer</h5>
      <h2>Services</h2>
      <div class="container services__container">
        <article className='services__option'>
          <HiPresentationChartLine className='services__option__icon'/>
          <h4>Optimization web presentation</h4>
        </article>
        <article className='services__option'>
          <FaConnectdevelop className='services__option__icon'/>
          <h4>Client-side development with HTML, CSS, JavaScript</h4>
        </article>
        <article className='services__option'>
          <SiSpeedtest className='services__option__icon'/>
          <h4>Test website for usability</h4>
        </article>
        <article className='services__option'>
          <SiTorbrowser className='services__option__icon'/>
          <h4>Ensure browser compatibility</h4>
        </article>
      </div>
    </section>
  )
}

export default Services