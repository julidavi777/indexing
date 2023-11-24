import React, { useEffect } from "react";
import Button from "./button";
import wallet from "../assets/icons/wallet.png";
import dolphin from '../assets/IMG/dolphin.jpg'
const DivList = ({icon}) => {
    const renderExtra = () => (
        <>
            
        </>
      );
  return (
    <div className='bg-purple-950  rounded-3xl p-5 mt-4 text-center
    '>
            <img className="mx-auto" src={dolphin} alt="Dolphin BTC" width={300} />
    </div>
  );
};

export default DivList;






