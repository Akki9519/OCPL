import React from 'react'
import { Button } from '@mui/material'

const Contact = () => {
  return (
    <div className="bg-blue-100" >
     <h1 className="text-center text-5xl pt-20 font-bold ">Contact Us</h1>
      <div className="p-20  flex flex-col m-10 -mb-10 ">
        <label className="text-l font-medium pb-2 ">Name</label>
        <input type="text" placeholder="Enter Your Name"  className=" opacity-75 rounded-none outline-none outline-offset-0 shadow-none p-3 "/><br/>
        <label className="text-l font-medium pb-2">Subject</label>
        <input type="text" placeholder="Enter Your Subject" className=" opacity-75 rounded-none outline-none outline-offset-0 shadow-none p-3"/><br/>
        <label className="text-l font-medium pb-2">Email</label>
        <input type="text" placeholder="Enter Your Email" className=" opacity-75 rounded-none outline-none outline-offset-0 shadow-none p-3"/><br/>
        <label className="text-l font-medium pb-2">Message</label>
        <textarea type="text" placeholder="Enter Your Message"  className="pb-14  opacity-75 rounded-none outline-none outline-offset-0 shadow-none p-3" style={{"rows":10,"cols":50}}/><br/>
        
        <Button variant="contained" >Submit</Button>
      </div>
    </div>
  )
}

export default Contact