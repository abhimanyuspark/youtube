import React, { useState, useEffect } from "react";
import Loader from "./Loader";

const VideoPlayer = ({ videoId }) => {
  const [loading, setLoading] = useState(false);
  const src = `https://www.youtube.com/embed/${videoId}`;

  useEffect(() => {
    setLoading(true);
  }, [videoId]);

  return (
    <div
      title={videoId}
      className="w-full relative pb-[50%] sm:pb-[30%] bg-black rounded-sm overflow-hidden"
    >
      {loading && (
        <Loader />
      )}
      <iframe
        src={src}
        title={videoId}
        className="absolute inset-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={true}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
};

export default VideoPlayer;
