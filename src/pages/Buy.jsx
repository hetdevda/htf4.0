import React from 'react'

import ill3 from "../assets/ill3.avif"
import Footer from '../components/Footer'

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

            <div className='border-4 w-80 h-96 rounded-2xl flex flex-col items-center justify-around hover:border-gray-400'>
              <img src={ill3} alt="illustration3" className='w-30 h-32' />
              <div className='flex flex-col items-center justify-center gap-y-1 px-2'>
                <p className='text-2xl font-semibold'>Property 1</p>
                <p className='text-lg text-gray-500'>Denver</p>
                <p className='text-sm text-gray-500 font-light text-center'>
                  Nestled against the backdrop of the Rocky Mountains, this charming Denver home boasts panoramic views of the city skyline.</p>
              </div>
              <div className='w-11/12 flex items-center justify-center gap-x-2'>
                <div className='flex items-center justify-center w-4/12 h-10 rounded-lg border'>2000 FLOW</div>
                <button className='flex items-center justify-center w-8/12 h-10 rounded-lg bg-blue-700 text-white border'>Buy</button>
              </div>
            </div>

            <div className='border-4 w-80 h-96 rounded-2xl flex flex-col items-center justify-around hover:border-gray-400'>
              <img src={ill3} alt="illustration3" className='w-30 h-32' />
              <div className='flex flex-col items-center justify-center gap-y-1 px-2'>
                <p className='text-2xl font-semibold'>Property 2</p>
                <p className='text-lg text-gray-500'>London</p>
                <p className='text-sm text-gray-500 font-light text-center'>
                  Located in the heart of Kensington, this elegant London residence exudes timeless sophistication with its Georgian architecture and pristine gardens.</p>
              </div>
              <div className='w-11/12 flex items-center justify-center gap-x-2'>
                <div className='flex items-center justify-center w-4/12 h-10 rounded-lg border'>1700 FLOW</div>
                <button className='flex items-center justify-center w-8/12 h-10 rounded-lg bg-blue-700 text-white border'>Buy</button>
              </div>
            </div>

            <div className='border-4 w-80 h-96 rounded-2xl flex flex-col items-center justify-around hover:border-gray-400'>
              <img src={ill3} alt="illustration3" className='w-30 h-32' />
              <div className='flex flex-col items-center justify-center gap-y-1 px-2'>
                <p className='text-2xl font-semibold'>Property 3</p>
                <p className='text-lg text-gray-500'>Paris</p>
                <p className='text-sm text-gray-500 font-light text-center'>
                  Tucked away in the heart of Paris, this elegant townhouse exudes timeless Parisian sophistication.</p>
              </div>
              <div className='w-11/12 flex items-center justify-center gap-x-2'>
                <div className='flex items-center justify-center w-4/12 h-10 rounded-lg border'>1900 FLOW</div>
                <button className='flex items-center justify-center w-8/12 h-10 rounded-lg bg-blue-700 text-white border'>Buy</button>
              </div>
            </div>

            <div className='border-4 w-80 h-96 rounded-2xl flex flex-col items-center justify-around hover:border-gray-400'>
              <img src={ill3} alt="illustration3" className='w-30 h-32' />
              <div className='flex flex-col items-center justify-center gap-y-1 px-2'>
                <p className='text-2xl font-semibold'>Property 4</p>
                <p className='text-lg text-gray-500'>India</p>
                <p className='text-sm text-gray-500 font-light text-center'>
                  Tucked away in the vibrant streets of Mumbai, this elegant Indian home exudes timeless grandeur with its intricate architectural details.</p>
              </div>
              <div className='w-11/12 flex items-center justify-center gap-x-2'>
                <div className='flex items-center justify-center w-4/12 h-10 rounded-lg border'>1900 FLOW</div>
                <button className='flex items-center justify-center w-8/12 h-10 rounded-lg bg-blue-700 text-white border'>Buy</button>
              </div>
            </div>

            <div className='border-4 w-80 h-96 rounded-2xl flex flex-col items-center justify-around hover:border-gray-400'>
              <img src={ill3} alt="illustration3" className='w-30 h-32' />
              <div className='flex flex-col items-center justify-center gap-y-1 px-2'>
                <p className='text-2xl font-semibold'>Property 5</p>
                <p className='text-lg text-gray-500'>Dubai</p>
                <p className='text-sm text-gray-500 font-light text-center'>
                  Perched amidst Dubai's iconic skyline, this luxurious residence epitomizes opulence and sophistication.</p>
              </div>
              <div className='w-11/12 flex items-center justify-center gap-x-2'>
                <div className='flex items-center justify-center w-4/12 h-10 rounded-lg border'>1600 FLOW</div>
                <button className='flex items-center justify-center w-8/12 h-10 rounded-lg bg-blue-700 text-white border'>Buy</button>
              </div>
            </div>

            <div className='border-4 w-80 h-96 rounded-2xl flex flex-col items-center justify-around hover:border-gray-400'>
              <img src={ill3} alt="illustration3" className='w-30 h-32' />
              <div className='flex flex-col items-center justify-center gap-y-1 px-2'>
                <p className='text-2xl font-semibold'>Property 6</p>
                <p className='text-lg text-gray-500'>Tokyo</p>
                <p className='text-sm text-gray-500 font-light text-center'>
                  In the heart of bustling Tokyo, this sleek and minimalist home epitomizes urban sophistication.</p>
              </div>
              <div className='w-11/12 flex items-center justify-center gap-x-2'>
                <div className='flex items-center justify-center w-4/12 h-10 rounded-lg border'>2100 FLOW</div>
                <button className='flex items-center justify-center w-8/12 h-10 rounded-lg bg-blue-700 text-white border'>Buy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer classes={""} />
    </>
  )
}

export default Buy