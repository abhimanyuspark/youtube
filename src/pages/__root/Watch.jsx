import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { VideoPlayer } from "../../components";
import { VideoDetails, videoComment, relatedVideo } from "./demo";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdOutlineFileDownload,
  MdOutlineSort,
  SlLike,
  SlDislike,
  TiArrowForwardOutline,
} from "../../assets/Icons";
import { fetchVideoDetails } from "../../redux/server/server";

const Watch = () => {
  const { alldetails, loading, error } = useSelector((state) => state.details);
  const [descriptionLines, setdescriptionLines] = useState(false);
  const [reply, setReply] = useState(false);
  const { id } = useParams();

  const handleCLick = () => {
    setdescriptionLines(!descriptionLines);
  };

  const handlereply = () => {
    setReply(!reply);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVideoDetails(id));
  }, [dispatch, id]);

  console.log(alldetails, loading, error?.message);

  return (
    <div className="flex grid-cols-2 gap-4 flex-wrap">
      <div className="w-5xl p-5">
        <div className="rounded-none lg:rounded-2xl overflow-hidden w-full h-100 ">
          <VideoPlayer videoId={id} />
        </div>
        {VideoDetails.map((data, index) => (
          <div className="my-4" key={index}>
            <p className="flex items-center gap-2 font-bold text-xl">
              {data.title}
            </p>
            <div className="flex items-center justify-between ">
              <div className="flex items-center">
                <div className="size-[55px] bg-black my-4 rounded-3xl ">
                  <img src={""} alt="" />
                </div>
                <div className=" mx-2">
                 <Link to={`/channel/${data.author.channelId}`} ><p>{data.Channeltitle}</p></Link> 
                  <p className="font-extralight text-sm ">4.7M Subscriber</p>
                </div>
                <div className="min-h-10 min-w-25 bg-white text-black flex items-center justify-center rounded-3xl font-semibold mx-4">
                  Subscribe
                </div>
              </div>
              <div className="flex items-center justify-between ">
                <div className="flex w-35 h-10 bg-gray-900 items-center justify-between p-3 rounded-xl mr-2">
                  <div className="flex border-r-1 p-1">
                    <SlLike className=" text-2xl mr-3" />
                    <span className="mr-2">{data.stats.likes}</span>
                  </div>
                  <div className="text-2xl ">
                    <SlDislike />
                  </div>
                </div>
                <div className="flex items-center mr-2 justify-center rounded-xl  w-22 h-10 bg-gray-900">
                  <TiArrowForwardOutline className="text-2xl" /> shear
                </div>
                <div className="flex items-center justify-center rounded-xl  w-28 h-10 bg-gray-900">
                  <MdOutlineFileDownload className="text-2xl" /> download
                </div>
              </div>
            </div>
            <div className="w-full h-full bg-gray-800 p-2 rounded-2xl mb-4">
              <div className="flex flex-wrap">
                <p className="font-bold w-xl">
                  {data.stats.views} views {data.publishedDate}
                </p>
                <p className="font-bold mb-4">{data.keywords}</p>
              </div>
              <div className="gap-2">
                {descriptionLines == false
                  ? data.description.slice(0, 300)
                  : data.description}
                {descriptionLines == false ? (
                  ""
                ) : (
                  <div className="flex items-center">
                    <div className="size-[55px] bg-black my-4 rounded-3xl ">
                      <img src={""} alt="" />
                    </div>
                    <div className=" mx-3">
                      <p>{data.Channeltitle}</p>
                      <p className="font-extralight text-sm">4.7M Subscriber</p>
                    </div>
                  </div>
                )}
              </div>
              <p className="mt-2 cursor-pointer" onClick={handleCLick}>
                {descriptionLines == false ? "...more" : "show less"}
              </p>
            </div>
            <div className="flex justify-between w-xs">
              <p className="font-bold w-xl">{data.stats.comments} comments</p>
              <div className="flex w-2xs justify-center items-center">
                <p>
                  <MdOutlineSort className="text-lg mr-2" />
                </p>
                <p>short by</p>
              </div>
            </div>
          </div>
        ))}
        <div>
          {videoComment.map((comments, index) => (
            <div key={index}>
              <div className="flex items-center mt-6">
                <div className="size-[55px] bg-black my-4 rounded-3xl ">
                  <img src={""} alt="" />
                </div>
                <div className="ml-3">
                  <p className="font-bold">
                    {comments.author.title}{" "}
                    <span className="text-xs text-gray-400">
                      {comments.publishedTimeText}
                    </span>
                  </p>
                  <p>{comments.content}</p>
                  <div className="flex justify-between w-32 mt-3">
                    <div className="flex items-center ">
                      <SlLike className="mr-2" /> {comments.stats.votes}
                    </div>
                    <div className="flex items-center ">
                      <SlDislike className="mr-2" />
                    </div>
                    <div>Reply</div>
                  </div>
                  <div className=" mt-3">
                    <div
                      className="flex items-center text-blue-400"
                      onClick={handlereply}
                    >
                      {reply == false ? (
                        <MdOutlineKeyboardArrowDown className="text-3xl font-thin" />
                      ) : (
                        <MdOutlineKeyboardArrowUp className="text-3xl font-thin" />
                      )}{" "}
                      replies
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        {relatedVideo.map((data, index) => (
          <div key={index} className="flex mb-2 w-full ">
            <div className="w-45 h-25">
              <img
                className="rounded-2xl w-full h-full"
                src={data.video.avatarThumbnailUrl}
                alt="img"
              />
            </div>
            <div className="flex flex-wrap w-70 ml-2">
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
