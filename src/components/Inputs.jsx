import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "../assets/Icons";

const Input = ({
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  className,
  label,
  error,
  show,
  setShow,
  ...props
}) => {
  const [focus, setFocus] = useState(false);

  return (
    <div className="relative">
      <div className="flex gap-3 flex-col text-sm/6 font-medium">
        <label
          htmlFor={name}
          className={`absolute ${
            focus || value ? "top-[-1.2rem] px-2 py-1" : "top-2"
          } left-4 bg-gray-950 top-0 block text-sm/6 font-semibold`}
        >
          {label}
        </label>

        {name === "password" && (
          <div
            onClick={(e) => {
              e.stopPropagation();
              setShow();
            }}
            aria-hidden="true"
            className="absolute top-2 right-2"
          >
            {show ? (
              <FaEye className="size-6" />
            ) : (
              <FaEyeSlash className="size-6" />
            )}
          </div>
        )}

        <input
          id={name}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          className={`block w-full rounded-md px-3 py-2 text-base outline-1 -outline-offset-1  placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 ${
            error
              ? "outline-red-500 focus:outline-red-600"
              : "outline-gray-300 focus:outline-indigo-600"
          }`}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          onBlur={() => {
            setFocus(false);
          }}
          onFocus={() => {
            setFocus(true);
          }}
          {...props}
        />

        <p className="text-red-500 text-sm">{error}</p>
      </div>
    </div>
  );
};

// const Input = ({
//   type = "text",
//   name,
//   value,
//   onChange,
//   placeholder,
//   className,
//   label,
//   error,
//   show,
//   setShow,
//   ...props
// }) => {
//   const [focus, setFocus] = useState(false);

//   return (
//     <div className="relative">
      
//     </div>
//   );
// };

export { Input };
