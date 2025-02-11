import React, { useState } from "react";
import { useParams } from "react-router";
import { VideoPlayer, DropDown, Model } from "../../components";
import { relatedVideo } from "./demo";

import { all } from "axios";
import { Details } from "../__comp/details";
import { Comments } from "../__comp/comments";

const Watch = () => {
  // const { appUser } = useSelector((state) => state.auth);
  const [playList, setPlayList] = useState(false);

  const { id } = useParams();

  return (
    <div className="grid sm:grid-cols-[1fr_400px] grid-cols-1 gap-6 sm:p-4 p-2">
      <div>
        <div className="rounded-none lg:rounded-2xl overflow-hidden w-full h-100 ">
          <VideoPlayer videoId={id} />
        </div>
        <Details />
<Comments/>
      </div>

      <div className="flex gap-4 flex-wrap">
        {relatedVideo.map((data, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-4 sm:grid-rows-[100px] grid-rows-1"
          >
            <div>
              <img
                className="rounded-2xl w-full h-full"
                src={data.video.avatarThumbnailUrl}
                alt="img"
              />
            </div>

            <div className="flex flex-wrap">
              <p>{data.video.title}</p>
              <div className=" text-gray-400 text-sm">
                <p>{data.video.author.title}</p>
                <p>
                  {data.video.stats.views} views *{" "}
                  {data.video.publishedTimeText}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



export default Watch;
