import React from 'react'
import heroDog from "../assets/heroDog.png"



const Hero = () => {
  return (
    <div className="w-full h-[800px] bg-white overflow-hidden [background:linear-gradient(180deg,rgb(110,45,88)_0%,rgb(82.01,18.04,60.36)_100%)] bg-[url(/hero.png)] bg-cover bg-[50%_50%]">
      <div className="relative w-full h-[100vh] top-[-82px] left-[-321px]">
        <div className="absolute w-full h-[100vh] top-0 left-0">
          <div className="absolute w-full h-[622px] top-0 left-0">
            <div className="absolute w-full h-[596px] top-0 left-0 rounded-[298px] border-[100px] border-solid border-[#ffc7001a]" />
            <div className="absolute top-[304px] left-[419px] font-family:'Prompt-Bold',Helvetica font-bold text-white text-[80px] tracking-[0] leading-[99px]">
              Teach &amp; Train
              <br />
              Your Puppy
            </div>
          </div>
          <div className="absolute w-full h-auto top-[180px] left-[750px]">
            <div className="absolute w-[full] h-[678px] top-[621px] left-0 rounded-[618px/339px] border-[100px] border-solid border-[#ffc7001a]" />
            <img className="absolute w-[450px] h-[450px] top-20 left-[384px] object-cover" alt="Dog" src={heroDog} />
          </div>
          <p className="absolute top-[525px] left-[422px] font-family:'Prompt-Regular',Helvetica font-normal text-white text-[26px] tracking-[0] leading-[normal]">
            Expert Guidance for
            <br />a Well-Behaved Companion
          </p>
        </div>
        <div className="flex w-[200px] items-center justify-center gap-[11.28px] px-[38.61px] py-[16.92px] absolute top-[653px] left-[422px] bg-[#ffc700] rounded-[15px]">
          <div className="relative w-fit mt-[-1.13px] font-family:'Prompt-SemiBold',Helvetica font-semibold text-[#24292f] text-[18px] tracking-[0] leading-[normal]">
            Get Started
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

