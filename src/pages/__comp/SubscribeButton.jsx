import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addChannelSubscribe } from "../../redux/server/authServer";

const SubscribeButton = ({ data }) => {
  const { appUser, loading } = useSelector((state) => state.auth);
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (appUser && data?.videoId) {
      const c = appUser?.subscribedChannels?.some(
        (item) => item?.author?.channelId === data?.author?.channelId
      );
      setCheck(c);
    }
  }, [appUser]);

  const onUnSubscribed = async () => {
    await toast.promise(
      dispatch(
        addChannelSubscribe({
          id: appUser?.id,
          channel: data,
          action: "delete",
        })
      ),
      {
        pending: "UnSubcribing....",
        error: "error",
        success: "UnSubcribing Successfull",
      }
    );
    setCheck(false);
  };

  const onSubscribe = async () => {
    await toast.promise(
      dispatch(
        addChannelSubscribe({
          id: appUser?.id,
          channel: data,
          action: "add",
        })
      ),
      {
        pending: "Subscibing....",
        error: "Subscriptions error.",
        success: "Subscriptions Successfull",
      }
    );
    setCheck(true);
  };

  if (check) {
    return (
      <button
        className="min-h-10 min-w-25 border border-white text-white flex items-center justify-center rounded-3xl font-semibold px-4 cursor-pointer"
        onClick={onUnSubscribed}
      >
        {loading ? "UnSubcribing..." : "Subscribed"}
      </button>
    );
  } else {
    return (
      <button
        className="min-h-10 min-w-25 bg-white text-black flex items-center justify-center rounded-3xl font-semibold px-4 cursor-pointer"
        onClick={onSubscribe}
      >
        {loading ? "Subcribing...." : "Subscribe"}
      </button>
    );
  }
};

export default SubscribeButton;
