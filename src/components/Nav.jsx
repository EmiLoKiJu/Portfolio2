import Logo from '@/assets/Logosmall.png'

const Nav = ()=> {
  return(
    <nav className="bg-grey2 fixed w-full text-white">
      <img
        className="w-12 p-[5px] object-contain"
        src={Logo}
        alt="Github Logo"
      >
      </img>
    </nav>
  );
}

export default Nav;