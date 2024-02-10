import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

import ill1 from "../assets/ill1.png"
import Footer from '../components/Footer'

const Home = () => {

  const navigate = useNavigate()

  const [walletAddress, setWalletAddress] = useState(null)

  const handleClick = e => {
    e.preventDefault()
  }

  return (
    <>
      <div className='w-full h-96 my-8 flex items-center justify-between px-20'>
        <div className='w-2/5 flex flex-col justify-start items-start gap-3  text-left'>
          <p className='text-4xl font-semibold'>
            Buy Real Estate anywhere, anytime <br /> in the world <br />with just one click
          </p>
          <p className='text-gray-500'>
            Trace with digital ledger and have transparency in your transactions through blockchain at leisure of your home.
          </p>
          {
            walletAddress
              ?
              <button
                className='flex items-center justify-center border-2 border-blue-700 rounded-xl w-40 h-10 text-blue-700 hover:text-white hover:bg-blue-700 cursor-pointer'
                onClick={e => { e.preventDefault(); navigate("/mint") }}
              >
                {"Get Started"}
              </button>
              :
              <button
                className='flex items-center justify-center border-2 border-blue-700 rounded-xl w-40 h-10 text-blue-700 hover:text-white hover:bg-blue-700 cursor-pointer'
                onClick={handleClick}
              >
                {"Connect Wallet"}
              </button>
          }
        </div>
        <div className='w-2/4 flex items-center justify-center'>
          <img src={ill1} alt="illustration1" className='w-96 h-80' />
        </div>
      </div>
      <Footer classes={"absolute bottom-0"}/>
    </>
  )
}

export default Home