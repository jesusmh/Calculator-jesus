import React from "react";

function ClearScreen(props) {
  return (
    <div
      className="flex mt-[8px] justify-center items-center font-bold text-center text-[40px] w-[60px] text-orange-400 cursor-pointer rounded-full hover:bg-gray-900 "
      onClick={props.handleScreen}
    >
      C
    </div>
  );
}

export default ClearScreen;
