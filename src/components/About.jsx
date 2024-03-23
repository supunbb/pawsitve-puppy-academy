import React from 'react'
import Ellipse from "../assets/Ellipse.png"

const About = () => {
  return (
    <div>
        <div className="w-[1440px] h-[1024px] bg-[#ffffffd9] bg-[url(/about-US.png)] bg-cover bg-[50%_50%]">
      <div className="relative w-[1269px] h-[688px] top-[144px] left-[85px]">
        <div className="absolute w-[1269px] h-[656px] top-0 left-0">
          <img className="absolute w-[583px] h-[575px] top-[81px] left-[686px]" alt="Ellipse" src={Ellipse} />
          <div className="absolute w-[580px] h-[638px] top-0 left-0">
            <p className="absolute top-0 left-0 [font-family:'Prompt-Bold',Helvetica] font-bold text-transparent text-[60px] tracking-[0] leading-[normal]">
              <span className="text-[#6e2d58]">About</span>
              <span className="text-[#24292f]">&nbsp;</span>
              <span className="text-[#6e2d58]">us</span>
            </p>
            <p className="absolute w-[576px] top-[138px] left-0 [font-family:'Prompt-Regular',Helvetica] font-normal text-black text-[30px] text-justify tracking-[0] leading-[normal]">
              At Pawsitive Pup Academy, we&#39;re dedicated to fostering strong bonds between dogs and their families
              through positive reinforcement training methods. With years of experience, our mission is to cultivate
              well-behaved, happy dogs while promoting responsible pet ownership and enriching the lives of both pets
              and their owners.
            </p>
          </div>
        </div>
        <div className="flex w-[250px] h-[65px] items-center justify-center gap-[11.28px] pl-[38.61px] pr-[40px] py-[16.92px] absolute top-[623px] left-[163px] rounded-[15px] border-2 border-solid border-[#6e2d58]">
          <div className="relative w-fit mt-[-5.42px] mb-[-1.42px] [font-family:'Prompt-Medium',Helvetica] font-medium text-[#6e2d58] text-[25px] tracking-[0] leading-[normal]">
            Read More
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About