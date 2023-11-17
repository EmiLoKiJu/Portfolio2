import { useState } from 'react'
import PropTypes from 'prop-types';

import Logo from '@/assets/Logo1small2.png'
import menu from '@/assets/menu.svg'
import menuhover from '@/assets/menuhover.svg'
import xmenu from '@/assets/x-button.svg'
import xmenuhover from '@/assets/x-button-hover.svg'

const MenuElement = ({ menuHandler, setHamb }) => {
  return (
    <div className='items-center md:flex'>
      <a href="#top-section" className='' onClick={() => {
        menuHandler();
        setHamb(menu);
        }}>
        <div className='text-white font-inter font-bold text-3xl md:text-base md:px-4'>
          To the top
        </div>
      </a>
      <div className="border-t border-[#6f6c6b] my-2"></div>
      <a href="#projects-section" onClick={() => {
        menuHandler();
        setHamb(menu);
        }}>
        <div className='text-white font-inter font-bold text-3xl md:text-base md:px-4'>
          Projects
        </div>
      </a>
      <div className="border-t border-[#6f6c6b] my-2"></div>
      <a href="#about-me-section" onClick={() => {
        menuHandler();
        setHamb(menu);
        }}>
        <div className='text-white font-inter font-bold text-3xl md:text-base md:px-4'>
          About
        </div>
      </a>
      <div className="border-t border-[#6f6c6b] my-2"></div>
      <a href="#contact-me-section" onClick={() => {
        menuHandler();
        setHamb(menu);
        }}>
        <div className='text-white font-inter font-bold text-3xl md:text-base md:px-4'>
          Contact
        </div>
      </a>
      <div className="border-t border-[#6f6c6b] my-2"></div>
    </div>
  );
};

MenuElement.propTypes = {
  menuHandler: PropTypes.func.isRequired,
  setHamb: PropTypes.func.isRequired,
};

const Nav = ()=> {
  const [hamb, setHamb] = useState(menu);
  const [xMenu, setXMenu] = useState(xmenu);
  const [menustate, setMenustate] = useState(false);

  const menuImgEnter = () => {
    if (menustate) setXMenu(xmenu);
    else setHamb(menuhover);
  }

  const menuImgExit = () => {
    if (menustate) setXMenu(xmenuhover);
    else setHamb(menu);
  }

  const menuHandler = () => {
    setMenustate(!menustate);
  }

  return(
    <div className='z-50 flex flex-col fixed'>
      <nav className="bg-grey2 flex justify-between fixed w-full text-white">
        <img
          className="w-11 p-1 object-contain"
          src={Logo}
          alt="Github Logo"
        >
        </img>
        <img
          className="w-11 p-3 object-contain md:hidden"
          src={menustate? xMenu : hamb}
          alt="Github Logo"
          onMouseEnter={() => menuImgEnter() }
          onMouseLeave={() => menuImgExit() }
          onClick={()=> menuHandler()}
        >
        </img>
        <div className='hidden md:flex'>
          <MenuElement menuHandler={menuHandler} setHamb={setHamb}/>
        </div>
        
      </nav>
      { menustate &&
        (
          <div className='top-11 fixed h-full w-full bg-grey2 p-6 md:hidden'>
            <MenuElement menuHandler={menuHandler} setHamb={setHamb} />
          </div>
        )
        
      }
      
    </div>
  );
}

export default Nav;