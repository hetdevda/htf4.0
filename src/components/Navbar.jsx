import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import logo from "../assets/logo.png"

const Navbar = () => {

  const [walletAddress, setWalletAddress] = useState(null)

  const handleClick = e => {
    e.preventDefault()
  }

    return (
      <div className='w-full h-20 flex items-center justify-between px-20'>
        <div>
          <NavLink to="/" className="text-black no-underline"><img src={logo} alt="logo" className='w-16 h-10' /></NavLink>
        </div>
        <div className='flex gap-16 items-center justify-center'>
          <NavLink to="/mint" className="text-black text-lg no-underline hover:font-semibold">Mint</NavLink>
          <NavLink to="/buy" className="text-black text-lg no-underline hover:font-semibold">Buy</NavLink>
          <NavLink to="/sell" className="text-black text-lg no-underline hover:font-semibold">Sell</NavLink>
        </div>
        <div>
          <button
            className={walletAddress?'flex items-center justify-center border-2 border-blue-400 rounded-xl w-40 h-10 text-blue-400 cursor-not-allowed':'flex items-center justify-center border-2 border-blue-700 rounded-xl w-40 h-10 text-blue-700 hover:text-white hover:bg-blue-700 cursor-pointer'}
            onClick={walletAddress?e=>e.preventDefault():handleClick}
          >
            {walletAddress?walletAddress.substring(0,6)+"..."+walletAddress[walletAddress.length-3]+walletAddress[walletAddress.length-2]+walletAddress[walletAddress.length-1]:"Connect Wallet"}
          </button>
        </div>
      </div>
    )
  }

  export default Navbar