
import React from 'react';
import { MainArticle } from '../MainArticle';
import { Link } from 'react-router-dom';
import AutoCompleteAddres from './AutoCompleteAddres';



export function Booking  ()  {
  const screenHight=window.innerHeight;
  return (
    <div className='p-5'>
      <h2 className=' text-[20px] font-semibold'>Booking</h2>
      <div className='border-[1px] p-5 rounded-md'style ={{height:screenHight}}> 
        <AutoCompleteAddres/>
      </div>
    </div>
  );
};

