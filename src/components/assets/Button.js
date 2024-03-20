import React from 'react';

const Button = (props) => {
  return (
    <div className='px-5 py-1 bg-white mx-5 border-2 rounded-full border-[#E8601B] font-[Barlow-Condensed] font-medium text-xl text-center'>
       {props.name} 
    </div>
  )
}

export default Button;