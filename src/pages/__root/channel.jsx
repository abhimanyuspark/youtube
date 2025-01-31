import react, { useState } from "react";
import { ChannelData } from "./demo";

export const Channel = () => {
  const [description, setdiscription] = useState(false);
  const [Home, setHome] = useState(true);
  const [Video, setVideo] = useState(false);
  const [playlists, setplaylists] = useState(false);

  const HandleHomeClick = () => {
    setHome(true);
    setVideo(false);
    setplaylists(false);
  };
  const HandleVideoClick = () => {
    setVideo(true);
    setHome(false);
    setplaylists(false);
  };
  const HandlePlaylistsClick = () => {
    setplaylists(true);
    setHome(false);
    setVideo(false);
  };
  return (
    <div>
      {ChannelData.map((data, index) => (
        <div key={index} className="pl-30 pr-30">
          <div className="w-full h-43 bg-black rounded-2xl">
            <img src="" alt="" className="w-full h-full rounded-2xl" />
          </div>
          <div className="flex mt-8 ">
            <div className="w-45 h-45 rounded-full bg-black">
              <img src="" alt="" className="w-full h-full rounded-full" />
            </div>
            <div className="ml-5 text-base/8">
              <div className="text-3xl font-bold">{data.title}</div>
              <div>
                <p>
                  <span className="font-bold">{data.title}</span> •{" "}
                  {data.stats.subscribersText} • 38 videos
                </p>
              </div>
              <div>
                <p>{data.description.slice(0, 51)} ...more</p>
              </div>
              <div className="min-h-10 w-30 bg-white text-black flex items-center justify-center rounded-3xl font-semibold mt-2">
                <p>Subscribe</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="mt-5 pl-22 pr-30">
        <button
          className="w-30 h-19 "
          style={{ borderBottom: Home ? "4px solid white" : "" }}
          onClick={HandleHomeClick}
        >
          Home
        </button>
        <button
          className="w-30 h-19"
          style={{ borderBottom: Video ? "4px solid white" : "" }}
          onClick={HandleVideoClick}
        >
          Videos
        </button>
        <button
          className="w-30 h-19 "
          style={{ borderBottom: playlists ? "4px solid white" : "" }}
          onClick={HandlePlaylistsClick}
        >
          Playlists
        </button>
      </div>
      <hr className="mt-1"/>
    </div>
  );
};
