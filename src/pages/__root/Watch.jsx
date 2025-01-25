import React from "react";
import { useParams } from "react-router";
import { VideoPlayer } from "../../components";

const Watch = () => {
  const { id } = useParams();
  return (
    <div>
      <VideoPlayer videoId={id} />
      <div>comments</div>
    </div>
  );
};

export default Watch;
