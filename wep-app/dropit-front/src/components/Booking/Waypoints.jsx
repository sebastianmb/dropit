import React, { useContext, useEffect } from 'react'
import { useState } from 'react'


import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

function Waypoints() {
  return (
    <div className='mt-3'>
      <div className='relative'>

        <div className='flex items-center gap-4 bg-white p-1 border-[1px] w-full rounded-md outline-none
                            focus:border-cyan-900'>
          <div className="bg-cyan-900 h- w-4 text-white flex items-center justify-center text-[16px] rounded-md">1</div>


        </div>

      </div>
    </div>
  )
}

export default Waypoints
