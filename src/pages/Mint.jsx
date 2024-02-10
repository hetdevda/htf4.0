import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

import ill2 from "../assets/ill2.png"

const Mint = () => {

  const navigate = useNavigate()
  const [file, setFile] = ("")

  const [walletAddress, setWalletAddress] = useState("")

  const handleClick = e => {
    e.preventDefault()
  }

  // const handleInputChange = (e) => {

  //   const data = e.target.files[0];
  //   const reader = new window.FileReader();

  //   reader.readAsArrayBuffer(data);
  //   reader.onloadend = () => {
  //     setFile(e.target.files[0]);
  //   };

  //   e.preventDefault();

  // }

  return (
    <div className='w-full h-80 my-12 flex items-center justify-between px-20'>
      <div className='w-2/5 flex items-start justify-start'>
        <img src={ill2} alt="illustration1" className='w-96 h-64' />
      </div>
      <div className='w-3/4 flex flex-col justify-center items-center'>
        <p className='font-semibold text-2xl'>No docs Yet !!</p>
        <p>Upload the docs</p>
        <input
          type="file"
          className='ms-10 mt-8 mb-3 text-sm file:cursor-pointer file:w-32 file:h-10 file:mr-3 file:border-0 file:font-medium file:text-violet-700 file:rounded-xl'
          // onChange={handleInputChange}
        />
        < button
          className={file ?
            `h-11 w-40 flex items-center justify-center space-x-3 border-2 border-blue-700 rounded-xl md:text-blue-700 text-white md:bg-white bg-blue-700 font-medium md:hover:bg-blue-700 md:hover:text-white`
            :
            `h-11 w-40 flex items-center justify-center space-x-3 border-2 border-blue-500 rounded-xl md:text-blue-500 text-white md:bg-white bg-blue-500 font-medium cursor-not-allowed`}
        >
          Mint Doc
        </button>
      </div>
    </div>
  )
}

export default Mint