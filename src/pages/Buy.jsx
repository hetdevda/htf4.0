import React from 'react'

import Footer from '../components/Footer'
import realestate from "../data/realestate.json"

const Buy = () => {
  return (
    <>
      <div className='w-full mt-14 flex items-center justify-center'>
        <div className='w-10/12 flex flex-col items-start justify-center'>
          <div className='w-full flex flex-col items-start justify-start gap-8'>
            <div className='flex flex-col items-start justify-start gap-2'>
              <p className='text-4xl font-semibold'>Buy Properties</p>
              <p className='text-4xl font-semibold text-blue-900'>Without any headache</p>
            </div>
            <p className='text-lg text-gray-500'>Browse Latest Estates</p>
          </div>

          <div className='w-full grid grid-cols-3 gap-x-5 gap-y-8 mt-14'>
            {
              [...realestate].reverse().map((estate, index) => {
                return (
                  <div key={index} className='border-4 w-80 h-96 rounded-2xl flex flex-col items-center justify-around hover:border-gray-400'>
                    <img src={estate.property_image} alt={estate.property_name} className='w-30 h-32' />
                    <div className='flex flex-col items-center justify-center gap-y-1 px-2'>
                      <p className='text-2xl font-semibold'>{estate.property_name}</p>
                      <p className='text-lg text-gray-500'>{estate.property_location}</p>
                      <p className='text-sm text-gray-500 font-light text-center'>{estate.property_description}</p>
                    </div>
                    <div className='w-11/12 flex items-center justify-center gap-x-2'>
                      <div className='flex items-center justify-center w-4/12 h-10 rounded-lg border'>{estate.property_price}</div>
                      <button className='flex items-center justify-center w-8/12 h-10 rounded-lg bg-blue-700 text-white border'>Buy</button>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <Footer classes={""} />
    </>
  )
}

export default Buy