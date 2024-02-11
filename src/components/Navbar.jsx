import * as fcl from "@onflow/fcl";
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png";
import { RealEstateContext } from "../context/realEstateContext";

function Navbar() {

  const { walletConnected, handleConnectWallet } = useContext(RealEstateContext);

  return (
    <div className='w-full h-20 flex items-center justify-between px-20'>
      <div>
        <NavLink to="/" className="text-black no-underline"><img src={logo} alt="logo" className='w-16 h-10' /></NavLink>
      </div>
      <div className='flex gap-16 items-center justify-center'>
        <NavLink exact to={walletConnected?"/sell":"/"} className="text-black text-xl no-underline hover:font-semibold">Sell</NavLink>
        <NavLink exact to={walletConnected?"/buy":"/"} className="text-black text-xl no-underline hover:font-semibold active:font-semibold">Buy</NavLink>
        <NavLink exact to={walletConnected?"/mint":"/"} className="text-black text-xl no-underline hover:font-semibold active:font-semibold">Mint</NavLink>
      </div>
      <div>
        <button
          className={walletConnected ? 'flex items-center justify-center border-2 border-blue-400 rounded-xl w-40 h-10 text-blue-400 cursor-not-allowed' : 'flex items-center justify-center border-2 border-blue-700 rounded-xl w-40 h-10 text-blue-700 hover:text-white hover:bg-blue-700 cursor-pointer'}
          onClick={walletConnected ? e => e.preventDefault() : handleConnectWallet}
        >
          {walletConnected ? `Connected` : "Connect Wallet"}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
