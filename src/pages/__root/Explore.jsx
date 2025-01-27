import React, { useEffect } from "react";
import { Loader, Error, HomeCard } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../redux/server/server";
import { Link } from "react-router";

const Explore = ({ category }) => {
  const dispatch = useDispatch();
  const { url, title } = category;
  const { videos, error, loading } = useSelector((state) => state.youtube);

  // useEffect(() => {
  //   dispatch(fetchVideos(url));
  // }, [dispatch, url]);

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

      <Link
        to={"/watch/kJQP7kiw5Fk"}
        className="p-2 text-center border border-slate-700 rounded-md"
      >
        Watch page
      </Link>

      {loading && <Loader />}

      {videos.length > 0 ? (
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 p-4">
          {videos?.map((d, i) => (
            <li key={i}>
              <HomeCard content={d?.video} />
            </li>
          ))}
        </ul>
      ) : (
        <Error error="No Data found" />
      )}
    </div>
  );
};

export default Explore;
