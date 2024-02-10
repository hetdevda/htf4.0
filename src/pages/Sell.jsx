import React, { useState } from 'react'

import ill3 from "../assets/ill3.avif"
import ill4 from "../assets/ill4.jpg"

const Sell = () => {

  const [data, setData] = useState({ propertyName: "", location: "", description: "", price: "" })

  return (
    <div className='w-full flex items-center justify-center'>
      <div className='w-10/12 h-96 flex items-center justify-center mt-16'>
        <div className='w-1/2 flex items-center justify-center'>

          <form className='flex flex-col items-center justify-center gap-3'>

            <input
              type="text"
              className='w-80 h-10 rounded-lg border-2 border-gray-400 px-2'
              placeholder='Property Name'
              value={data.propertyName}
              onChange={(e) => setData({ ...data, propertyName: e.target.value })}
            />

            <input
              type="text"
              className='w-80 h-10 rounded-lg border-2 border-gray-400 px-2'
              placeholder='Location'
              value={data.location}
              onChange={(e) => setData({ ...data, location: e.target.value })}
            />

            <textarea
              className='w-80 h-32 rounded-lg border-2 border-gray-400 px-2'
              placeholder='Description'
              value={data.description}
              onChange={(e) => setData({ ...data, description: e.target.value })}
            />

            <input
              type="text"
              className='w-80 h-10 rounded-lg border-2 border-gray-400 px-2'
              placeholder='Price'
              value={data.price}
              onChange={(e) => setData({ ...data, price: e.target.value })}
            />

            <button
              className='w-80 h-10 rounded-lg bg-green-700 text-white border'
              onClick={e => e.preventDefault()}
            >
              Sell
            </button>


          </form>

        </div>

        <div className='w-1/2 flex items-center justify-center border-l-2'>

          <div className='border-4 w-80 h-96 rounded-2xl flex flex-col items-center justify-around border-gray-400'>
            <img src={ill3} alt="illustration3" className='w-30 h-32' />
            <div className='flex flex-col items-center justify-center gap-y-1 px-2'>
              <p className='text-2xl font-semibold'>{data.propertyName === "" ? "<<Property Name>>" : data.propertyName}</p>
              <p className='text-lg text-gray-500'>{data.location === "" ? "<<Property Location>>" : data.location}</p>
              <p className='text-sm text-gray-500 font-light text-center'>
                {data.description === "" ? "<<Property Description>>" : data.description}</p>
            </div>
            <div className='w-11/12 flex items-center justify-center gap-x-2'>
              <div className='flex items-center justify-center w-4/12 h-10 rounded-lg border'>{data.price === "" && data.price.length<=2 ? "??" : data.price + " FLOW"}</div>
              <button
                className='flex items-center justify-center w-8/12 h-10 rounded-lg bg-green-700 text-white border'
                onClick={e => e.preventDefault()}
              >
                Sell
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Sell