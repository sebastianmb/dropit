import { useState, useEffect, useContext } from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/clerk-react";
//import { UserContext } from '../context/UserContext';

import burgerMenu from '../assets/images/icon-menu.svg'
import closeBtn from '../assets/images/icon-menu-close.svg'

export const Navbar = () => {

  //const { userapp, setUserapp } = useContext(UserContext);
  //const clerkUser = useUser();


  const [menuClicked, setMenuClicked] = useState(true)

  const handleClick = () => {
    setMenuClicked(prevState => !prevState)
  }

  return (
    <>
      <ul className={`${menuClicked ? 'hidden' : ''} absolute bg-cyan-900 top-0 right-0 text-white w-[256px] p-[24px] h-full text-[18px] sm:flex sm:items-center sm:w-[438px] sm:place-content-around sm:p-0 sm:h-auto sm:relative sm:text-[16px]`}>
        <li className={`${menuClicked ? 'hidden' : ''} cursor-pointer sm:hidden  flex place-content-end`}>
          <img className='w-8 h-8 mb-[87px]' src={closeBtn} onClick={handleClick} alt="" />
        </li>
        <li className='mb-8 sm:mb-0'>
          <a className='px-[12px] py-[10px] rounded-[30px] hover:bg-cyan-700 sm:text-4' href="#">Envio</a>
        </li>
        <li className='mb-8 sm:mb-0'>
          <a className='px-[12px] py-[10px] rounded-[30px] hover:bg-cyan-700' href="#">Mensajero</a>
        </li>
        <li className='mb-8 sm:mb-0'>
          <SignedOut>
            <SignInButton mode='modal' forceRedirectUrl='/Panel'>Registrarse</SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {
            //<button className='px-[12px] py-[10px] rounded-[30px] hover:bg-cyan-700' href="#">Registrate</button>
          }
        </li>

      </ul>
      <img className={`${menuClicked ? '' : 'hidden'} w-10 h-4 cursor-pointer sm:hidden`} src={burgerMenu} onClick={handleClick} alt="" />
    </>
  )
}