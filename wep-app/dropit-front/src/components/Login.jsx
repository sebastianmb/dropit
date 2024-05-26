import React from 'react';
import { Navbar } from './Navbar'

export const Login = () => {
  return (
    <>
    <header className='flex place-content-between items-center bg-cyan-900 mb-14'>
      <a className='cursor-pointer text-2xl text-white p-3' >Dropit</a>      
    </header>
    <div className='bg-gray-light mt-20 flex items-center justify-center'>
      <div className='bg-white p-8 rounded-lg shadow-md w-96'>
        <h2 className='text-2xl font-semibold mb-4 text-cyan-900'>Iniciar sesión</h2>
        <input
          type='email'
          placeholder='Email'
          className='w-full border border-gray-light rounded-md py-2 px-3 mb-3 focus:outline-none focus:ring focus:border-blue-500'
        />
        <input
          type='password'
          placeholder='Contraseña'
          className='w-full border border-gray-light rounded-md py-2 px-3 mb-3 focus:outline-none focus:ring focus:border-blue-500'
        />
        <button
          className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700'
        >
          Iniciar sesión
        </button>
        <div className='mt-4 text-center'>
          <a href='#' className='text-blue-500 hover:underline'>
            Crear cuenta
          </a>
          <span className='mx-2 text-gray-400'>|</span>
          <a href='#' className='text-blue-500 hover:underline'>
            Recuperar contraseña
          </a>
        </div>
      </div>
    </div>
    </>
  );
};


