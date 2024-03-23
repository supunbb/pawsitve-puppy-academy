import React from 'react'
import s1 from "../assets/s1.png"
import s2 from "../assets/s2.png"
import s3 from "../assets/s3.png"

const Services = () => {
  return (
    <div className="w-[1440px] h-[1024px] bg-[#ffffffbf] bg-[url(/our-sevices.png)] bg-cover bg-[50%_50%]">
    <div className="relative w-[1284px] h-[756px] top-[105px] left-[78px]">
      <div className="absolute w-[1269px] h-[167px] top-0 left-[19px]">
        <p className="absolute w-[1265px] top-[91px] left-0 [font-family:'Prompt-Regular',Helvetica] font-normal text-[#24292f] text-[25px] text-center tracking-[0] leading-[normal]">
          Comprehensive dog training services tailored to your pet&#39;s needs, promoting obedience, agility, behavior
          modification, and puppy development.
        </p>
        <div className="absolute top-0 left-[321px] [font-family:'Prompt-Bold',Helvetica] font-bold text-[#6e2d58] text-[60px] tracking-[0] leading-[normal]">
          Our Popular Services
        </div>
      </div>
      <div className="left-0 absolute w-[401px] h-[563px] top-[193px]">
        <div className="relative w-[395px] h-[563px] bg-white rounded-[15px] shadow-[0px_4px_4px_#00000040]">
          <img
            className="absolute w-[365px] h-[362px] top-[15px] left-[15px]"
            alt="Rectangle"
            src={s1}
          />
          <div className="absolute top-[381px] left-[25px] [font-family:'Prompt-Medium',Helvetica] font-medium text-[#6e2d58] text-[25px] tracking-[0] leading-[normal]">
            Agility Training
          </div>
          <div className="absolute w-[355px] h-[129px] top-[419px] left-[25px]">
            <p className="absolute top-[99px] left-0 [font-family:'Prompt-Regular',Helvetica] font-normal text-transparent text-[20px] tracking-[0] leading-[normal]">
              <span className="text-[#24292f]">Learn More</span>
              <span className="text-white">&nbsp;</span>
              <span className="text-[#ffc700]">&gt;</span>
            </p>
            <p className="absolute w-[355px] top-0 left-0 [font-family:'Prompt-Regular',Helvetica] font-normal text-black text-[18px] tracking-[0] leading-[normal]">
              Enhance your dog&#39;s agility, speed, and coordination through fun and stimulating obstacle courses.
            </p>
          </div>
        </div>
      </div>
      <div className="left-[435px] absolute w-[401px] h-[563px] top-[193px]">
        <div className="relative w-[395px] h-[563px] bg-white rounded-[15px] shadow-[0px_4px_4px_#00000040]">
          <img
            className="absolute w-[365px] h-[362px] top-[15px] left-[15px]"
            alt="Rectangle"
            src={s2}
          />
          <div className="absolute top-[381px] left-[25px] [font-family:'Prompt-Medium',Helvetica] font-medium text-[#6e2d58] text-[25px] tracking-[0] leading-[normal]">
            Puppy Training
          </div>
          <div className="absolute w-[355px] h-[129px] top-[419px] left-[25px]">
            <p className="absolute top-[99px] left-0 [font-family:'Prompt-Regular',Helvetica] font-normal text-transparent text-[20px] tracking-[0] leading-[normal]">
              <span className="text-[#24292f]">Learn More</span>
              <span className="text-white">&nbsp;</span>
              <span className="text-[#ffc700]">&gt;</span>
            </p>
            <p className="absolute w-[355px] top-0 left-0 [font-family:'Prompt-Regular',Helvetica] font-normal text-[#24292f] text-[18px] tracking-[0] leading-[normal]">
              Lay a solid foundation for your puppy&#39;s development with socialization, basic commands, and potty
              training guidance.
            </p>
          </div>
        </div>
      </div>
      <div className="left-[880px] absolute w-[401px] h-[563px] top-[193px]">
        <div className="relative w-[395px] h-[563px] bg-white rounded-[15px] shadow-[0px_4px_4px_#00000040]">
          <img className="absolute w-[365px] h-[362px] top-[15px] left-[15px]" alt="Rectangle" src={s3} />
          <div className="absolute top-[381px] left-[25px] [font-family:'Prompt-Medium',Helvetica] font-medium text-[#6e2d58] text-[25px] tracking-[0] leading-[normal]">
            Behavioral Training
          </div>
          <div className="absolute w-[355px] h-[129px] top-[419px] left-[25px]">
            <p className="absolute top-[99px] left-0 [font-family:'Prompt-Regular',Helvetica] font-normal text-transparent text-[20px] tracking-[0] leading-[normal]">
              <span className="text-[#24292f]">Learn More </span>
              <span className="text-[#ffc700]">&gt;</span>
            </p>
            <p className="absolute w-[355px] top-0 left-0 [font-family:'Prompt-Regular',Helvetica] font-normal text-[#24292f] text-[18px] tracking-[0] leading-[normal]">
              Address and modify problematic behaviors such as aggression, anxiety, or excessive barking.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Services