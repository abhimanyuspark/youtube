import React, { useState, useEffect } from "react";
import Loader from "./Loader";

const VideoPlayer = ({ videoId }) => {
  const [loading, setLoading] = useState(false);
  const src = `https://www.youtube.com/embed/${videoId}`;

  useEffect(() => {
    if(videoId){
      setLoading(true);
    }
  }, [videoId]);

  return (
    <div
      className="relative w-full h-full bg-black"
    >
      {loading && (
        <Loader />
      )}
      <iframe
        src={`${src}?autoplay=true`}
        title={src}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={true}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
};

export default VideoPlayer;
