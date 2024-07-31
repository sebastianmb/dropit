import { NewArticle } from "./NewArticle"
import locationIcon from '../assets/images/location.png'; // Ruta al archivo SVG del icono de ubicación
import destinationIcon from '../assets/images/destination.png'; // Ruta al archivo SVG del icono de destino
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";





export const NewContainer = () => {
  return (
    <aside className="py-[28px] px-[20px] text-cyan-900 flex-none mb-[60px] md:w-[350px] md:mb-0 lg:w-2/5 ">
      <div >
        <div className='flex-1 py-6'>
          <h2 className='text-[40px]  leading-none font-bold sm:text-[58px]'>La app para enviar a cualquier lugar</h2>
        </div>
        <div className='flex flex-col  pt-2 '>
          <p className='mb-10 text-[13px] sm:text-[17px] '>Inicia sesion para acceder a tu cuenta.</p>
          
          <button className='bg-cyan-900 w-[170px] h-[40px] rounded-[10px]  text-OffWhite hover:bg-VeryDarkBlue '><Link to="/Panel">Usuario</Link></button>
          <button className='mt-5 bg-cyan-900 w-[170px] h-[40px] rounded-[10px]  text-OffWhite hover:bg-VeryDarkBlue '><Link to="/Panel">Socio mensajero</Link></button>
          
        
        </div>
      </div>
    </aside>
  )
}