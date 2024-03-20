import React from 'react'

const FlashLoader = (props) => {
  return (
    <div className='py-2 h-[7vh] w-[10vw]  border-[2px] rounded-full border-[#E8601B] font-[Barlow-Condensed] font-bold text-xl text-center text-[#E8601B] '>
       {props.name}  
    </div>
  )
}

export default FlashLoader;