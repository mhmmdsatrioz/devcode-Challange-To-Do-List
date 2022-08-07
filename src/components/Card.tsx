import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { IActivityResponse } from "../Types/Activity";
import moment from "moment";
import { deleteActivityAPI } from "../utils/FetchAPI";
import { useNavigate } from "react-router-dom";

interface IProps {
  data: IActivityResponse[];
  filterDelete: (id: number) => void;
  // setActivity: React.Dispatch<React.SetStateAction<[] | IActivityResponse[]>>;
}

const Card: React.FC<IProps> = ({ data, filterDelete }) => {
  const navigate = useNavigate();
  const handleDeleted = async (id: number) => {
    deleteActivityAPI(id);
    filterDelete(id);
    // setActivity((prev) => prev)
  };
  return (
    <>
      <div className="flex px-28 mt-8 flex-wrap gap-4">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="bg-white w-[235px] h-[234px] shadow-cardShadow rounded-[12px] px-[27px] py-[22px]"
          >
            <div className="flex justify-between flex-col h-full">
              <h1
                onClick={() => navigate(`/detail/${item.id}`)}
                className="cursor-pointer font-[700] font-popin"
              >
                {item.title}
              </h1>

              <div className="flex justify-between items-center">
                <p className="text-[#888888]">
                  {moment(item.created_at).format("DD MMMM YYYY")}
                </p>
                <FiTrash2
                  onClick={() => handleDeleted(item.id)}
                  className="text-[#888888] cursor-pointer"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
