import React from "react";

const VideoPlayer = ({ videoId }) => {
  const src = `https://www.youtube.com/embed/${videoId}`;


  return (
    <div className="w-full relative pb-[50%] sm:pb-[30%] bg-black rounded-sm overflow-hidden">
      <iframe
        src={src}
        title="YouTube Video Player"
        className="absolute inset-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={true}
      />
    </div>
  );
};

export default VideoPlayer;
