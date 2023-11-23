import React, { useEffect } from "react";
import Button from "./button";
import wallet from "../assets/icons/wallet.png";
const DivList = ({ leftList, rightList, icon, children }) => {
    const renderExtra = () => (
        <>
            
        </>
      );
  return (
    <div className='bg-slate-700  rounded-3xl p-5 mt-4'>
      <div className='flex justify-around'>
        <div>
          {leftList.map((elemento, index) => (
            <div key={index}>{elemento}</div>
          ))}
        </div>
        <div>
          {rightList.map((elemento, index) => (
            <div className='flex' key={index}>
              <img src={icon} width='30' className='pe-3' /> {elemento}
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-5 flex justify-center extra" >
            {children}
      </div>

    </div>
  );
};

export default DivList;
