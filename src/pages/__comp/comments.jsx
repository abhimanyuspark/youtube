import React, { useEffect, useState } from "react";
import {
  SlLike,
  SlDislike,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "../../assets/Icons";
import { useParams } from "react-router";
import { fetchVideoComments } from "../../redux/server/server";
import { useSelector, useDispatch } from "react-redux";

export const Comments = () => {
  const { allComments } = useSelector((state) => state.allcomments);
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVideoComments(id));
  }, [dispatch, id]);

  return (
    <>
      {allComments?.map((comments, index) => (
        <div key={index}>
          <div className="flex items-center mt-6">
            <div className="size-[55px] bg-black my-4 rounded-3xl ">
              <img src={""} alt="" />
            </div>
            <div className="ml-3">
              <p className="font-bold">
                {comments.author.title}{" "}
                <span className="text-xs text-gray-400">
                  {comments.publishedTimeText}
                </span>
              </p>
              <p>{comments.content}</p>
              <div className="flex justify-between w-32 mt-3">
                <div className="flex items-center ">
                  <SlLike className="mr-2" /> {comments.stats.votes}
                </div>
                <div className="flex items-center ">
                  <SlDislike className="mr-2" />
                </div>
                <div>Reply</div>
              </div>
              <div className=" mt-3">
                <Replies />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const Replies = () => {
  const [reply, setReply] = useState(true);

  return (
    <div
      className="flex items-center text-blue-400"
      onClick={() => setReply(!reply)}
    >
      {reply ? (
        <MdOutlineKeyboardArrowDown className="text-3xl font-thin" />
      ) : (
        <MdOutlineKeyboardArrowUp className="text-3xl font-thin" />
      )}{" "}
      replies
    </div>
  );
};
