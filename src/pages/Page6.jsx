import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { Link } from "react-router-dom";
import { RiH1 } from "react-icons/ri";

const Page6 = () => {
  const projectVideo = [
    {
      title: "Project:- 1",
      videoSrc: "src/video/Screen.mp4",
      repoLink: "https://samirakhtar7.github.io/Ochi/",
    },
    {
      title: "Project:- 2",
      videoSrc: "src/video/BaileyBrown1.mp4",
      repoLink: "https://samirakhtar7.github.io/Bailey-Brown/",
    },
    {
      title: "Project:- 3",
      videoSrc: "src/video/js.mp4",
      repoLink: "https://samirakhtar7.github.io/Jstimler-/",
    },
    {
      title: "Project:- 5",
      videoSrc: "src/video/v1.mp4",
      repoLink: "https://samirakhtar7.github.io/14islands/",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 p-10 rounded-lg ">
      {projectVideo.map((video, index) => (
        <div key={index} className="relative rounded-lg">
          <video
            loop
            muted
            autoPlay={true}
            className="w-full h-[50vh] rounded-lg transform  transition duration-300 hover:scale-105"
            src={video.videoSrc}
          />
          <h1 className="text-gray-500 font-[anzo1]"> {video.title}</h1>
          <a
            href={video.repoLink}
            target="_blank"
            
            className="project-link text-sm font-[anzo2 ] underline"
          >
            View on GitHub
          </a>
        </div>
      ))}
    </div>
  );
};

export default Page6;
