import React from "react";

const CustomButton = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className=" p-2 border-2 bg-black bg-opacity-25 hover:bg-gray-400 rounded-full flex items-center justify-center focus:outline-none"
    >
      {children}
    </button>
  );
};

export default CustomButton;
