import React from 'react'

function CarListItem({car}) {
  return (
    <div>
      <div>
        <Image src={car.image}
        width={100} height={100}/>
      </div>
    </div>
  )
}

export default CarListItem
