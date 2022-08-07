import React, { useEffect, useState } from "react";
import Thumbnail from "../assets/activity-empty-state.png";
import "../App.css";
import Navbar from "../components/Navs";
import Card from "../components/Card";
import { IActivityResponse } from "../Types/Activity";
import { getActivityAPI, postActivityAPI } from "../utils/FetchAPI";

function Home() {
  const [activity, setActivity] = useState<IActivityResponse[] | []>([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const { data } = await getActivityAPI();
      // console.log(data, "< this is response ");
      setActivity(data);
    };
    fetchAPI();
  }, []);

  const filterDelete = (id: number) => {
    const filter = activity.filter((item) => item.id !== id);
    setActivity(filter);
    console.log(filter);
  };

  const createActivity = async () => {
    const res = await postActivityAPI();
    setActivity([...activity, res]);
  };

  return (
    <>
      <div className="px-28 min-h-[15vh] flex justify-between mt-5">
        <h1 className="font-bold text-[36px]">Activity </h1>
        <button
          onClick={createActivity}
          className="bg-[#16ABF8] w-[159px] rounded-full text-white font-[600] h-[54px]"
        >
          Tambah
        </button>
      </div>
      {activity.length === 0 ? (
        <img
          onClick={createActivity}
          className="text-center block mx-auto mb-10"
          src={Thumbnail}
        />
      ) : (
        <Card filterDelete={filterDelete} data={activity} />
      )}
    </>
  );
}

export default Home;
