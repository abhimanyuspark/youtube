import { useState } from "react";

const useToggle = (initial = false) => {
  const [toggle, setToggle] = useState(initial);

  const handleToggle = (value) => {
    if (value) {
      setToggle(value);
    } else {
      setToggle(!toggle);
    }
  };

  return [toggle, handleToggle];
};

export default useToggle;
