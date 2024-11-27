import React, { useRef,useState } from "react";

import HeaderImages from "../components/Images";
import { gsap } from "gsap";
import TiltText from "../components/TiltText";
import { useGSAP } from "@gsap/react";
import FooterImage from "../components/FooterImage";

const Page1 = () => {
 const tiltRef = useRef(null);
 const [xVal, setXVal] = useState(0);
 const [yVal, setYVal] = useState(0);
  const mouseMoving = (e) => {
     setXVal(
       (e.clientX -
         tiltRef.current.getBoundingClientRect().x -
         tiltRef.current.getBoundingClientRect().width / 2) /
         20
     );
     setYVal(
       -(
         e.clientY -
         tiltRef.current.getBoundingClientRect().y -
         tiltRef.current.getBoundingClientRect().height / 2
       ) / 8
     );
  }
   useGSAP(
     function () {
       gsap.to(tiltRef.current, {
         transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
         duration: 5,
         ease: "elastic.out(1,0.3)",
       });
     },
     [xVal, yVal]
   );

  return (
    
    <div
      onMouseMove={(e) => {
        mouseMoving(e);
      }}
      className="relative h-screen  bg-white px-[1vw] py-[1vw]"
    >
      <div
        id="page1"
        //   className="h-full w-full rounded-[2.2vw] bg-cover shadow-inner  shadow-gray-700
        //  bg-black bg-[url('https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1861,h_874,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_auto/ANZO.jpg')]"
        className=" relative h-full w-full rounded-[2.2vw] bg-cover shadow-inner  shadow-gray-700 
        bg-[url('./assets/a2.jpg')]"
      >
        <HeaderImages />
        <TiltText abc={tiltRef} />
        
      </div>
    </div>
  );
};

export default Page1;
