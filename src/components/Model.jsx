import React from "react";
import { useClickOutside } from "../hooks";
import { FaTimes } from "../assets/Icons";

const Model = ({ open, onClose, label = "Label", children }) => {
  const ref = useClickOutside(onClose);
  if (open) {
    return (
      <div
        ref={ref}
        className="bg-gray-900 p-4 rounded-xl flex flex-col gap-2 fixed top-1/2 left-1/2 -translate-1/2 w-100 h-auto"
      >
        <h2 className="flex items-center justify-between text-xl p-2">
          <span>{label}</span>
          <span className="cursor-pointer" onClick={onClose}>
            <FaTimes />
          </span>
        </h2>

        <ul className="*:py-2 *:px-2 *:rounded-lg *:cursor-pointer *:flex *:items-center *:justify-between *:hover:bg-gray-800">
          {children}
        </ul>
      </div>
    );
  }
};

export default Model;
