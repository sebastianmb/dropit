import React from 'react'

function CarListItem({ car }) {
  return (
    <div>
      <div className='flex items-center justify-between mt-5'>
        <div className='flex items-center gap-5'>
          <img src={car.image}
            width={100} height={100} />
          <div>
            <h2 className='font-semibold text-[18px]'>{car.name}</h2>
            <p>{car.desc}</p>
          </div>
        </div>
        <h2 className='text-[18px] font-semibold'>${(car.amount * 38).toFixed(2)}</h2>

      </div>
    </div>
  )
}

export default CarListItem
