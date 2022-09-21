import './Header.css';
import Navbar from './Navbar/Navbar.jsx';
import BurgerIcon from './BurgerMenu/BurgerIcon.jsx';
import { useState } from 'react';

const Header = () => {

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  
  return (
    <div id="Home" className='Header'>
      <Navbar menuIsOpen={menuIsOpen} page_name={'Home'} />
      <BurgerIcon menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen}/>
    </div>
  )
}

export default Header;

