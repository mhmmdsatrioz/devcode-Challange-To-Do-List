import React, { createRef } from "react";
import ArrowLeft from "../../assets/arrowleft.svg";
import Pen from "../../assets/pen.png";

const ActivityDetail = () => {
  const inputRef = createRef<HTMLInputElement>();
  console.log(inputRef);
  return (
    <>
      <div className="px-28 ">
        <div className="mt-[43px] flex items-center gap-[23px] text-[36px]">
          <img src={ArrowLeft} alt="Arrow" />

          <div className="">
            <input
              ref={inputRef}
              className=" focus:border-b-black border-b-2  w-[233px] h-[54px] focus:outline-none font-popin font-[700]"
            />
          </div>
          <img
            onClick={() => inputRef.current?.focus()}
            className="cursor-pointer"
            src={Pen}
          />
        </div>
      </div>
    </>
  );
};

export default ActivityDetail;
