import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = ({ classes }) => {
  return (
    <div className={`${classes} mt-20 w-full h-24 flex flex-col items-center justify-center bg-slate-200 text-sm font-light`}>
      <div className='flex items-center justify-center w-96 h-10 border-b border-gray-400'>
        copyright © KrateKode 2024
      </div>
      <div className='flex items-center justify-center'>
        <div className='flex items-center justify-center gap-x-2 py-2'>
          <FaTwitter className='text-lg'/>
          <a href="https://x.com/kratekode" target='_blank'>KrateKode</a>
        </div>
      </div>
    </div>
  )
}

export default Footer