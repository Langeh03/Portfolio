import React from 'react'
import './header.css'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {CgTwitter} from 'react-icons/cg'

const HeaderSocial = () => {
    return (
        <div className='header__social'>
            <a href='https://linkedin.com' target='blank'><FaLinkedinIn/> </a>
            <a href='https://github.com' target='blank'><FaGithub/> </a>
            <a href='https://facebook.com' target='blank'><FaFacebookF/> </a>
            <a href='https://twitter.com' target='blank'><CgTwitter/> </a>
        </div>
    )
}

export default HeaderSocial