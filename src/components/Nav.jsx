import { useState } from 'react'

import Logo from '@/assets/Logosmall.png'
import menu from '@/assets/menu.svg'
import menuhover from '@/assets/menuhover.svg'
import xmenu from '@/assets/x-button.svg'
import xmenuhover from '@/assets/x-button-hover.svg'

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
          className="w-11 p-3 object-contain"
          src={menustate? xMenu : hamb}
          alt="Github Logo"
          onMouseEnter={() => menuImgEnter() }
          onMouseLeave={() => menuImgExit() }
          onClick={()=> menuHandler()}
        >
        </img>
      </nav>
      { menustate &&
        ( 
          <div className='top-11 fixed h-full w-full bg-grey2'>
            <a href="#top-section" onClick={() => {
              menuHandler();
              setHamb(menu);
              }}>
              <div className='text-white font-inter font-bold text-3xl'>
                Back to the top
              </div>
            </a>
            <a href="#projects-section" onClick={() => {
              menuHandler();
              setHamb(menu);
              }}>
              <div className='text-white font-inter font-bold text-3xl'>
                Projects
              </div>
            </a>
            <a href="#about-me-section" onClick={() => {
              menuHandler();
              setHamb(menu);
              }}>
              <div className='text-white font-inter font-bold text-3xl'>
                About me
              </div>
            </a>
            <a href="#contact-me-section" onClick={() => {
              menuHandler();
              setHamb(menu);
              }}>
              <div className='text-white font-inter font-bold text-3xl'>
                Contact me
              </div>
            </a>
          </div>
        )
        
      }
      
    </div>
  );
}

export default Nav;