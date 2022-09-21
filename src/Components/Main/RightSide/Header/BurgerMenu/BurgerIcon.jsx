import './BurgerIcon.css';
import { useRef, useEffect } from 'react';

const BurgerIcon = ({ menuIsOpen, setMenuIsOpen}) => {

    const burgerIcon = useRef();

    const menuClick = () => {
        setMenuIsOpen(!menuIsOpen);
    }
    
    useEffect(() => {
        burgerIcon.current.classList.toggle("change");
    },[menuIsOpen]);


  return (
    <div className="burger-container change" ref={burgerIcon} onClick={menuClick}>
        <div>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
    </div>
  )
}

export default BurgerIcon;
