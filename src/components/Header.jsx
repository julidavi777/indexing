import React from "react";
import { Link } from 'react-router-dom';
import Button from "./button";
import logo from "../assets/logo.png";
import loupe from "../assets/icons/loupe.png";
import wallet from "../assets/icons/wallet.png";
import pencil from "../assets/icons/pencil.png";

const Header = () => {
  return (
    <>
      <div className=' px-3 py-2 flex  justify-between items-center border-b border-gray-600'>
        <div className="w-48" id="logoSlot">
          <Link to="/">
            <img src={logo} alt='Logo de Indexart' className="" id="logoImage"  />
          </Link>
        </div>
        <div>
          <Button value='badge' type='submit' icon="" color="primary" />
        </div>
        <div className="flex justify-center text-white w-1/4 p-2  rounded-sm bg-neutral-600" >
          <div className="pe-1 z-0 " ><img src={loupe} width="25" alt="Search"/></div>
          <input className="z-10 bg-neutral-600 w-full h-full outline-none placeholder:text-white w-full" type="search" placeholder="Search Ordinals" name="SearchOrdinals" id="SearchOrdinals"/>
        </div>
        <div>
          <Link to="/add-form">
            <Button value='Inscribe your Ordinals' type='submit' color="secondary" icon={pencil} />
          </Link>
        </div>
        <div>
          <Button value='Connect your Wallet' color="primary" type='submit' icon={wallet}/>
        </div> 
      </div>
    </>
  );
};

export default Header;