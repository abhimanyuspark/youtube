import React, { useEffect } from "react";
import { HomeCard, Loader, Error } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../redux/server/server";

const Dashboard = ({ category }) => {
  const dispatch = useDispatch();
  const { videos, error, loading } = useSelector((state) => state.youtube);

  // useEffect(() => {
  //   dispatch(fetchVideos(category));
  // }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  if (error?.message) {
    return <Error error={error?.message} />;
  }

  if(loading === false && videos.length === 0){
    return <Error error="No Data found" />
  }

  return (
    <div>
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 p-4">
        {videos?.map((d, i) => (
          <li key={i}>
            <HomeCard content={d?.video} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
