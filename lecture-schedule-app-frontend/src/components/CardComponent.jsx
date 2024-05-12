import React from 'react'

const CardComponent = ({ name, level, description, image }) => {

  return (
    <div className='w-80 max-h-80 p-3 card-item cursor-pointer'>
      <img className='w-72 h-48 object-cover rounded-lg' src={image} alt={name} />
      <h2 className='text-lg font-semibold p-1'>{name}</h2>
      <p className=''>{level}</p>
      <p className='p-1 line-clamp-2'>{description}</p>
    </div>
  )
}

export default CardComponent