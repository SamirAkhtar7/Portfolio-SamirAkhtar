import React from 'react'
import i1 from "../assets/gg.webp"
import i2 from "../assets/ss.webp";

const Page5 = () => {
  return (
    <>
      <div className=' mt-50 bg-[url("./assets/ss.webp")] bg-center bg-contain bg-no-repeat bg-fixed'>
        <img
          className=" relative h-[150vh] w-full "
          src={i2}
          alt=""
        />
      </div>
      {/* <div className=" flex justify-center items-start bg-[#fafafa] w-full h-[200vh]">
        <img
          className="-mt-10  object-center w-1/2"
          src="src/assets/astroMe(1).webp"
          alt=""
        />
      </div> */}
    </>
  );
}

export default Page5