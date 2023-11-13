import React from 'react';

const Button = ({value,  type}) => {
  return (
    <div className='' >
        <input className='px-5 py-3 text-white bold rounded-lg bg-indigo-950	hover:bg-indigo-500  cursor-pointer  ' type={type} value={value} />
    </div>
  );
};

export default Button;