import React from "react";
import "remixicon/fonts/remixicon.css";
import { CgMenuGridO } from "react-icons/cg";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { BiRepeat } from "react-icons/bi";

const Header = () => {
  useGSAP(() => {
    gsap.to('#button', {
      scale: 1.1,
      duration:1,
ease: "bounce.out",
       repeat: -1
    })
  })

  useGSAP(() => {
    gsap.from(".hire", {
      x: 300,
      opacity: 0,
      duration: 2.5,
      delay: 1,
      ease: "bounce.out",
    });
  })
  // useGSAP(() => {
  //   gsap.to(".menu", {
  //     x:1270,
  //   })
  // })
  return (
    <div className="fixed end-10 text-white w-fit flex items-center justify-end z-10 px-8 py-20  ">
      <button
        id="button"
        className="hire bg-black px-8 py-2 opacity-1  border-4 text-sm text-white  rounded-full hover:bg-gray-500  "
      >
        Hire me
      </button>
      <i className="menu text-4xl ml-5">
        <CgMenuGridO />
      </i>
    </div>
  );
};

export default Header;
