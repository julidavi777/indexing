import React from "react";
import Button from "./button";
import logo from "../assets/logo.png";
import loupe from "../assets/icons/loupe.png";
import wallet from "../assets/icons/wallet.png";
import pencil from "../assets/icons/pencil.png";
const Header = () => {


  return (
    <>
    
      <div className=' px-3 py-2 flex  justify-between items-center '>
        <div className="w-48" id="logoSlot">
          <img src={logo} alt='Logo de Indexart' className="" id="logoImage"  />
        </div>
         <div>
          <Button value='badge' type='submit' />
        </div>
        <div className="flex justify-center text-white w-1/4 p-2  rounded-sm bg-neutral-600" >
            <div className="pe-1 z-0 " ><img src={loupe} width="25" alt="Search" style={{ filter: 'invert(1)' }} /></div>
            <input className="z-10 bg-neutral-600 w-full h-full outline-none placeholder:text-white w-full" type="search" placeholder="Search Ordinals" name="SearchOrdinals" id="SearchOrdinals"/>
        </div>
        <div>
          <Button value='Inscribe your Ordinals' type='submit' color="secondary" icon={pencil} />
        </div>
        <div>
          <Button value='Connect your Wallet' type='submit' icon={wallet}/>
        </div> 
      </div>
      <hr className="mt-1 text-red-500"/>
    </>
  );
};

export default Header;
