import React, { useEffect } from "react";

const Button = ({ value, type, color, icon, img }) => {
  if (icon) {
    img = <img  src={icon} width="20" alt="" className='ms-2 mt-1 icon ' />;
  }
  switch (color) {
    case "primary":
      color = "bg-purple-900	hover:bg-purple-500 ";
      break;
    case "secondary":
      color = "bg-orange-700	hover:bg-orange-500 ";
  }
  return (
    <div className='flex'>
      <button
        className={`flex px-5 py-3 text-white bold rounded-lg bg-purple-900	hover:bg-indigo-500   cursor-pointer ${color}`}
        type={type}
      >
        {value}
        {img}

      </button>
    </div>
  );
};

export default Button;
