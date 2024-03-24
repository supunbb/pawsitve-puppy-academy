import React from 'react'
import stars from "../assets/star.png"
import t1 from "../assets/T1.png"
import t2 from "../assets/T2.png"
import t3 from "../assets/T3.png"
import t4 from "../assets/T4.png"



const Testimonials = () => {
  return (
    <div className="w-full h-[1000px] bg-[#ffffffd9] bg-[url:'./testimonials.png'] bg-cover bg-[50%,50%]">
      <div className="relative w-[1270px] h-[785px] top-[120px] left-[88px]">
        <p className="absolute top-0 left-0 font-family:'Prompt-Bold',Helvetica font-bold text-[#6e2d58] text-[60px] tracking-[0] leading-[normal]">
          What Our Clients
          <br />
          Say About Us.
        </p>

        <p className="absolute w-[530px] top-[45px] left-[630px] font-family:'Prompt-Regular',Helvetica font-normal text-[#24292f] text-[23px] tracking-[0] leading-[normal]">
          Discover what our clients have to say about their experiences with us – real stories of successful dog
          transformations.
        </p>


        <div className="top-[220px] left-0 absolute w-[520px] h-[210px] bg-white rounded-[19px] shadow-[4px_4px_4px_#0000001a]">
          <div className="relative w-[562px] h-[245px] top-[16px] left-[24px]">
            <img className="absolute w-[180px] h-[180px] top-0 left-0" alt="Rectangle" src={t1} />
            <div className="absolute w-[288px] h-[171px] top-[37px] left-[278px]">
              <div className="absolute top-[95px] left-[-70px] font-family:'Prompt-Medium',Helvetica font-medium text-[#24292f] text-[15px] tracking-[0] leading-[normal]">
                - Sarah Ranasingha -
              </div>
              <img className="absolute w-[110px] h-[22px] top-[-10px] left-[-70px]" alt="Group" src={stars} />
              <p className="absolute w-[250px] top-[25px] left-[-70px] font-family:'Prompt-Regular',Helvetica font-normal text-[#24292f] text-[13px] tracking-[0] leading-[normal]">
                Outstanding results! Our dog, Max, transformed remarkably. Highly recommend Pawsitive Pup Academy
              </p>
            </div>
          </div>
        </div>

        <div className="top-[470px] left-0 absolute w-[520px] h-[210px] bg-white rounded-[19px] shadow-[4px_4px_4px_#0000001a]">
          <div className="relative w-[562px] h-[245px] top-[16px] left-[24px]">
            <img className="absolute w-[180px] h-[180px] top-0 left-0" alt="Rectangle" src={t2} />
            <div className="absolute w-[288px] h-[171px] top-[37px] left-[278px]">
              <div className="absolute top-[95px] left-[-70px] font-family:'Prompt-Medium',Helvetica font-medium text-[#24292f] text-[15px] tracking-[0] leading-[normal]">
                - Rachel Green -
              </div>
              <img className="absolute w-[110px] h-[22px] top-[-10px] left-[-70px]" alt="Group" src={stars} />
              <p className="absolute w-[250px] top-[25px] left-[-70px] font-family:'Prompt-Regular',Helvetica font-normal text-[#24292f] text-[13px] tracking-[0] leading-[normal]">
                Incredible experience! Professional, caring staff. Our pup, Luna, is now a well-behaved joy.
              </p>
            </div>
          </div>
        </div>

        <div className="top-[220px] left-[630px] absolute w-[520px] h-[210px] bg-white rounded-[19px] shadow-[4px_4px_4px_#0000001a]">
          <div className="relative w-[562px] h-[245px] top-[16px] left-[24px]">
            <img className="absolute w-[180px] h-[180px] top-0 left-0" alt="Rectangle" src={t3} />
            <div className="absolute w-[288px] h-[171px] top-[37px] left-[278px]">
              <div className="absolute top-[95px] left-[-70px] font-family:'Prompt-Medium',Helvetica font-medium text-[#24292f] text-[15px] tracking-[0] leading-[normal]">
                - Emily Samanmali -
              </div>
              <img className="absolute w-[110px] h-[22px] top-[-10px] left-[-70px]" alt="Group" src={stars} />
              <p className="absolute w-[283px] top-[25px] left-[-70px] font-family:'Prompt-Regular',Helvetica font-normal text-[#24292f] text-[13px] tracking-[0] leading-[normal]">
                Exceptional trainers! Our dog&#39;s behavior improved immensely. Grateful for the positive impact.
              </p>
            </div>
          </div>
        </div>

        <div className="top-[470px] left-[630px] absolute w-[520px] h-[210px] bg-white rounded-[19px] shadow-[4px_4px_4px_#0000001a]">
          <div className="relative w-[562px] h-[245px] top-[16px] left-[24px]">
            <img className="absolute w-[180px] h-[180px] top-0 left-0" alt="Rectangle" src={t4} />
            <div className="absolute w-[288px] h-[171px] top-[37px] left-[278px]">
              <div className="absolute top-[95px] left-[-70px] font-family:'Prompt-Medium',Helvetica] font-medium text-[#24292f] text-[15px] tracking-[0] leading-[normal]">
                - Lisa Samarathunga -
              </div>
              <img className="absolute w-[110px] h-[22px] top-[-10px] left-[-70px]" alt="Group" src={stars} />
              <p className="absolute w-[283px] top-[25px] left-[-70px] font-family:'Prompt-Regular',Helvetica] font-normal text-[#24292f] text-[13px] tracking-[0] leading-[normal]">
                Amazing results! Our anxious dog, Bella, is now confident and happy. Thank you, Pawsitive Pup Academy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials