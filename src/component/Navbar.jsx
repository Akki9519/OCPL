import React,{useState} from 'react'
import logo from './../logo.webp'
import ocpl from './../ocpl_banner.PNG'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';



 const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="hidden max-md:flex max-md:flex-row ">
      <img src={logo} alt="logo" className="h-24 w-24 ml-8"/>
      <MenuIcon sx={{margin:"20px",marginLeft:"20px",fontSize:"60px"}}onClick={()=>{setIsMenuOpen(!isMenuOpen);}}/>
      </div>
      { isMenuOpen && <div className=" hidden pt-3 mt-3 text-center bg-white border-2 rounded shadow w-screen text-purple-500 max-md:flex max-md:flex-col">
       <Link to='/home'> <div className=" text-xl font-bold hover:bg-sky-700 ">Home</div></Link>
       <Link to='/about'><div className="text-xl font-bold hover:bg-sky-700 ">About</div></Link>
       
       <Link to='/service'><div className="text-xl font-bold hover:bg-sky-700 ">Service</div></Link>
       <Link to='/contact'><div className="text-xl font-bold hover:bg-sky-700 ">Payment</div></Link>
     </div>
      }
   <div className="flex flex-col max-md:hidden">
    <div className="flex flex-row bg-blue-200 text-white bg-gradient-to-r from-white from-10% via-sky-500 via-30% to-emerald-500 to-90%"> 
    <img src={logo} alt="logo" className="h-24 w-24 ml-8"/>
        <div className="flex flex-row pt-3  text-white "style={{marginLeft:"750px"}}>
        <div className=" text-xl font-bold m-5 hover:underline">Home</div>
        <div className="text-xl font-bold m-5 hover:underline">About</div>
        <div className="text-xl font-bold m-5 hover:underline">Contact</div>
        <div className="text-xl font-bold m-5 hover:underline">Service</div>
        <div className="text-xl font-bold m-5 hover:underline">Payment</div>
        </div>
    </div>
        <img src={ocpl} alt="banner" className="w-screen"/>
    </div>
    
    </>
  )
 }

export default Navbar