
import React from 'react';
import { MainArticle } from '../MainArticle';
import { Link } from 'react-router-dom';
import AutoCompleteAddres from './AutoCompleteAddres';



export function Booking  ()  {
  const screenHight=window.innerHeight;
  return (
    <div className='p-5'>
      <h2 className=' text-[20px] font-semibold'>Get a ride</h2>
      <div className='border-[1px] p-5 rounded-md'style ={{height:screenHight}}> 
        <AutoCompleteAddres/>
        <button className='p-3 bg-cyan-900 w-full mt-5 text-white rounded-lg'>Search</button>
      </div>
      
    </div>
  );
};

