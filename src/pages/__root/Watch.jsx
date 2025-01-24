import React from "react";
import { useParams } from "react-router";
import { VideoPlayer } from "../../components";

const Watch = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Watch {id}</h2>
      <VideoPlayer videoId={id} />
      <div>comments</div>
    </div>
  );
};

export default Watch;
