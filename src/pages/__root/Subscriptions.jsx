import React from "react";
import { useSelector } from "react-redux";
import { Error, Loader } from "../../components";

const Subscriptions = () => {
  const { appUser, loading } = useSelector((state) => state.auth);

  if (loading) {
    return <Loader />;
  }

  if (appUser?.subscribedChannels?.length === 0) {
    return <Error error="No Data Found" />;
  }

  return (
    <div>
      {appUser?.subscribedChannels?.map((s, i) => (
        <div key={i}>{s?.title}</div>
      ))}
    </div>
  );
};

export default Subscriptions;
