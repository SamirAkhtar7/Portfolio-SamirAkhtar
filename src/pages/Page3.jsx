import React from "react";

export const Page3 = () => {
  return (
    <div className="relative h-screen bg-white px-[1vw] py-[1vw] ">
      <div
        className=" relative h-full w-full rounded-[2.2vw] shadow-inner shadow-gray-700 
        "
      >
        <video
          autoPlay="true"
          muted
          loop
          className="bgVideo  rounded-[2.2vw] w-full h-full object-cover z-10"
          src="https://video.wixstatic.com/video/11062b_cb0c4d13153f4008920bb26beda8de0f/720p/mp4/file.mp4"
        ></video>
        <div className=" absolute object-cover z-1 right-20 top-20">
          <video
            autoPlay="true"
            muted
            loop
            className="video "
            src="/src/video/video2.mp4"
          ></video>
        </div>

        <div className=" absolute top-0 leading-[17vw] mt-10 text-white ml-20">
          <h1 className="text-[#9B9B9B] text-[20vw] font-[anzo4]">WHAT</h1>
          <h1 className="text-[20vw] font-[anzo4]">I DO</h1>
          <div className="text-xl leading-2 mt-5 font-[anzo1]">
            <h3>I DESIGN AND DEVELOP</h3>
            <h3 className=" text-[#9B9B9B] font-[anzo2]">
              MODERN, IMPACTFUL AND LUXURIOUS
            </h3>
            <h3>
              websites that seamlessly bridge your goals with needs of your
              clients.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
