import React from 'react'

const Footer = () => {
  return (
    <div className=" relative w-full h-screen bg-black text-white  p-10">
      <h1 className="text-[15vw] text-white font-[a5] capitalize leading-tight tracking-tighter">
        Samir
      </h1>
      <h1 className=" absolute left-[33vw] top-[34vh] text-[15vw] text-white font-[a5] capitalize leading-tight tracking-tighter -mt-20 ">
        Akhatr
      </h1>
      <h3 className="font-[anzo1] text-xl mt-20 ">For all inquiries: </h3>
      <h3 className="font-[a3] text-4xl  ml-10  mb-5 mt-5 ">
        {" "}
        samir.akhtar444@gamil.com
      </h3>
      <a className="text-xl ml-20 " href="">
        INSTAGRAM
      </a>
      <a className="text-xl ml-10 " href="">
        GitHUB
      </a>
      <a className="text-xl  ml-10" href="">
        LINKEDIN
      </a>
      <div className="absolute bottom-0 left-0 ">
        <h1 className="text-xl font-[a5]">+91 9829942444</h1>
      </div>
    </div>
  );
}

export default Footer