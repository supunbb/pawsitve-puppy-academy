import React from 'react'
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <div className=" w-full h-auto bg-zinc-800">
      <div className='flex flex-col justify-center items-center'>
        <div className="text-white text-6xl font-bold font-['Prompt'] mt-20">Subscribe To Join US</div>
        <div className="w-96 h-16 relative">
          <div className="w-[640px] h-12 left-[-180px] top-[30px] absolute bg-zinc-300 bg-opacity-50 rounded-lg" />
          <div className="left-[-140px] top-[42px] absolute text-white text-[17px] font-normal font-['Poppins']">Email Address</div>
          <div className="w-48 h-12 left-[360px] top-[30px] absolute bg-yellow-400 rounded-lg" />
          <div className="left-[430px] top-[42px] absolute text-zinc-800 text-[17px] font-medium font-['Prompt']">Submit</div>
        </div>

        <div className='w-[90%] h-[1px] bg-slate-500 flex items-center mt-20'></div>

        <div className=' flex justify-around w-full mt-20 text-white'>
          <div className='flex flex-col items-start'>
            <div className='flex items-start'>
              <img
                className="w-[97px] h-[78px] object-cover"
                alt="Pawsitive logo"
                src={logo}
              />
              <div className='flex flex-col items-center'>
                <h1 className='text-[40px] uppercase'>Pawsitive</h1>
                <p className='mt-0 leading-[0] text-[18px] uppercase'>Puppy Academy</p>
              </div>
            </div>

            <div className='ml-[10px] mt-[20px] text-[18px] flex flex-col gap-3'>
              <h4 className='text-[20px] font-medium'>Pawsitive Puppy Academy</h4>
              <p>No 720,</p>
              <p>Colombo Road,</p>
              <p>Kandy,</p>
              <p>Sri Lanka.</p>
            </div>
          </div>

          <div>
            <ul className='flex flex-col gap-5'>
              <li className='text-[20px] font-medium'>General</li>
              <li>Home</li>
              <li>About Us</li>
              <li>Gallery</li>
              <li>Contact Us</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <ul className='flex flex-col gap-5'>
              <li className='text-[20px] font-medium'>Services</li>
              <li>Agility Training</li>
              <li>Puppy Training</li>
              <li>Behavior Training</li>
              <li>Private Sessions</li>

              <li className='text-[20px] font-medium mt-[30px]'>Follow US</li>
              <li className='flex items-center gap-3'>
                <img src="/icons8-facebook-48.png" alt="facebook" className='w-[25px]' />
                <img src="/icons8-twitter-24.png" alt="twitter" className='w-[25px]' />
                <img src="/icons8-instagram-48.png" alt="instagram" className='w-[25px]' />
                <img src="/icons8-youtube-30.png" alt="youtube" className='w-[25px]' />
              </li>
            </ul>
          </div>
        </div>

      </div>

      <div className="w-[100%] h-[73px] mt-20">
        <div className=" bg-fuchsia-950 h-[80px] w-[100%] flex items-center justify-center text-center text-white text-xs font-normal font-['Prompt']">This Website uses cookies to improve your experience. Click ‘accept’ to continue with Cookies. if you wish to disable Cookies, please update your preferences via your web browser settings.<br />To find out more and withdraw your consent at any time click here</div>
      </div>
    </div>
  )
}

export default Footer