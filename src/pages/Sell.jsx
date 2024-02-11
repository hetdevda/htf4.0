import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import ill3 from "../assets/ill3.avif"
import Footer from "../components/Footer"
import realestate from "../data/realestate.json"

const Sell = () => {

  const navigate = useNavigate()

  const [data, setData] = useState({ propertyName: "", location: "", description: "", price: "" })

  const handleSubmit = e => {

    e.preventDefault()

    const { propertyName, location, description, price } = data

    if (propertyName !== "" && location !== "" && description !== "" && description.length < 200 && price !== "" && price.length <= 4) {

      realestate.push({
        property_name: propertyName,
        property_location: location,
        property_description: description,
        property_price: price+" FLOW",
        property_image: "images/ill3.avif"
      })
      alert("Property has been listed for sale")
      setData({ propertyName: "", location: "", description: "", price: "" })
      navigate("/buy")

    }
    else {
      alert("Please fill all the fields with valid data")
    }
  }

  return (
    <>
      <div className='w-full flex items-center justify-center'>
        <div className='w-10/12 h-96 flex items-center justify-center mt-16'>
          <div className='w-1/2 flex flex-col items-center justify-center gap-5'>

            <p className='text-3xl font-semibold text-center'>Enter your<br />Landmark details</p>

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
                className='w-80 h-32 rounded-lg border-2 border-gray-400 px-2 py-1'
                placeholder='Description (Max 200 characters)'
                value={data.description}
                onChange={(e) => setData({ ...data, description: e.target.value })}
              />

              <input
                type="text"
                className='w-80 h-10 rounded-lg border-2 border-gray-400 px-2'
                placeholder='Price in FLOW (1-9999)'
                value={data.price}
                onChange={(e) => setData({ ...data, price: e.target.value })}
              />

              <button
                className='w-80 h-10 rounded-lg bg-green-700 text-white border'
                onClick={handleSubmit}
              >
                Sell
              </button>

            </form>

          </div>

          <div className='w-1/2 flex flex-col items-center justify-center border-l-2 gap-5'>

            <p className='text-3xl font-semibold text-center'>Details will be<br />published as</p>

            <div className='border-4 w-80 h-96 rounded-2xl flex flex-col items-center justify-around border-gray-400'>
              <img src={ill3} alt="illustration3" className='w-30 h-32' />
              <div className='flex flex-col items-center justify-center gap-y-1 px-2'>
                <p className='text-2xl font-semibold'>{data.propertyName === "" ? "<<Property Name>>" : data.propertyName}</p>
                <p className='text-lg text-gray-500'>{data.location === "" ? "<<Property Location>>" : data.location}</p>
                <p className='text-sm text-gray-500 font-light text-center'>
                  {data.description === "" ? "<<Property Description>>" : data.description}</p>
              </div>
              <div className='w-11/12 flex items-center justify-center gap-x-2'>
                <div className='flex items-center justify-center w-4/12 h-10 rounded-lg border'>{data.price === "" && data.price.length <= 2 ? "????" : data.price + " FLOW"}</div>
                <button
                  className='flex items-center justify-center w-8/12 h-10 rounded-lg bg-green-700 text-white border'
                  onClick={handleSubmit}
                >
                  Sell
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Sell