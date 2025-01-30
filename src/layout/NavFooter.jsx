import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const NavFooter = () => {
  const { isLogin, appUser } = useSelector((state) => state.auth);

  return (
    <div className="flex gap-4 items-center">
      {/* Sign In && Sign Up */}
      <Auth isLogin={isLogin} user={appUser} />
    </div>
  );
};

const Auth = ({ isLogin , user }) => {
  return (
    <div>
      {isLogin ? (
        <div className="rounded-full overflow-hidden size-10"><img src={user?.avatar} className="size-full object-cover" /></div>
      ) : (
        <Link to="/signUp" className="border border-gray-900 rounded-full px-4 h-10 flex items-center justify-center">Sign Up</Link>
      )}
    </div>
  );
};

export default NavFooter;
