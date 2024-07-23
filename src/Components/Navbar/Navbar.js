import React from 'react'
import './navbar.css'
import { MdOutlineTravelExplore } from "react-icons/md";
import {AiFillCloseCircle} from 'react-icons/ai'
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";

const Navbar = () => {
  return (
    <div>
      <div className='header flex'>
        <div className='logoDiv'>
          <h3 className='logo'><MdOutlineTravelExplore className='icon' />DestiWeb</h3>
        </div>
        <div className='menuDiv'>
          <ul className='menuList'>
            <li className='navItem'>
              <a href='#' className='menuLink'>Home</a>
            </li>
            <li className='navItem'>
              <a href='#' className='menuLink'>About</a>
            </li>
            <li className='navItem'>
              <a href='#' className='menuLink'>Our Tours</a>
            </li>
            <li className='navItem'>
              <a href='#' className='menuLink'>Gallery</a>
            </li>
            <li className='navItem'>
              <a href='#' className='menuLink'>Contact Us</a>
            </li>
            <li className='navItem'>
              <a href='#' className='menuLink'>Blog</a>
            </li>
            <li className='navItem'>
              <a href='#' className='menuLink'>Pages</a>
            </li>
            </ul>

           <div className='closeNavbar'>
              <AiFillCloseCircle className='icon'/>
          </div>

          

        </div>
        
        <div className='socialIcon flex'>
            <FaFacebookF className='icon' />
            <FaTelegramPlane className='icon'/>
            <AiFillInstagram className='icon'/>
            <FaYoutube className='icon'/>
          </div>

        <div className='toggleNavbar'>
        <HiDotsVertical className='icon'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
