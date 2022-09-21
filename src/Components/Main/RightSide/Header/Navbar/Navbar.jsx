import './Navbar.css';
import { useRef, useEffect } from 'react';

const Navbar = ({menuIsOpen, page_name}) => {

    const pages_names = 
      ['Home','Technology','Projects','AboutMe','Contact']
      .filter(page=>page!==page_name);

    const menuRef = useRef();

    useEffect(() => {

        menuIsOpen ? menuRef.current.style.top = '0' : menuRef.current.style.top = '-100%';

    },[menuIsOpen]);


  return (
    <ul id={`${page_name.toLowerCase()}-menu`} ref={menuRef}>

        {pages_names.map(page=><li key={`${page} on ${page_name}`}>
          <a href={`#${page}`}>{page}</a></li>)}
        
    </ul>
  )
}

export default Navbar;
