import React, { useRef, useState } from "react";
import { Link } from "react-router";
import { formatViews, formateSecounds } from "../../utils/utils";
import VideoPlayer from "../VideoPlayer";
import image from "../../assets/avatar.png";
import { IoRadio } from "../../assets/Icons";

const HomeCard = ({ content }) => {
  const [hover, setHover] = useState(false);
  const ref = useRef(null);
  const view = content?.stats?.views || content?.stats?.viewers;
  const publish =
    content?.publishedTimeText === null
      ? "watching"
      : `views . ${content?.publishedTimeText}`;

  const onEnter = () => {
    ref.current = setTimeout(() => {
      setHover(true);
    }, 2000);
  };

  const onLeave = () => {
    setHover(false);
    clearTimeout(ref.current);
  };

  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="relative grid grid-rows-[250px_auto] justify-between size-full"
    >
      {/* Image */}

      <Link
        to={`/watch/${content?.videoId}`}
        className="relative w-full h-full bg-black rounded-2xl overflow-hidden"
      >
        {content && (
          <img
            className="w-full h-full"
            src={content?.thumbnails?.[0]?.url}
            alt={content?.title}
            title={content?.title}
          />
        )}

        {/* badge */}

        {content?.isLiveNow === true && (
          <div className="absolute bottom-2 right-2 flex gap-2">
            <span className="bg-black flex items-center gap-1 text-white px-1 text-sm rounded-sm">
              {formateSecounds(content?.lengthSeconds)}
            </span>
            <span className="bg-red-600 flex items-center gap-1 text-white px-1 text-sm rounded-sm">
              <IoRadio />
              {content?.badges?.[0]}
            </span>
          </div>
        )}

        {/* on hover play */}

        {hover && (
          <div className="absolute inset-0">
            <VideoPlayer videoId={content?.videoId} />
          </div>
        )}
      </Link>

      {/* Title, Avatar data */}

      <div className="w-full h-auto grid grid-cols-[40px_1fr] gap-4 p-2 items-start">
        <Link
          to={`/channel/${content?.author?.channelId}`}
          className="rounded-full ring-2 ring-gray-300 bg-white overflow-hidden"
        >
          {content && (
            <img
              className="size-full"
              src={content?.author?.avatar?.[0]?.url}
              alt={content?.author?.title}
              title={content?.author?.title}
              onError={(e) => {
                e.target.onerror = null; // Prevents infinite loop if fallback image also fails
                e.target.src = image; // Replace with your fallback image URL
              }}
            />
          )}
        </Link>

        <div className="flex flex-col justify-between">
          <Link
            to={`/watch/${content?.videoId}`}
            className="line-clamp-2 leading-5"
          >
            {content?.title}
          </Link>
          <Link
            to={`/channel/${content?.author?.channelId}`}
            className="text-gray-500 text-md"
          >
            {content?.author?.title}{" "}
            {content?.author?.badges?.[0]?.type === "VERIFIED_CHANNEL" && (
              <span className="p-0.3 bg-gray-500 text-white text-center rounded-full text-xs">
                ✔
              </span>
            )}
          </Link>
          <p className="flex items-center gap-2">
            {formatViews(view)} {publish}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
