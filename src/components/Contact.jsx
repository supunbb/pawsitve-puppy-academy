import React from 'react'
import map from "../assets/MAP.png"

const Contact = () => {
  return (
    <div class="w-full h-[1024px] relative bg-gray-200 bg-opacity-95 font-family:'Prompt-Medium',Helvetica">
      <div class="h-[167px] left-0 top-[134px] absolute">
        <div class="w-[500px] left-[520px] top-0 absolute text-fuchsia-900 text-6xl font-bold font-family:'Prompt-Medium',Helvetica">Contact Us</div>
        <div class="w-[1250px] left-[80px] top-[80px] absolute text-center text-zinc-800 text-[23px] font-normal font-family:'Prompt-Normal',Helvetica">Got questions or ready to begin your dog's training journey? Reach out to us today for personalized assistance and guidance.</div>

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
        <div class="w-[300px] left-[10px] top-[2px] absolute text-fuchsia-900 text-lg font-normal font-['Prompt'] flex items-center gap-2">
          <img src='icons8-location-96 (1).png' alt='location' className='w-[25px]' />
          <p>No 720, Colombo Road, Kandy</p></div>
      </div>
      <div class="left-[836px] top-[459px] absolute">
        <div class="w-8 h-8 pl-[2.99px] pr-[3px] py-[3px] left-0 top-0 absolute justify-center items-center inline-flex"></div>
        <div class="w-[300px] left-[10px] top-[2px] absolute text-fuchsia-900 text-lg font-normal font-['Prompt'] flex items-center gap-2">
          <img src='/icons8-phone-100 (1).png' alt='mobile' className='w-[25px]' />
          <p>+94 77 2222 222</p>
        </div>
      </div>
      <div class="left-[836px] top-[526px] absolute">
        <div class="w-8 h-8 px-[2.67px] py-[5.33px] left-0 top-0 absolute justify-center items-center inline-flex"></div>
        <div class="w-[300px] left-[10px] top-[2px] absolute text-fuchsia-900 text-lg font-normal font-['Prompt'] flex items-center gap-2">
          <img src='/icons8-mail-96.png' alt='mail' className='w-[25px]' />
          <p>info@pawsitivepupacedy.com</p>
        </div>
      </div>
      <img class="w-[480px] h-[270px] left-[837px] top-[593px] absolute" src={map} />
      <div class="w-[230px] px-[38.61px] py-[14px] left-[289px] top-[822px] absolute bg-yellow-400 rounded-[15px] justify-center items-center gap-[11.28px] inline-flex">
        <div class="text-zinc-800 text-[16px] font-medium font-['Prompt']">Submit</div>
      </div>
    </div>
  )
}

export default Contact