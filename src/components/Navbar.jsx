import React from 'react'
import logo from "../assets/logo.png"

const Navbar = () => {
  return (

        <div className="w-[1440px] h-[100px]">
          <div className="h-[100px] bg-black-rgba">
            <div className="relative w-[1256px] h-[70px] top-[15px] left-[54px]">
              <div className="relative w-[1266px] h-[70px]">
                <div className="absolute w-[225px] h-[70px] top-0 left-0">
                  <img
                    className="absolute w-[97px] h-[78px] top-0 left-[-4px] object-cover"
                    alt="Pawsitive logo"
                    src={logo}
                  />
                  <div className="absolute w-[119px] h-[48px] top-[12px] left-[102px]">
                    <div className="absolute top-0 left-0 [font-family:'Prompt-Medium',Helvetica] font-medium text-white text-[23.3px] tracking-[0] leading-[normal]">
                      PAWSITIVE
                    </div>
                    <div className="absolute top-[29px] left-[7px] [font-family:'Prompt-Light',Helvetica] font-light text-white text-[12.4px] tracking-[0] leading-[normal]">
                      PUPPY ACADEMY
                    </div>
                  </div>
                </div>
                <div className="absolute top-[21px] left-[1155px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#fcfcfc] text-[18px] tracking-[0] leading-[normal]">
                  Contact Us
                </div>
                <div className="left-[666px] text-[#ffc700] text-center absolute top-[21px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[18px] tracking-[0] leading-[normal]">
                  Home
                </div>
                <div className="absolute top-[21px] left-[773px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#fcfcfc] text-[18px] tracking-[0] leading-[normal]">
                  About Us
                </div>
                <div className="left-[908px] text-[#fcfcfc] absolute top-[21px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[18px] tracking-[0] leading-[normal]">
                  Services
                </div>
                <div className="left-[1037px] text-[#fcfcfc] absolute top-[21px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[18px] tracking-[0] leading-[normal]">
                  Gallery
                </div>
              </div>
            </div>
          </div>
        </div>
    






    // <nav className=' top-0 z-50 py-3 bg-black-rgba '>
    //     <div className=' container px-4 mx-auto relative text-sm'>
    //         <div className=' flex justify-between items-center ml-10'>
    //             <div className=' flex items-center flex-shrink-0'>
    //                 <img  className=" h-auto w-[60px] mr-2 drop-shadow-sm " src={logo} alt="logo" />
    //                 <div className=' text-white'>
    //                 <span className=' text-[23px] font-medium'>PAWSITIVE</span><br/><span className=' text-[12px]  font-light '>PUPPY ACADEMY</span>
    //                 </div>                                       
    //             </div>
    //             <ul className='flex ml-8 mr-10 space-x-12 text-white'>
    //                   <li>Home</li>
    //                   <li>About Us</li>
    //                   <li>Services</li>
    //                   <li>Gallery</li>
    //                   <li>Contact Us</li>
    //                 </ul>
    //           </div>
    //     </div>
    // </nav>
  )
}

export default Navbar


