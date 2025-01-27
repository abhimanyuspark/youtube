import { useEffect, useState } from "react";

const useIternetCheck = () => {
  const [check, setCheck] = useState(true);

  useEffect(() => {
    const handleOffline = () => {
      // alert("You are offline");
      setCheck(false);
    };

    const handleOnline = () => {
      // alert("You are online");
      setCheck(true);
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return check;
};

export default useIternetCheck;
