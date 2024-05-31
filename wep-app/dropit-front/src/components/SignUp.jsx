import React from 'react';
import { MainArticle } from './MainArticle';
import { Link } from 'react-router-dom';

import Inscripcion from '../assets/images/signup.jpg'

const SignUp = () => {
  return (
    <>
      <header className='flex place-content-between items-center bg-cyan-900 mb-14'>
        <Link to="/" className='cursor-pointer text-2xl text-white p-3' >Dropit</Link>
      </header>
      <div  className=" md:flex md:gap-40 md:mb-10 justify-center">
        <MainArticle imagen={Inscripcion}/>
        <div className=' py-[28px] px-[20px]  bg-gray-light  flex '>
          <div className='bg-white p-8 rounded-lg shadow-md w-96'>
            <h2 className='text-2xl font-semibold mb-4 text-cyan-900'>Crear cuenta</h2>
            <input
              type='text'
              placeholder='Nombre'
              className='w-full border border-gray-light rounded-md py-2 px-3 mb-3 focus:outline-none focus:ring focus:border-blue-500'
            />
            <input
              type='text'
              placeholder='Apellidos'
              className='w-full border border-gray-light rounded-md py-2 px-3 mb-3 focus:outline-none focus:ring focus:border-blue-500'
            />
            <input
              type='text'
              placeholder='Cedula'
              className='w-full border border-gray-light rounded-md py-2 px-3 mb-3 focus:outline-none focus:ring focus:border-blue-500'
            />
            <input
              type='email'
              placeholder='Email'
              className='w-full border border-gray-light rounded-md py-2 px-3 mb-3 focus:outline-none focus:ring focus:border-blue-500'
            />
            <input
              type='tel'
              placeholder='Celular'
              className='w-full border border-gray-light rounded-md py-2 px-3 mb-3 focus:outline-none focus:ring focus:border-blue-500'
            />
            <button
              className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700'
            >
              Registrarse
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;