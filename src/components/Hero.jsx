import React from 'react'
import heroDog from "../assets/heroDog.png"



const Hero = () => {
  return (
    <div className="w-[1440px] h-[1024px] bg-white overflow-hidden [background:linear-gradient(180deg,rgb(110,45,88)_0%,rgb(82.01,18.04,60.36)_100%)] bg-[url(/hero.png)] bg-cover bg-[50%_50%]">
      <div className="relative w-[2021px] h-[1436px] top-[-82px] left-[-321px]">
        <div className="absolute w-[2021px] h-[1436px] top-0 left-0">
          <div className="absolute w-[1008px] h-[622px] top-0 left-0">
            <div className="absolute w-[596px] h-[596px] top-0 left-0 rounded-[298px] border-[100px] border-solid border-[#ffc7001a]" />
            <div className="absolute top-[424px] left-[419px] [font-family:'Prompt-Bold',Helvetica] font-bold text-white text-[88.4px] tracking-[0] leading-[99px]">
              Teach &amp; Train
              <br />
              Your Puppy
            </div>
          </div>
          <div className="absolute w-[1236px] h-[1299px] top-[137px] left-[785px]">
            <div className="absolute w-[1236px] h-[678px] top-[621px] left-0 rounded-[618px/339px] border-[100px] border-solid border-[#ffc7001a]" />
            <img className="absolute w-[828px] h-[1115px] top-0 left-[384px] object-cover" alt="Dog" src={heroDog}/>    
          </div>
          <p className="absolute top-[635px] left-[422px] [font-family:'Prompt-Regular',Helvetica] font-normal text-white text-[35px] tracking-[0] leading-[normal]">
            Expert Guidance for
            <br />a Well-Behaved Companion
          </p>
        </div>
        <div className="flex w-[284px] items-center justify-center gap-[11.28px] px-[38.61px] py-[16.92px] absolute top-[763px] left-[422px] bg-[#ffc700] rounded-[15px]">
          <div className="relative w-fit mt-[-1.13px] [font-family:'Prompt-SemiBold',Helvetica] font-semibold text-[#24292f] text-[25px] tracking-[0] leading-[normal]">
            Get Started
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

