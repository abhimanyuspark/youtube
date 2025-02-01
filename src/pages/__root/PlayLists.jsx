import React from "react";
import { useSelector } from "react-redux";
import { Error, Loader } from "../../components";

const PlayLists = () => {
  const { appUser, loading } = useSelector((state) => state.auth);

  if (loading) {
    return <Loader />;
  }

  if (appUser?.playLists?.length === 0) {
    return <Error error="No Data Found" />;
  }

  return (
    <div>
      {appUser?.playLists?.map((p, i) => (
        <div key={i}>{p.title}</div>
      ))}
    </div>
  );
};

export default PlayLists;
