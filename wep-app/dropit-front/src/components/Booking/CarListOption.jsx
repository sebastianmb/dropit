import React from 'react'
import{CarListData} from'../../../utils/CarListData.js'
import CarListItem from './CarListItem.jsx'

function CarListOption() {
  return (
    <div className='mt-5'>
      <h2 className='text-[22px] font-bold'>Recommeded</h2>
      {CarListData.map((item)=>(
        <div key={item.id}>
            <CarListItem 
            
            car={item}/>
        </div>
      ))}
    </div>
  )
}

export default CarListOption

