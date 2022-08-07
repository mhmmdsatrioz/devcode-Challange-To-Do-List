import React from "react";
import ArrowLeft from "../../assets/arrowleft.svg";
import Pen from "../../assets/pen.png";
const ActivityDetail = () => {
  return (
    <>
      <div className="px-28 ">
        <div className="mt-[43px] flex items-center gap-[23px] text-[36px]">
          <img src={ArrowLeft} alt="Arrow" />

          <div className="">
            <input className=" focus:border-b-black border-b-2  w-[233px] h-[54px] focus:outline-none font-popin font-[700]" />
          </div>
          <img src={Pen} />
        </div>
      </div>
    </>
  );
};

export default ActivityDetail;
