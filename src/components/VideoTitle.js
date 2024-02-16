import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute bg-gradient-to-r from-black w-[100%] aspect-video text-white ">
      <div className="ml-8 mt-[22%] pl-12">
        <h1 className="text-6xl font-bold ">{title}</h1>
        <p className="py-6 text-sm font-normal w-1/4">{overview}</p>
        <div className="flex gap-2">
          <button className="bg-white  px-5 py-2 text-black rounded-sm text-sm hover:opacity-85">
            ▶️Play
          </button>
          <button className="bg-gray-400  px-8 py-2 text-white rounded-sm text-sm hover:opacity-85">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
