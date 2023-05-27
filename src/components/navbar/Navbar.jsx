import React from 'react'
import './navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {RxPerson} from 'react-icons/rx'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'


export const Navbar = () => {
  return (
    <nav>
      <a href="#" class="active">
        <AiOutlineHome/>
      </a>
      <a href="#about" class="">
        <RxPerson/>
      </a>
      <a href="#experience" class="">
        <BiBook/>
      </a>
      <a href="#services" class=""> 
        <RiServiceLine/>
      </a>
      <a href="#contact" class="">
        <BiMessageSquareDetail/>
      </a>
    </nav>
  )
}

export default Navbar