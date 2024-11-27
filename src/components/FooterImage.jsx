import { useGSAP } from '@gsap/react';
import React from 'react'
import { gsap } from "gsap";

const FooterImage = () => {
  
    useGSAP(() => {
        gsap.to('#banner img ', {
            rotate: 360,
            duration: 5,
            repeat: -1,
            ease: "linear",
        })
    })
    return (
      <div className=" z-10 fixed bottom-10 right-20 " id="banner">
        <img
          className=""
          src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png"
          alt=""
        />
        <img
          className="mt-10"
          src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EN_legend_large.png"
          alt=""
        />
      </div>
    );
}

export default FooterImage