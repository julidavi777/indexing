import React, { useEffect } from "react";
import Button from "./button";
import wallet from "../assets/icons/wallet.png";
const DivList = ({icon}) => {
    const renderExtra = () => (
        <>
            
        </>
      );
  return (
    <div className='bg-slate-700  rounded-3xl p-5 mt-4'>
        <div className="grid grid-cols-6  p-5">
                    <div >Name</div>
                    <div >Transaction Type</div>
                    <div >Total</div>
                    <div >Seller</div>
                    <div >Buyer</div>
                    <div >SELLER RECEIBER ADDRESS</div>
        </div>
      <div className="pb-5" >
        <div className="border-b-2 p-3 ps-5  "><img width="50" src={icon} alt="" /></div>
        <div className="border-b-2 p-3 ps-5 mb-5  "><img width="50" src={icon} alt="" /></div>
      </div>

    </div>
  );
};

export default DivList;






