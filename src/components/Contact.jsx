import React from 'react'
import map from "../assets/MAP.png"

const Contact = () => {
  return (
    <div class="w-[1440px] h-[1024px] relative bg-gray-200 bg-opacity-95">
  <div class="h-[167px] left-[97px] top-[134px] absolute">
    <div class="w-[1265px] left-0 top-[91px] absolute text-center text-zinc-800 text-[25px] font-normal font-['Prompt']">Got questions or ready to begin your dog's training journey? Reach out to us today for personalized assistance and guidance.</div>
    <div class="left-[468px] top-0 absolute text-fuchsia-900 text-6xl font-bold font-['Prompt']">Contact Us.</div>
  </div>
  <div class="w-[1440px] h-[605px] left-0 top-[313px] absolute"></div>
  <div class="w-[661px] h-[425px] left-[99px] top-[359px] absolute">
    <div class="left-0 top-0 absolute text-fuchsia-900 text-[25px] font-medium font-['Prompt']">Leave us a Message</div>
    <div class="w-80 h-[52px] left-[2px] top-[56px] absolute">
      <div class="w-80 h-[52px] left-0 top-0 absolute bg-slate-50 rounded-[7px]"></div>
      <div class="left-[14px] top-[14px] absolute opacity-50 text-fuchsia-900 text-[16.84px] font-normal font-['Prompt']">First Name</div>
    </div>
    <div class="w-80 h-[52px] left-[2px] top-[140px] absolute">
      <div class="w-80 h-[52px] left-0 top-0 absolute bg-slate-50 rounded-[7px]"></div>
      <div class="left-[14px] top-[14px] absolute opacity-50 text-fuchsia-900 text-[16.84px] font-normal font-['Prompt']">Email</div>
    </div>
    <div class="w-80 h-[52px] left-[341px] top-[140px] absolute">
      <div class="w-80 h-[52px] left-0 top-0 absolute bg-slate-50 rounded-[7px]"></div>
      <div class="left-[14px] top-[14px] absolute opacity-50 text-fuchsia-900 text-[16.84px] font-normal font-['Prompt']">Subject</div>
    </div>
    <div class="w-80 h-[52px] left-[341px] top-[62px] absolute">
      <div class="w-80 h-[52px] left-0 top-0 absolute bg-slate-50 rounded-[7px]"></div>
      <div class="left-[14px] top-[14px] absolute opacity-50 text-fuchsia-900 text-[16.84px] font-normal font-['Prompt']">Phone</div>
    </div>
    <div class="w-[659px] h-[215px] left-[2px] top-[210px] absolute">
      <div class="w-[659px] h-[215px] left-0 top-0 absolute bg-slate-50 rounded-[7px]"></div>
      <div class="left-[14px] top-[13px] absolute opacity-50 text-fuchsia-900 text-[16.84px] font-normal font-['Prompt']">Write Your Message</div>
    </div>
  </div>
  <div class="left-[836px] top-[392px] absolute">
    <div class="w-8 h-8 left-0 top-0 absolute flex-col justify-start items-start inline-flex"></div>
    <div class="left-[47px] top-[2px] absolute text-fuchsia-900 text-lg font-normal font-['Prompt']">No 720, Colombo Road, Kandy</div>
  </div>
  <div class="left-[836px] top-[459px] absolute">
    <div class="w-8 h-8 pl-[2.99px] pr-[3px] py-[3px] left-0 top-0 absolute justify-center items-center inline-flex"></div>
    <div class="left-[47px] top-[2px] absolute text-fuchsia-900 text-lg font-normal font-['Prompt']">+94 77 2222 222</div>
  </div>
  <div class="left-[836px] top-[526px] absolute">
    <div class="w-8 h-8 px-[2.67px] py-[5.33px] left-0 top-0 absolute justify-center items-center inline-flex"></div>
    <div class="left-[47px] top-[2px] absolute text-fuchsia-900 text-lg font-normal font-['Prompt']">info@pawsitivepupacedy.com</div>
  </div>
  <img class="w-[510px] h-[270px] left-[837px] top-[593px] absolute" src={map} />
  <div class="w-[284px] px-[38.61px] py-[16.92px] left-[289px] top-[822px] absolute bg-yellow-400 rounded-[15px] justify-center items-center gap-[11.28px] inline-flex">
    <div class="text-zinc-800 text-[22.42px] font-medium font-['Prompt']">Submit</div>
  </div>
</div>
  )
}

export default Contact