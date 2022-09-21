import './AboutMe.css'
import Navbar from '../../Header/Navbar/Navbar';
import { useState, useRef, useEffect } from 'react';
import { IoSchool } from 'react-icons/io5';
import { MdWork } from 'react-icons/md';
import { RiUserStarFill } from 'react-icons/ri';
import { IoMdMedal } from 'react-icons/io';
import Triangle from './Triangle';

const AboutMe = () => {

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const menuRef = useRef();

  const expandMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  }

  useEffect(() => {
    menuIsOpen ? menuRef.current.style.left = '0' : menuRef.current.style.left = '-200px';
  },[menuIsOpen]);

  return (
    <div id="AboutMe" className="content-components">
      
      <div id="side" className='sides'>

        <nav id="side-nav" ref={menuRef}>
          <div id="strap" onClick={expandMenu}>
            {menuIsOpen?<span>&#171;</span>:<span>&#187;</span>}
            </div>
            <Navbar menuIsOpen={menuIsOpen} page_name={AboutMe.name} />
        </nav>
      
        <div className='insides'>
          <Triangle Icon={IoMdMedal} text={'Hobbies'}/>
          <Triangle Icon={IoSchool} text={'Education'}/>
        </div>
      

      </div>
      
      <div className='sides'>
        <div className='insides'>
          <Triangle Icon={RiUserStarFill} text={'Skills'}/>
          <Triangle Icon={MdWork} text={'Experience'}/>
        </div>
      </div>

    </div>
  )
}

export default AboutMe;
