
import React from 'react';
import { MainArticle } from '../MainArticle';
import { Link } from 'react-router-dom';
import AutoCompleteAddres from './AutoCompleteAddres';



export function Booking  ()  {
  return (
    <div className='p-5'>
      <h2 className=' text-[20px] font-semibold'>Booking</h2>
      <AutoCompleteAddres/>
    </div>
  );
};

