import React from 'react'
import './experience.css'
import {FaReact} from 'react-icons/fa'
import {ImHtmlFive} from 'react-icons/im'
import {SiCss3} from 'react-icons/si'
import {SiVisualstudiocode} from 'react-icons/si'
import {BsFiletypeScss} from 'react-icons/bs'
import {SiJavascript} from 'react-icons/si'
import {SiTypescript} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'

export const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills i have</h5>
      <h2>My Experience</h2>
      <div class="container experience__container">
        <div className="wrapper">
          <h2>Languages</h2>
          <div className="experience__option__container">
            <article className='experience__option'>
              <ImHtmlFive className='experience__option__icon'/>
              <h4>HTML</h4>
              <h5>3+ years of experience</h5>
            </article>
            <article className='experience__option'>
              <SiCss3 className='experience__option__icon'/>
              <h4>CSS</h4>
              <h5>3+ years of experience</h5>
            </article>
            <article className='experience__option'>
              <BsFiletypeScss className='experience__option__icon'/>
              <h4>SCSS</h4>
              <h5>2+ years of experience</h5>
            </article>
            <article className='experience__option'>
              <SiJavascript className='experience__option__icon'/>
              <h4>Javascript</h4>
              <h5>2+ years of experience</h5>
            </article>
            <article className='experience__option span1'>
              <SiTypescript className='experience__option__icon'/>
              <h4>Typescript</h4>
              <h5>3+ mounths of experience</h5>
            </article>
            <div className="wrapper1">
              <h2>Framework</h2>
              <article className='experience__option'>
                <FaReact className='experience__option__icon'/>
                <h4>React</h4>
                <h5>2+ mounths of experience</h5>
              </article>
            </div>
            <div className="wrapper1 span2">
              <h2>Version Control System</h2>
              <article className='experience__option'>
                <BsGithub className='experience__option__icon'/>
                <h4>Github</h4>
                <h5>2+ mounths of experience</h5>
              </article>
            </div>
            <div className="wrapper1">
              <h2>Tools</h2>
              <article className='experience__option'>
                <SiVisualstudiocode className='experience__option__icon'/>
                <h4>Visual Studio Code</h4>
                <h5>3+ years of experience</h5>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
