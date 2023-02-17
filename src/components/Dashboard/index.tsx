import React from "react";
import Navbar from "../Navbar";
import Caps from "../Caps";
import AppsBar from "../AppsBar/Menu";

const Dashboard = () => {
  return (
    <div className="w-full h-full bg-cover bg-black">
      <div className="w-full h-auto pb-10">
        <Navbar />
      </div>
      <div>
        <Caps />
      </div>
      {/* fixed bottom */}
      <div className="w-full h-auto ">
        <AppsBar />
        </div>
    </div>
  );
};

export default Dashboard;
