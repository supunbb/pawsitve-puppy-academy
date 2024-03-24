import React from 'react'
import s1 from "../assets/s1.png"
import s2 from "../assets/s2.png"
import s3 from "../assets/s3.png"

const Services = () => {
  return (
    <div className="w-full h-[900px] bg-[#ffffffbf] bg-[url(/our-sevices.png)] bg-cover bg-[50%_50%]">
      <div className="relative w-full h-auto top-[105px] left-[78px]">
        <div className="absolute w-[80%] h-[167px] top-0 left-[19px]">
          <div className="absolute top-0 left-[345px] font-family:'Prompt-Bold',Helvetica font-bold text-[#6e2d58] text-[50px] tracking-[0] leading-[normal]">
            Our Popular Services
          </div>

          <p className="absolute w-[80%] top-[91px] left-[30px] font-family:'Prompt-Regular',Helvetica font-normal text-[#24292f] text-[21px] text-center tracking-[0] leading-[normal]">
            Comprehensive dog training services tailored to your pet&#39;s needs, promoting obedience, agility, behavior
            modification, and puppy development.
          </p>

        </div>

        <div className="left-0 absolute w-[420px] h-[563px] top-[193px]">
          <div className="relative w-[330px] h-[505px] bg-white rounded-[15px] shadow-[0px_4px_4px_#00000040]">
            <img
              className="absolute w-[300px] h-[302px] top-[15px] left-[15px]"
              alt="Rectangle"
              src={s1}
            />
            <div className="absolute top-[340px] left-[25px] font-family:'Prompt-Medium',Helvetica font-medium text-[#6e2d58] text-[20px] tracking-[0] leading-[normal]">
              Agility Training
            </div>
            <div className="absolute w-[355px] h-[129px] top-[419px] left-[25px]">
              <p className="absolute top-[50px] left-0 font-family:'Prompt-Regular',Helvetica font-normal text-transparent text-[13px] tracking-[0] leading-[normal] cursor-pointer">
                <span className="text-[#24292f]">Learn More</span>
                <span className="text-white">&nbsp;</span>
                <span className="text-[#ffc700]">&gt;</span>
              </p>
              <p className="absolute w-[290px] top-[-40px] left-0 font-family:'Prompt-Regular',Helvetica font-normal text-black text-[14.5px] tracking-[0] leading-[normal]">
                Enhance your dog&#39;s agility, speed, and coordination through fun and stimulating obstacle courses.
              </p>
            </div>
          </div>
        </div>

        <div className="left-[435px] absolute w-[401px] h-[563px] top-[193px]">
          <div className="relative w-[330px] h-[505px] bg-white rounded-[15px] shadow-[0px_4px_4px_#00000040]">
            <img
              className="absolute w-[300px] h-[302px] top-[15px] left-[15px]"
              alt="Rectangle"
              src={s2}
            />
            <div className="absolute top-[340px] left-[25px] font-family:'Prompt-Medium',Helvetica font-medium text-[#6e2d58] text-[20px] tracking-[0] leading-[normal]">
              Puppy Training
            </div>
            <div className="absolute w-[355px] h-[129px] top-[419px] left-[25px]">
              <p className="absolute top-[50px] left-0 font-family:'Prompt-Regular',Helvetica font-normal text-transparent text-[13px] tracking-[0] leading-[normal] cursor-pointer">
                <span className="text-[#24292f]">Learn More</span>
                <span className="text-white">&nbsp;</span>
                <span className="text-[#ffc700]">&gt;</span>
              </p>
              <p className="absolute w-[290px] top-[-40px] left-0 font-family:'Prompt-Regular',Helvetica font-normal text-[#24292f] text-[14.5px] tracking-[0] leading-[normal]">
                Lay a solid foundation for your puppy&#39;s development with socialization, basic commands, and potty
                training guidance.
              </p>
            </div>
          </div>
        </div>

        <div className="left-[880px] absolute w-[401px] h-[563px] top-[193px]">
          <div className="relative w-[330px] h-[505px] bg-white rounded-[15px] shadow-[0px_4px_4px_#00000040]">
            <img className="absolute w-[300px] h-[302px] top-[15px] left-[15px]" alt="Rectangle" src={s3} />
            <div className="absolute top-[340px] left-[25px] font-family:'Prompt-Medium',Helvetica font-medium text-[#6e2d58] text-[20px] tracking-[0] leading-[normal]">
              Behavioral Training
            </div>
            <div className="absolute w-[355px] h-[129px] top-[419px] left-[25px]">
              <p className="absolute top-[50px] left-0 font-family:'Prompt-Regular',Helvetica font-normal text-transparent text-[13px] tracking-[0] leading-[normal] cursor-pointer">
                <span className="text-[#24292f]">Learn More </span>
                <span className="text-white">&nbsp;</span>
                <span className="text-[#ffc700]">&gt;</span>
              </p>
              <p className="absolute w-[290px] top-[-40px] left-0 font-family:'Prompt-Regular',Helvetica font-normal text-[#24292f] text-[14.5px] tracking-[0] leading-[normal]">
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