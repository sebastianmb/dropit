import logo from '../assets/images/logo.svg'
import { Navbar } from './Navbar'

export const Header = () => {
  return (
    <header className='flex place-content-between items-center bg-cyan-900 mb-14'>
      <a className='cursor-pointer text-2xl text-white p-2' >Dropit</a>
      <Navbar />
    </header>
  )
}