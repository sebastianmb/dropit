
import React, { useContext } from 'react';
import { MainArticle } from '../MainArticle';
import { Link } from 'react-router-dom';
import AutoCompleteAddres from './AutoCompleteAddres';
import { SourceContext } from '../../context/SourceContext';
import { DestinationContext } from '../../context/DestinationContext';



export function Booking  ()  {
  const screenHight=window.innerHeight;

  const {source, setSource}=useContext(SourceContext);
  const {destination, setDestination}=useContext(DestinationContext);

  const calculateDistance=()=>{
    const dist=google.maps.geometry.spherical.computeDistanceBetween(
      {lat:source.lat,lng:source.lng},
      {lat:destination.lat,lng:destination.lng},      
    )  
    console.log(dist);
  }

  return (
    <div className='p-5'>
      <h2 className=' text-[20px] font-semibold'>Get a ride</h2>
      <div className='border-[1px] p-5 rounded-md'style ={{height:screenHight}}> 
        <AutoCompleteAddres/>
        <button className='p-3 bg-cyan-900 w-full mt-5 text-white rounded-lg'
        onClick={()=>calculateDistance()}
        >Search</button>
      </div>
      
    </div>
  );
};

