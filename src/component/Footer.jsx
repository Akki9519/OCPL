import React from 'react'
import logo from './../logo.webp'
import { FacebookRounded, Google, LinkedIn, Twitter } from '@mui/icons-material'

const Footer = () => {
  return (
    <>
          <div className="bg-blue-200"  id="footer">
        <div className="flex flex-row max-md:flex-col"></div>
        <div className="flex  bg-blue-200">
          <img src={logo} alt="logo" className="h-20 w-28 m-10" />
          <div className="text-xl m-5 pt-5 font-bold">OCPL Tech</div>
        </div>
        <div className="float-right flex flex-row -mt-24 mr-8">
          <h3 className="text-xl font-bold m-5">Privacy Policy</h3>
          <h3 className="text-xl font-bold m-5">License</h3>
          <h3 className="text-xl font-bold m-5">Terms & Conditions</h3>
        </div>

        <hr className="ml-10 mr-10 font-extrabold"></hr>
        <div className="flex flex-row text-center justify-center max-md:flex-col">
        <div className="flex text-center justify-center">
          <div className="flex flex-row p-5  pr-72 max-md:pr-0">
            <FacebookRounded className='mr-5' />
            <Twitter className='mr-5' />
            <LinkedIn className='mr-5' />
            <Google className='mr-5' />
          </div>
          </div>
          <div className="text-l text-black pt-5 pr-96 ">
            © 2023  OCPL TECH. All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer