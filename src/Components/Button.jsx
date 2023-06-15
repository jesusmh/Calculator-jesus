import React from "react";

function Button(props) {
  const isOperator = (value) => {
    return isNaN(value) && value !== "." && value !== "=";
  };

  return (
    <div
      className={`text-center flex-1 h-[83px] m-[4px] cursor-pointer font-bold text-slate-50 text-[40px] rounded-full bg-black hover:bg-gray-900 select-none ${
        isOperator(props.children)
          ? "bg-orange-400 transition ease-in-out delay-100 hover:translate-y-1 hover:bg-orange-500 duration-100"
          : ""
      }`.trimEnd()}
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </div>
  );
}

export default Button;
