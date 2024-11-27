import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'

const TiltText = (props) => {

   useGSAP(() => {
     gsap.from(".web", {
       y: 60,
       duration: 1,
       delay:.8,
       opacity: 0,
       
     });
   });

  return (
    <>
      <div id="tiltDiv" ref={props.abc} className=" tra mt-[15vh] px-20 w-fit ">
        <h1 className="text-[4.2vw] text-white uppercase leading-[4vw] font-[anzo]">
          I am
          <span className=" absolute web  overflow-hidden text-[#000] [text-shadow:_0_8px_8px_#CFB3B5] font-[anzo]">
            Web
            <span className="text-white [text-shadow:_0_0px_0px_#CFB3B5]">
              ™
            </span>
          </span>
        </h1>
        <h1 className="text-[8vw] text-white leading-[7vw] font-[anzo1]">
          Developer
        </h1>
        <h1 className="text-[4.2vw] text-white leading-[4vw] uppercase font-[anzo]">
          To hire
        </h1>
      </div>
    </>
  );
}

export default TiltText