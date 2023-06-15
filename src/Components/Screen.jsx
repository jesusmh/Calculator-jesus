import React from "react";

function Screen({ input }) {
  return (
    <div className="h-[85px] mb-[20px] rounded-[50px] border-4 flex justify-end items-center font-bold text-[30px] text-white p-[11px] pr-[30px] m-[1px]  border-black">
      {input}
    </div>
  );
}

export default Screen;
