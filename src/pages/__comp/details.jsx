import react, { useState, useEffect } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdOutlineFileDownload,
  SlLike,
  SlDislike,
  TiArrowForwardOutline,
  MdPlaylistPlay,
  MdOutlineSort,
} from "../../assets/Icons";
import SubscribeButton from "../__comp/SubscribeButton";
import { fetchVideoDetails } from "../../redux/server/server";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router";
import { VideoPlayer, DropDown, Model } from "../../components";

export const Details = () => {
  const [descriptionLines, setdescriptionLines] = useState(false);
  const { alldetails, loading, error } = useSelector((state) => state.details);
  const handleCLick = () => {
    setdescriptionLines(!descriptionLines);
  };
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchVideoDetails(id));
  }, [dispatch, id]);

  return (
    <div>
      {alldetails?.map((data, index) => (
        <div className="py-4" key={index}>
          <p className="flex items-center gap-2 font-bold text-xl">
            {data.title}
          </p>

          <div className="flex items-center justify-between flex-col sm:flex-row sm:mb-0 mb-4">
            <div className="flex items-center justify-between w-full sm:w-auto">
              <div className="size-[55px] bg-black my-4 rounded-3xl">
                <img src={""} alt="" />
              </div>

              <div className="mx-2">
                <Link to={`/channel/${data.author.channelId}`}>
                  <p>{data.author.title}</p>
                </Link>
                <p className="font-extralight text-sm ">4.7M Subscriber</p>
              </div>

              <SubscribeButton data={data} />
            </div>

            <div className="flex items-center justify-between gap-2 w-full sm:w-auto">
              <div className="flex w-35 h-10 bg-gray-900 items-center justify-between p-3 rounded-xl">
                <div className="flex border-r-1 p-1">
                  <SlLike className=" text-2xl mr-3" />
                  <span className="mr-2">{data.stats.likes}</span>
                </div>
                <div className="text-2xl ">
                  <SlDislike />
                </div>
              </div>

              <div>
                <Menu
                  onOpen={() => {
                    setPlayList(true);
                  }}
                />
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
                    <p>{data.author.title}</p>
                    <p className="font-extralight text-sm">4.7M Subscriber</p>
                  </div>
                </div>
              )}
            </div>
            <p className="mt-2 cursor-pointer" onClick={handleCLick}>
              {descriptionLines == false ? "...more" : "less"}
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
    </div>
  );
};

const MyPlayLists = ({ playList, onClose }) => {
  return (
    <Model open={playList} onClose={onClose} label="My PlayLists">
      <li>Abhimanyu</li>
      <li>Favrioute</li>
      <li>Games</li>
    </Model>
  );
};

const Menu = ({ onOpen }) => {
  return (
    <DropDown>
      <li>
        <TiArrowForwardOutline className="text-2xl" /> Share
      </li>
      <li>
        <MdOutlineFileDownload className="text-2xl" /> Download
      </li>
      <li onClick={onOpen}>
        <MdPlaylistPlay className="text-2xl" /> Save To PlayList
      </li>
    </DropDown>
  );
};
