import React, { useEffect } from "react";
import { Loader, Error, HomeCard } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../redux/server/server";

const Explore = ({ category }) => {
  const dispatch = useDispatch();
  const { url, title } = category;
  const { videos, error, loading } = useSelector((state) => state.youtube);

  // useEffect(() => {
  //   dispatch(fetchVideos(url));
  // }, [dispatch, url]);

  if (loading) {
    <Loader />;
  }

  if (error?.message) {
    return <Error error={error?.message} />;
  }

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl flex items-center gap-4 px-6 py-2">
        <div className="p-2 rounded-full bg-red-600 text-white">
          <category.icon className="size-12" />
        </div>
        <span>{title}</span>
      </h2>

      <hr className="border border-gray-700" />

      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 p-4">
        {videos?.contents?.map((d, i) => (
          <li key={i}>
            <HomeCard content={d?.video} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Explore;
