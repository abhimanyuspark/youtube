import React from "react";
import { useParams } from "react-router";
import { VideoPlayer } from "../../components";

const Watch = () => {
  const { id } = useParams();
  return (
    <div className="mx-0 lg:mx-auto p-0 sm:p-2 lg:p-4 w-full lg:w-[75%] h-full grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8 grid-rows-[400px_auto]">
      <div className="rounded-none lg:rounded-2xl overflow-hidden">
        <VideoPlayer videoId={id} />
      </div>
      <div>Related videos</div>
    </div>
  );
};

export default Watch;
