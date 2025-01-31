import React, { useEffect, useState } from "react";
import { ChannelData } from "./demo";
import { useSearchParams } from "react-router";

const tabs = [{ tab: "Home" }, { tab: "Video" }, { tab: "Playlists" }];

const Channel = () => {
  const [description, setDescription] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get("tab");
  const initialTab = tabs.find((t) => t.tab === tabParam) || tabs[0];
  const [tab, setTab] = useState(initialTab);

  const onChangeTab = (t) => {
    setTab(t);
    setSearchParams({ tab: t.tab });
  };

  useEffect(() => {
    if (searchParams) {
      const tabParam = searchParams.get("tab");
      const newTab = tabs.find((t) => t.tab === tabParam) || tabs[0];
      setTab(newTab);
    }
  }, [searchParams]);

  return (
    <div>
      {ChannelData.map((data, index) => (
        <div key={index} className="pl-30 pr-30">
          <div className="w-full h-45 bg-black rounded-2xl overflow-hidden">
            {data.banner.mobile.length > 0 ? (
              <img src="" alt="" className="w-full h-full" />
            ) : (
              <div className="text-center">{data.title}</div>
            )}
          </div>
          <div className="flex mt-8 ">
            <div className="w-45 h-45 rounded-full overflow-hidden bg-black">
              {data.avatar[0].url && (
                <img
                  src={data.avatar[0].url}
                  alt=""
                  className="w-full h-full"
                />
              )}
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
                <p
                  onClick={() => {
                    setDescription(!description);
                  }}
                  className="cursor-pointer"
                >
                  {data.description.slice(
                    0,
                    description ? data.description.length : 51
                  )}{" "}
                  ...more
                </p>
              </div>
              <div className="min-h-10 w-30 bg-white text-black flex items-center justify-center rounded-3xl font-semibold mt-2">
                <p>Subscribe</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="mt-5 pl-22 pr-30 sticky top-15">
        {tabs.map((t, i) => (
          <button
            key={i}
            className="w-30 h-19 cursor-pointer"
            style={{ borderBottom: t.tab === tab.tab ? "4px solid white" : "" }}
            onClick={() => onChangeTab(t)}
          >
            {t.tab}
          </button>
        ))}
      </div>
      <hr className="mt-1" />
    </div>
  );
};

export default Channel;
