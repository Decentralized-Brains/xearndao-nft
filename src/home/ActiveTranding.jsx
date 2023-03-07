import React from "react";
import ActiveHypeScore from "../components/ActiveHypeScore";
import TrendingCollection from "../components/TrendingCollection";

const ActiveTranding = () => {
  return (
    <div className="bg-[#F9F9F9] my-10 py-10">
      <div className="container ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
          <div>
            <ActiveHypeScore />
          </div>
          <div>
            <TrendingCollection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveTranding;
