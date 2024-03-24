import React from 'react'
import d1 from "../assets/D1.png"
import d2 from "../assets/D2.png"
import d3 from "../assets/D3.png"
import d4 from "../assets/D4.png"
import d5 from "../assets/D5.png"

const Gallery = () => {
  return (
    <div class="w-full h-[1024px] relative bg-white bg-opacity-90">
      <div class="left-[121px] top-[49px] absolute text-fuchsia-900 text-6xl font-bold font-family:'Prompt-Bold',Helvetica">Meet Our Students</div>

      <img className="w-[540px] h-[300px] left-[121px] top-[207px] absolute bg-gradient-to-b from-black to-black rounded-[20px]" src={d1} alt="" />
      <img className="w-[345px] h-[320px] left-[121px] top-[540px] absolute bg-gradient-to-b from-black to-black rounded-[20px]" src={d3} alt="" />
      <img className="w-[345px] h-[320px] left-[505px] top-[540px] absolute bg-gradient-to-b from-black to-black rounded-[20px]" src={d4} alt="" />
      <img className="w-[345px] h-[320px] left-[890px] top-[540px] absolute bg-gradient-to-b from-black to-black rounded-[20px]" src={d5} alt="" />
      <img className="w-[540px] h-[300px] left-[690px] top-[207px] absolute bg-gradient-to-b from-black to-black rounded-[20px]" src={d2} alt="" />

      <div class="w-[210px] h-[50px] pl-[38.61px] pr-10 py-[16.92px] left-[1069px] top-[60px] absolute bg-white bg-opacity-0 rounded-[15px] border-2 border-fuchsia-900 justify-center items-center gap-[11.28px] inline-flex">
        <div class="text-fuchsia-900 text-[18px] font-medium font-family:'Prompt-Medium',Helvetica">View Gallery</div>
      </div>
    </div>

  )
}

export default Gallery

