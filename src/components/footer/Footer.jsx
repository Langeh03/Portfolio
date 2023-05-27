import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {CgTwitter} from 'react-icons/cg'

export const Footer = () => {
  return (
    <div class="footer__container">
      <a href="#" class="footer__logo">Langeh Mohammed Yieneh</a>
      <ul class="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div class="footer__media">
        <a href="https://linkedin.com" target="blank"><BsLinkedin/></a>
        <a href="https://github.com" target="blank"><FaGithub/></a>
        <a href="https://facebook.com" target="blank"><FaFacebookF/></a>
        <a href="https://twitter.com" target="blank"><CgTwitter/></a>
      </div>
      <div class="copyRight"><h3>@copyright LMY 2023</h3></div></div>
  )
}

export default Footer
