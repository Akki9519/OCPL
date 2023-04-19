import React from 'react'

const About = () => {
  return (
    <>
    <div id="about">
    <marquee><div className="bg-red-600 w-52 h-14 text-center justify-center text-white pt-4 m-5 animation font-semibold" style={{borderRadius:"30%"}}>OPCL TECH SERVICES</div></marquee>

    <div className="grid grid-cols-3 max-md:grid-cols-1">  
        <p className="transition ease-in-out delay-100 bg-red-200 hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300  h-96 w-96 text-center justify-center p-8 m-10 pt-12" style={{borderRadius:"30%"}}>
        <div className="text-xl font-bold  text-blue-900 mb-5">
            Cloud Computing 
        </div>
        Cloud computing is a technology that allows users to access and use computing resources, 
        such as servers, storage, applications, and services, over the internet. These resources are 
        provided and managed by third-party service providers,
         known as cloud service providers (CSPs), and are delivered to users on demand, often on 
         a pay-as-you-go basis.
        </p>
        <p className=" transition ease-in-out delay-150 bg-green-300 hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300  h-96 w-96 text-center justify-center p-8 m-10 pt-12" style={{borderRadius:"30%"}}>
        <div className="text-xl font-bold  text-blue-900 mb-5">
        Infrastructure as a Service (IaaS)
        </div>
        This service provides users with virtualized computing resources,
         such as servers, storage, and networking, on a pay-as-you-go basis.
         Users can scale their resources up or down as needed, and only pay for what they use.
        <div className="text-red-700 font-semibold mt-2">Example of IAAS Services is Amazon Web Services (AWS),
        Microsoft Azure,Google Cloud Platform (GCP),DigitalOcean,Linode</div>
        </p>
        
        <p className="transition ease-in-out delay-150 bg-blue-300 hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300  h-96 w-96 text-center justify-center p-8 m-10 pt-12" style={{borderRadius:"30%"}}>
        <div className="text-xl font-bold  text-blue-900 mb-5">
        Platform as a Service (PaaS)
        </div>
         This service provides users with 
        a platform for developing, deploying, and managing applications, without having to worry about
         the underlying infrastructure. PaaS providers typically offer tools and
         frameworks for application development, as well as tools for managing the application lifecycle.
         <div className="text-red-700 font-semibold mt-2">Example of IAAS Services is Amazon Web Services (AWS),
        Microsoft Azure,Google Cloud Platform (GCP),DigitalOcean,Linode</div>
        </p>
        <p className="transition ease-in-out delay-150 bg-gray-500 hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300  h-96 w-96 text-center justify-center p-8 m-10 pt-12" style={{borderRadius:"30%"}}>
        <div className="text-xl font-bold  text-blue-900 mb-5">
        Software as a Service (SaaS) 
        </div>
         This service provides users with access to 
        software applications over the internet, without having to install or manage the software themselves.
         SaaS providers 
        typically host and maintain the software, and users access it through a web browser or mobile app.
        <div className="text-red-700 font-semibold mt-2">Example of IAAS Services is Amazon Web Services (AWS),
        Microsoft Azure,Google Cloud Platform (GCP),DigitalOcean,Linode</div>
        </p>
        <p className="transition ease-in-out delay-150 bg-yellow-100 hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300  h-96 w-96 text-center justify-center p-8 m-10 pt-12" style={{borderRadius:"30%"}}>
        <div className="text-xl font-bold  text-blue-900 mb-5">
        Serverless Computing 
        </div>
        This service allows users to run applications and services without having
         to manage servers or infrastructure. Instead, the cloud provider manages the
         infrastructure, and users only pay for the compute resources used by their applications.
         <div className="text-red-700 font-semibold mt-2">Example of IAAS Services is Amazon Web Services (AWS),
        Microsoft Azure,Google Cloud Platform (GCP),DigitalOcean,Linode</div>
        </p>
        <p className="transition ease-in-out delay-150 bg-pink-200 hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300  h-96 w-96 text-center justify-center p-8 m-10 pt-12" style={{borderRadius:"30%"}}>
        <div className="text-xl font-bold  text-blue-900 mb-5">
        Storage as a Service 
        </div>
         This service provides users with cloud-based storage for their data,
         which can be accessed from anywhere and on any device. Cloud storage providers typically offer
         different tiers of storage, with different levels of performance and durability.
         <div className="text-red-700 font-semibold mt-2">Example of IAAS Services is Amazon Web Services (AWS),
        Microsoft Azure,Google Cloud Platform (GCP),DigitalOcean,Linode</div>
        </p>
    </div>
    </div>
    </>
  )
}

export default About