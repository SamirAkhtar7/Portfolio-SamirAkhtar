import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

const Page2 = () => {
  gsap.registerPlugin(ScrollTrigger)
  
  
  

    useGSAP(() => {
        
        gsap.from(".h1", {
            transform: 'rotateX(-90deg)',
            opacity: 0,
            duration: 1,
            stagger:1,
            scrollTrigger: {
                trigger: '.h1',
                // markers: true,
                start: "top 60%",
                end: "top -400%",
                scrub: 2
            }
        })
    
})


  return (
    <>
      <div
        id="page2"
        
        className="bg-white text-black text-center leading-[33vw] overflow-hidden "
      >

        <h3 className="font-[anzo2] mt-10 mb-20 text-[1.2vw] leading-none ">
          © Samir.Akhtar 2024 | designed and developed
        </h3>

        <div className="h1">
          <h1 className=" text-[41vw] font-[anzo4]">IMPACTFUL</h1>
        </div>
        <div className="h1">
          <h1 className=" text-[41vw] font-[anzo4]">DESIGN</h1>
        </div>

        <div className="h1">
          <h1 className="text-[41vw] font-[anzo4]">IS THE</h1>
        </div>
        <div className="h1">
          <h1 className=" text-[41vw] font-[anzo4]">DESIGN</h1>
        </div>
        <div className="h1">
          <h1 className=" text-[41vw] font-[anzo4]">THAT</h1>
        </div>
        <div className="h1">
          <h1 className=" text-[41vw] mb-[10vh] font-[anzo4]">WORKS!</h1>
        </div>
      </div>
    </>
  );
};

export default Page2;
