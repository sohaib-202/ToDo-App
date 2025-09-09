import React from "react";

const Button = ({ AddBtn, text }) => {
  return (
    <button
      onClick={AddBtn}
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded-lg m-1 cursor-pointer"
    >
      {text}
    </button>
  );
};

export default Button;
