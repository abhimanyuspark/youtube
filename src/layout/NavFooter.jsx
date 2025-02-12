import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const NavFooter = () => {
  const { isLogin, appUser } = useSelector((state) => state.auth);

  return (
    <div className="flex fixed bg-gray-950 sm:p-0 p-4 bottom-0 left-0 sm:w-auto w-full sm:static gap-2 items-center justify-end sm:border-gray-950 sm:border-t-0 border-t border-gray-800">
      {/* Sign In && Sign Up */}
      <Auth isLogin={isLogin} user={appUser} />
    </div>
  );
};

const Auth = ({ isLogin, user }) => {
  return (
    <div>
      {isLogin ? (
        <div className="rounded-full overflow-hidden size-10">
          {/* {user.avatar && (
            <img src={user?.avatar} className="size-full object-cover" />
          )} */}
          {user.name && (
            <div className="bg-red-500 flex items-center justify-center size-full leading-0 font-semibold text-2xl first:uppercase pb-1">
              {user?.name?.slice(0, 1)}
            </div>
          )}
        </div>
      ) : (
        <Link
          to="/signUp"
          className="border border-gray-900 rounded-full px-4 h-10 flex items-center justify-center"
        >
          Sign Up
        </Link>
      )}
    </div>
  );
};

export default NavFooter;
